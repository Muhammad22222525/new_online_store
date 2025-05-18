import React from "react";
import useProductsFilter from "../hooks/useProductsFilter";

function Pagination({ totalPages }) {
  const { page, setFilters } = useProductsFilter();

  return (
    <div className="flex gap-3">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => setFilters({ page: index + 1 })}
          className={
            page === `${index + 1}`
              ? "bg-white border border-[#1074EB] px-4 py-2 text-[#1074EB] rounded-[3px]"
              : "border border-[#1074EB] px-4 py-2 cursor-pointer bg-[#1074EB] text-white rounded-[3px]"
          }
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
