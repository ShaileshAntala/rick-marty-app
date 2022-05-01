import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNumber, setPageNumber, info}) => {


// NPM paginate component and its elements 


  return (
   <ReactPaginate 
   className='pagination justify-content-center gap-4 my-4'
   nextLabel="Next"
   nextLinkClassName='btn btn-primary'
   previousLabel="Prev"
   previousLinkClassName="btn btn-primary"
   pageClassName='page-item'
   pageLinkClassName='page-link'
   onPageChange={(data)=> {setPageNumber(data.selected + 1)}}
   activeClassName="active"
   forcePage={pageNumber===1? 0 : pageNumber - 1}
   pageCount={info?.pages}/>
  )
}

export default Pagination