import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

function useProductsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const from = searchParams.get("from") || 0;
  const to = searchParams.get("to") || 10000000;

  const setFilters = useCallback((filter) => {
    setSearchParams((params) => {
       
      if (filter.page) {
        params.set("page", filter.page);
      }
      
      if (filter.from) {
        params.set("from", filter.from);
      }
      if (filter.to) {
        params.set("to", filter.to);
      }

      return params;
    });
  }, []);

  return {
    page,
    from,
    to,
    setFilters,
  };
}

export default useProductsFilter;
