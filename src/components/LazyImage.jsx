import { useState, useEffect } from 'react';

export const LazyImage = ({ src, alt, className, loadingClassName }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <>
      {isLoaded ? (
        <img className={className} src={imageSrc} alt={alt} />
      ) : (
        <div className={loadingClassName}>
          <img
            className="!w-1/4 !h-1/4 z-10 animate-bounce"
            src={`./rice.png`}
            alt="loading-img"
          />
          <p className="text-white font-semibold mt-3">Loading...</p>
        </div>
      )}
    </>
  );
};
