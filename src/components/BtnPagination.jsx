import React from "react";

const BtnPagination = ({ total, registro, prevPag, nextPag }) => {
  return (
    <>
      <button
        className="btn btn-primary me-2"
        disabled={registro === 0 ? true : false}
        onClick={prevPag}
      >
        Prev
      </button>
      <button
        className="btn btn-primary"
        disabled={total - registro <= 5 ? true : false}
        onClick={nextPag}
      >
        Next
      </button>
    </>
  );
};

export default BtnPagination;
