import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  // NPM paginate component and its props

  return (
    <ReactPaginate
      className="pagination d-flex justify-content-center gap-4 my-4"
      nextLabel="Next"
      nextLinkClassName={`${styles.btn} btn btn-primary`}
      previousLabel="Prev"
      previousLinkClassName={`${styles.btn} btn btn-primary`}
      pageClassName="page-item"
      pageLinkClassName={`${styles.pages} page-link`}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      activeClassName="active"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
