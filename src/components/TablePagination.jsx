import { useDispatch, useSelector } from 'react-redux';
import { getTitles, setCurrentPage } from '../slices'
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';

export const TablePagination = ({ amIConsumer }) => {

    // Dispatch and Selectors
    const dispatch = useDispatch();
    const apiProps = useSelector((state) => state.api)
    const paginationProps = useSelector((state) => state.pagination)

    // Necessary Data
    const totalItems = apiProps.articles.length;
    const totalPages = Math.ceil(totalItems / paginationProps.itemsPerPage);
    const lastSearch = apiProps.lastSearch

    const onPageChange = (event) => {
        const page = event.selected
        dispatch(setCurrentPage(page))
    }

    useEffect(() => {
        // In case that ItemsPerPage change from low to high value, the current page must be adapted
        if (paginationProps.currentPage >= totalPages) {
            dispatch(setCurrentPage(totalPages - 1))
        }
        if (amIConsumer) {
            // We want to check in the last page if do another request
            // currentPage start in 0 , totalPages in 1
            if (paginationProps.currentPage >= totalPages - 1) {
                if (!apiProps.noMorePages && !apiProps.isLoading) {
                    const newPage = apiProps.lastPage + 1
                    dispatch(getTitles({ terms: lastSearch, page: newPage }))
                }
            }
        }
    }, [paginationProps.currentPage, paginationProps.itemsPerPage])
    // - current page --> if last, request more data if possible
    // - items per page --> total pages can be less than current page

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
                onPageChange={onPageChange}
                pageRangeDisplayed={3}
                pageCount={totalPages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                forcePage={paginationProps.currentPage}
            />
        </>
    )
}