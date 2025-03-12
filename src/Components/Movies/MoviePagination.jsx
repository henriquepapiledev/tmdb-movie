import Arrow from '../../assets/icon-arrow.svg?react';

const MoviePagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-16 gap-2">
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(startPage + index);
              window.scrollTo(0, 0);
            }}
            className={`flex justify-center items-center font-bold text-base w-10 h-10 hover:bg-primary-color hover:text-white transition duration-150 ease-in-out cursor-pointer rounded-md ${
              currentPage === startPage + index
                ? 'bg-primary-color text-white'
                : 'bg-white text-primary-color'
            }`}
          >
            {startPage + index}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={handleNext}
            className="flex justify-center items-center w-10 h-10 cursor-pointer rounded-md"
          >
            <Arrow />
          </button>
        )}
      </div>
    </>
  );
};

export default MoviePagination;
