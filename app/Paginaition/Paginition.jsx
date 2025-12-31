import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { MoviesContext } from "../MoviesContext/MoviesContext";

export default function Paginition() {
  const { getPage, pageCount } = useContext(MoviesContext);

  function handlePageClick(data) {
    getPage(data.selected + 1);
  }

  return (
    <div className="w-full flex justify-center px-2">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        previousLabel="previous"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName="
          flex items-center justify-center gap-2
          sm:gap-3
          cursor-pointer
        "
        pageLinkClassName="
          w-8 h-8 sm:w-9 sm:h-9
          flex items-center justify-center
          rounded-full
          text-sm sm:text-base
          
          hover:bg-slate-700
          transition
        "
        activeLinkClassName="bg-[#2D434D]"
        previousLinkClassName="
          w-8 h-8 sm:w-9 sm:h-9
          flex items-center justify-center
          rounded-full
          
          hover:bg-slate-700
        "
        nextLinkClassName="
          w-8 h-8 sm:w-9 sm:h-9
          flex items-center justify-center
          rounded-full
          
          hover:bg-slate-700
        "
        breakLinkClassName=" px-1"
      />
    </div>
  );
}
