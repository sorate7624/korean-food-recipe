import React, { useState, Suspense, useEffect } from 'react';
import { LazyImage } from './LazyImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import { isBrowser } from 'react-device-detect';

export const RecipeCard = ({ searchTerm, onRecipeClick }) => {
  const [cards, setCards] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [results, setResults] = useState([]);
  const DEFAULT_SHOW_CARD = 6;

  const showCard = async () => {
    if (typeof searchTerm === 'string' && searchTerm.trim() === '') {
      setCards([]);
      setShowMessage(false);
      setResults([]);
      setHasMore(true);
      setPage(1);
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
        setResults([]);
        setHasMore(false);
        setPage(1);
      } else {
        const initialCards = results.slice(0, DEFAULT_SHOW_CARD);
        setCards(initialCards);
        setShowMessage(false);
        setResults(results);
        setHasMore(results.length > DEFAULT_SHOW_CARD);
        setPage(2);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      const startIndex = cards.length;
      const endIndex = startIndex + DEFAULT_SHOW_CARD;
      const additionalCards = results.slice(startIndex, endIndex);

      if (additionalCards.length === 0) {
        setHasMore(false);
        return;
      }

      setCards((prevCards) => [...prevCards, ...additionalCards]);
      setPage((prevPage) => prevPage + 1);

      if (endIndex >= results.length) {
        setHasMore(false);
      }
    }, 1500);
  };

  useEffect(() => {
    showCard();
  }, [searchTerm]);

  useEffect(() => {
    if (page > 1) {
      fetchMoreData();
    }
  }, [page]);

  return (
    <div>
      {showMessage ? (
        <p className="text-center font-medium text-xl text-korean-red mt-64">
          해당되는 레시피가 없습니다.
        </p>
      ) : (
        <>
          {cards.length > 0 && (
            <InfiniteScroll
              dataLength={cards.length}
              next={fetchMoreData}
              // next={false}
              hasMore={hasMore}
              loader={
                <p className="w-full text-center font-medium text-xl text-korean-blue">
                  Loading...
                </p>
              }
              endMessage={
                <p className="w-full text-center font-medium text-xl text-korean-red">
                  더 이상 레시피가 없습니다.
                </p>
              }
              className={`${
                isBrowser && `mt-64`
              } flex flex-wrap justify-evenly mb-48`}
            >
              {cards.map((recipe, index) => (
                <div
                  key={`${recipe.RCP_SEQ}-${index}`}
                  className={`relative w-80 h-80 mb-10 cursor-pointer z-10 shadow-lg rounded-xl ease-out duration-300 ${
                    isBrowser && `hover:scale-105`
                  }`}
                  onClick={() => onRecipeClick(recipe)}
                >
                  <h2 className="w-full absolute top-1/2 text-center text-2xl font-semibold text-white z-[1] px-7 leading-normal translate-y-[-50%]">
                    {recipe.RCP_NM}
                  </h2>
                  <Suspense
                    fallback={
                      <img
                        className={`w-full h-full rounded-xl brightness-[0.3] bg-white ${
                          isBrowser && `hover:brightness-100`
                        }`}
                        src="/cutlery.png"
                        alt={recipe.RCP_NM}
                      />
                    }
                  >
                    <LazyImage
                      src={recipe.ATT_FILE_NO_MAIN}
                      alt={recipe.RCP_NM}
                      className={`w-full h-full rounded-xl brightness-[0.3] bg-white ${
                        isBrowser && `hover:brightness-100`
                      }`}
                      loadingClassName="absolute flex w-full h-full rounded-xl flex-col items-center justify-center bg-black/70 z-[1]"
                    />
                  </Suspense>
                  <p className="absolute bottom-2.5 left-2.5 text-white text-sm">
                    #{recipe.RCP_PAT2} #{recipe.RCP_WAY2}
                    {recipe.HASH_TAG && `#${recipe.HASH_TAG}`}
                  </p>
                </div>
              ))}
            </InfiniteScroll>
          )}
        </>
      )}
    </div>
  );
};
