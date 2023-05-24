export const BgBarPattern = () => {
  return (
    <>
      <div>
        <div className="w-4/12 h-4 flex fixed z-20 top-0 left-0">
          <div className="w-1/4 h-full bg-korean-blue"></div>
          <div className="w-1/4 h-full bg-korean-teal"></div>
          <div className="w-1/4 h-full bg-korean-yellow"></div>
          <div className="w-1/4 h-full bg-korean-red"></div>
        </div>
        <div className="w-4/12 h-4 flex fixed z-20 top-0 right-0">
          <div className="w-1/4 h-full bg-korean-red"></div>
          <div className="w-1/4 h-full bg-korean-yellow"></div>
          <div className="w-1/4 h-full bg-korean-teal"></div>
          <div className="w-1/4 h-full bg-korean-blue"></div>
        </div>
        <div className="w-4/12 h-4 flex fixed z-20 bottom-0 left-0">
          <div className="w-1/4 h-full bg-korean-blue"></div>
          <div className="w-1/4 h-full bg-korean-teal"></div>
          <div className="w-1/4 h-full bg-korean-yellow"></div>
          <div className="w-1/4 h-full bg-korean-red"></div>
        </div>
        <div className="w-4/12 h-4 flex fixed z-20 bottom-0 right-0">
          <div className="w-1/4 h-full bg-korean-red"></div>
          <div className="w-1/4 h-full bg-korean-yellow"></div>
          <div className="w-1/4 h-full bg-korean-teal"></div>
          <div className="w-1/4 h-full bg-korean-blue"></div>
        </div>
      </div>
    </>
  );
};
