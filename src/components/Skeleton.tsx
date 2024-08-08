export const Skeleton = () => {
  const skeletonArray = new Array(8).fill(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
      {skeletonArray.map((_, index) => (
        <div
          className="relative z-0 flex w-80 flex-col items-center rounded-xl bg-white text-gray-700 shadow-xl mt-32 animate-pulse"
          key={index}
        >
          <div className="animate-pulse absolute w-10 h-10 p-4 -z-10 bottom-4 right-2 rotate-3 overflow-hidden bg-gray-300 rounded-full"></div>
          <div className="animate-pulse relative flex justify-center w-full">
            <div className="w-48 h-48 bg-gray-300 object-contain -mt-20 p-4 rounded-full"></div>
          </div>
          <div className="animate-pulse px-6 py-4 w-full">
            <div className="animate-pulse h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="animate-pulse px-6 flex gap-1 w-full">
            <div className="animate-pulse h-8 bg-gray-300 rounded-2xl px-2 py-1 w-1/3"></div>
            <div className="animate-pulse h-8 bg-gray-300 rounded-2xl px-2 py-1 w-1/3"></div>
          </div>
          <div className="animate-pulse p-6 pt-0 mt-5 w-full leading-snug tracking-tight">
            <div className="animate-pulse h-6 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
