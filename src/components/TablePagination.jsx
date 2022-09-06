import { useDispatch, useSelector } from 'react-redux';
import { getTitles, setCurrentPage, setItemsPerPage, setOffset } from '../slices'
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';


export const TablePagination = ({
    doIRequest,
}) => {

    // Dispatch and Selectors
    const dispatch = useDispatch();
    const apiProps = useSelector((state) => state.api)
    const paginationProps = useSelector((state) => state.pagination)
    console.log(paginationProps)

    // Necessary Data
    const totalItems = apiProps.articles.length;
    console.log('Total items --> ', apiProps.articles.length)
    const totalPages = Math.ceil(totalItems / paginationProps.itemsPerPage);
    console.log('items per page --> ', paginationProps.itemsPerPage)
    const lastSearch = apiProps.lastSearch



    const onPageChange = (event) => {
        const page = event.selected
        const start = page * paginationProps.itemsPerPage
        const end = (page + 1) * paginationProps.itemsPerPage
        // setCurrentPage(page)
        dispatch(setCurrentPage(page))

        // setOffset(
        //     page * paginationProps.itemsPerPage,
        //     (page + 1) * paginationProps.itemsPerPage
        // );
        dispatch(setOffset({ start, end }))
    }

    useEffect(() => {
        if (doIRequest) {
            console.log('Current page: ', paginationProps.currentPage)
            console.log('Total Pages: ', totalPages)
            // We want to check in the last page
            // currentPage start in 0 , totalPages in 1
            if (paginationProps.currentPage >= totalPages - 2) {
                console.log('Pages?: ', apiProps.noMorePages)

                if (!apiProps.noMorePages && !apiProps.isLoading) {
                    console.log('BUSQUEDA NUEVA')
                    const newPage = apiProps.lastPage + 1
                    dispatch(getTitles({ terms: lastSearch, page: newPage }))
                }
            }
        }


    }, [paginationProps.currentPage]) // Setear el currentPage a 0 cuando se realice una nueva búsqueda

    // info result 1-50 of 452
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