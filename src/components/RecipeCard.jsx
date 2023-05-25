import React, { useState, Suspense, useEffect } from 'react';
import { LazyImage } from './LazyImage';

export const RecipeCard = ({ searchTerm, onRecipeClick }) => {
  const [cards, setCards] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const showCard = async () => {
    if (typeof searchTerm === 'string' && searchTerm.trim() === '') {
      setCards([]);
      setShowMessage(false);
      return;
    }

    try {
      const response = await fetch('./recipe.json');
      const data = await response.json();
      const searchResults = data.COOKRCP01.row.filter((recipe) =>
        recipe.RCP_NM.includes(searchTerm)
      );
      const results =
        typeof searchTerm === 'string' ? searchResults : searchTerm;

      if (results.length === 0) {
        setCards([]);
        setShowMessage(true);
      } else {
        setCards(results);
        setShowMessage(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showCard();
  }, [searchTerm]);

  return (
    <div className="flex flex-wrap justify-evenly mt-64 mb-48">
      {showMessage ? (
        <p className="text-center font-medium text-xl text-korean-red">
          해당되는 레시피가 없습니다.
        </p>
      ) : (
        <>
          {cards.map((recipe) => (
            <div
              key={recipe.RCP_SEQ}
              className="relative w-80 h-80 mb-10 cursor-pointer z-10 shadow-lg rounded-xl  hover:scale-105 ease-out duration-300"
              onClick={() => onRecipeClick(recipe)}
            >
              <h2 className="w-full absolute top-1/2 text-center text-2xl font-semibold text-white z-[1] px-7 leading-normal translate-y-[-50%]">
                {recipe.RCP_NM}
              </h2>
              <Suspense
                fallback={
                  <img
                    className="w-full h-full rounded-xl brightness-[0.3] bg-white hover:brightness-100"
                    src="/cutlery.png"
                    alt={recipe.RCP_NM}
                  />
                }
              >
                <LazyImage
                  src={recipe.ATT_FILE_NO_MAIN}
                  alt={recipe.RCP_NM}
                  className="w-full h-full rounded-xl brightness-[0.3] bg-white hover:brightness-100"
                  loadingClassName="absolute flex w-full h-full rounded-xl flex-col items-center justify-center bg-black/70 z-[1]"
                />
              </Suspense>
              <p className="absolute bottom-2.5 left-2.5 text-white text-sm">
                #{recipe.RCP_PAT2} #{recipe.RCP_WAY2}
                {recipe.HASH_TAG && `#${recipe.HASH_TAG}`}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
