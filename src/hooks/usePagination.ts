import { useState, Dispatch, SetStateAction } from "react";

export const usePagination = (): {
  page: number;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
  previousPage: (numberOfPages: number) => void;
  nextPage: (numberOfPages: number) => void;
  hasPreviousPage: (page: number) => boolean;
  hasNextPage: (page: number) => boolean;
  goToPage: (pageNumber: number) => void;
} => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const previousPage = (numberOfPages = 1) => {
    setPage(Math.max(page - numberOfPages, 0));
  };

  const nextPage = (numberOfPages = 1) => {
    setPage(Math.min(page + numberOfPages, totalPages - 1));
  };

  const hasPreviousPage = (pageNumber = page) => pageNumber > 0;

  const hasNextPage = (pageNumber = page) => pageNumber + 1 < totalPages;

  const goToPage = (pageNumber: number) => {
    if (hasPreviousPage(pageNumber + 1) && hasNextPage(pageNumber - 1)) {
      setPage(pageNumber);
    }
  };

  return {
    page,
    totalPages,
    setTotalPages,
    previousPage,
    nextPage,
    hasPreviousPage,
    hasNextPage,
    goToPage,
  };
};
