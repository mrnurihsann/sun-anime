const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
    scrollTop();
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (lastPage <= 5) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`transition-all hover:text-color-accent border px-3 py-1 rounded ${
              i === page
                ? "bg-color-primary text-white"
                : "bg-white text-color-primary"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      if (page > 3) {
        pages.push(
          <button
            key={1}
            onClick={() => handlePageClick(1)}
            className={`transition-all hover:text-color-accent border px-3 py-1 rounded ${
              page === 1
                ? "bg-color-primary text-white"
                : "bg-white text-color-primary"
            }`}
          >
            1
          </button>
        );
        if (page > 4) {
          pages.push(
            <span key="start-ellipsis" className="px-3 py-1">
              ...
            </span>
          );
        }
      }

      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(lastPage - 1, page + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`transition-all hover:text-color-accent border px-3 py-1 rounded ${
              i === page
                ? "bg-color-primary text-white"
                : "bg-white text-color-primary"
            }`}
          >
            {i}
          </button>
        );
      }

      if (page < lastPage - 2) {
        if (page < lastPage - 3) {
          pages.push(
            <span key="end-ellipsis" className="px-3 py-1">
              ...
            </span>
          );
        }
        pages.push(
          <button
            key={lastPage}
            onClick={() => handlePageClick(lastPage)}
            className={`transition-all hover:text-color-accent border px-3 py-1 rounded ${
              page === lastPage
                ? "bg-color-primary text-white"
                : "bg-white text-color-primary"
            }`}
          >
            {lastPage}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-2 text-color-primary text-2xl">
      <button
        onClick={handlePrevPage}
        className="transition-all hover:text-color-accent border px-3 py-1 rounded"
        disabled={page === 1}
      >
        {"<"}
      </button>

      {renderPageNumbers()}

      <button
        onClick={handleNextPage}
        className="transition-all hover:text-color-accent border px-3 py-1 rounded"
        disabled={page === lastPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
