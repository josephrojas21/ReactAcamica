import React from 'react'
import {Pagination } from 'react-bootstrap'


const Paginator = ({pages,paginate,currentPage}) => {
    const pageNumbers = [];
    let firstIndex = currentPage - 2 >= 1 ? currentPage - 2 : 1;
    let lastIndex = firstIndex + 4 < pages ? firstIndex + 4 : pages - 1;
    firstIndex = lastIndex === pages - 1 ? lastIndex - 4 : firstIndex;
    firstIndex = firstIndex < 1 ? 1 : firstIndex;

    for (let i = firstIndex; i <= lastIndex; i++) {
        pageNumbers.push(<Pagination.Item disabled={currentPage !== i? false:true} key={i} onClick={() => paginate(i)} >
          {i}
        </Pagination.Item>);
    }

    return(
      <Pagination>
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev disabled={currentPage === 1} onClick={() => paginate(currentPage-1)} />
        {pageNumbers}
        <Pagination.Next disabled={currentPage === pages - 1 } onClick={() => paginate(currentPage+1)} />
        <Pagination.Last onClick={() => paginate(pages-1)} />
      </Pagination>
    )
}

export default Paginator;