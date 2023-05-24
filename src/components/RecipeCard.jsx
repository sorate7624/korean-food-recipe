import React, { useState, Suspense } from 'react';
import { RecipeDetail } from './RecipeDetail';
import { LazyImage } from './LazyImage';

export const RecipeCard = ({ recipe }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };

  const handleRecipeDetailClose = () => {
    setShowDetail(false);
  };

  // const handleImageError = (e) => {
  //   e.target.src = '/cutlery.png';
  // };

  return (
    <>
      <div
        className="relative w-80 h-80 mb-10 cursor-pointer z-10 shadow-lg rounded-xl  hover:scale-105 ease-out duration-300"
        onClick={handleClick}
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
      {showDetail && (
        <RecipeDetail recipe={recipe} onClose={handleRecipeDetailClose} />
      )}
    </>
  );
};
