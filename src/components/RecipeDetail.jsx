import { useState, useEffect, Suspense } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../../src/carousel.css';
import { LazyImage } from './LazyImage';

export const RecipeDetail = ({ selectedRecipe }) => {
  const [showDetail, setShowDetail] = useState(false);

  const renderManualImages = () => {
    const manualImages = [];

    for (let index = 1; index <= 9; index++) {
      const imgKey = index < 10 ? `0${index}` : index.toString();
      const imgSrc = selectedRecipe[`MANUAL_IMG${imgKey}`];
      const description = selectedRecipe[`MANUAL${imgKey}`];
      if (!imgSrc) {
        break;
      }
      manualImages.push(
        <div key={`manual-${index}`}>
          <Suspense
            fallback={
              <img
                className="w-full h-full rounded-xl brightness-[0.3] bg-white hover:brightness-100"
                src="/cutlery.png"
                alt={selectedRecipe.RCP_NM}
              />
            }
          >
            <LazyImage
              src={imgSrc}
              alt={imgKey}
              className="rounded-xl border-2"
              loadingClassName="flex items-center flex-col justify-center rounded-xl border-2 bg-black/70 h-[205px]"
            />
          </Suspense>
          <p className="text-slate-950 font-medium text-left my-7">
            {description}
          </p>
        </div>
      );
    }

    return manualImages;
  };

  const [ingredient, setIngredient] = useState(false);
  const handleClick = () => {
    setIngredient(!ingredient);
  };

  const renderCustomThumbs = () => {
    const thumbsImages = [];

    for (let index = 1; index <= 9; index++) {
      const imgKey = index < 10 ? `0${index}` : index.toString();
      const imgSrc = selectedRecipe[`MANUAL_IMG${imgKey}`];

      if (!imgSrc) {
        break;
      }
      thumbsImages.push(<img src={imgSrc} alt={imgKey} key={imgKey} />);
    }

    return thumbsImages;
  };

  const handleClose = () => {
    setShowDetail(false);
    setIngredient(false);
  };

  useEffect(() => {
    setShowDetail(true);
  }, [selectedRecipe]);

  return (
    <>
      {showDetail && (
        <div className="fixed flex w-full h-full z-30 top-0 left-0 bg-black bg-opacity-80 items-center justify-center">
          <div className="relative w-96 max-w-[calc(100%-80px)] h-auto max-h-[calc(100%-80px)] overflow-auto bg-slate-200 rounded-xl p-8 shadow-lg">
            <h4 className="w-[calc(100%-30px)] text-korean-teal font-semibold text-2xl mb-7 text-left">
              {selectedRecipe.RCP_NM}
            </h4>
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="2x"
              className="absolute top-8 right-6 w-7 h-7  border-none p-0 text-gray-500 hover:cursor-pointer hover:text-korean-teal"
              onClick={handleClose}
            />
            <button
              onClick={handleClick}
              className="w-full text-left bg-transparent p-0 mb-2 border-0"
            >
              <FontAwesomeIcon
                icon={faCaretRight}
                className={`mr-1 ${ingredient && 'rotate-90'}`}
              />
              {ingredient ? '재료 접기' : '재료 펼치기'}
            </button>
            {ingredient && (
              <div className="mb-6">
                <div className="text-left text-sm mb-5 break-all">
                  <span>재료: </span>
                  {selectedRecipe.RCP_PARTS_DTLS}
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <p>{`탄수화물: ${selectedRecipe.INFO_CAR}g`}</p>
                  <p>{`단백질: ${selectedRecipe.INFO_PRO}g`}</p>
                  <p>{`지방: ${selectedRecipe.INFO_FAT}g`}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>{`나트륨: ${selectedRecipe.INFO_NA}mg`}</p>
                  <p>{`열량: ${selectedRecipe.INFO_ENG}kcal`}</p>
                  {selectedRecipe.INFO_WGT && (
                    <p>중량: {selectedRecipe.INFO_WGT}g</p>
                  )}
                </div>
              </div>
            )}
            <Carousel renderThumbs={renderCustomThumbs}>
              {renderManualImages()}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};
