import React from 'react'

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav >
            <ul className="pagination">
                {pageNumbers.map((item, index) => (
                    <li key={index} className="page-item">
                        <a className="page-link" onClick={() => paginate(item)}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
