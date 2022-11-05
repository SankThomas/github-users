import { useState } from "react";

const Pagination = (props) => {
  const totalRepo = props.totalRepo;
  const repoPerPage = props.repoPerPage;

  const totalPage = Math.ceil(totalRepo / repoPerPage);

  const [page, setPage] = useState(1);

  const prevHandler = () => {
    if (page === 1) return;
    setPage((prevPage) => prevPage - 1);
    props.onChange(page - 1);
  };
  const nextHandler = () => {
    if (page === totalPage) return;
    setPage((prevPage) => prevPage + 1);
    props.onChange(page + 1);
  };

  return (
    <>
      <div>
        <div className="buttons">
          <button
            className={page === 1 ? "disabled" : ""}
            onClick={prevHandler}
          >
            Prev
          </button>
          <p>{page}</p>
          <button
            className={page === totalPage ? "disabled" : ""}
            onClick={nextHandler}
          >
            Next
          </button>
        </div>
        {Array.from({ length: totalPage }, (_, index) => index + 1).map(
          (each) => (
            <button
              onClick={() => {
                setPage(each);
                props.onChange(page);
              }}
              key={each}
            >
              {each}
            </button>
          )
        )}
      </div>
    </>
  );
};
export default Pagination;
