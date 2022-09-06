import { useDispatch, useSelector } from 'react-redux';
import { getTitles } from '../slices/apiThunk'
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';


export const TablePagination = ({
    currentPage,
    itemsPerPage,
    setCurrentPage,
    setOffset,
    doIRequest,
}) => {

    const dispatch = useDispatch();
    const { articles, lastPage, noMorePages, isLoading, history } = useSelector((state) => state.api)
    const totalItems = articles.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const lastSearch = history.at(-1).value



    const onPageChange = (event) => {
        const page = event.selected

        setCurrentPage(page)
        setOffset(
            page * itemsPerPage,
            (page + 1) * itemsPerPage
        );
    }

    const checkIsLoading = () => {
        if (isLoading) {

            window.setTimeout(checkIsLoading, 100);
        } else {
            console.log('BUSQUEDA NUEVA')
            const newPage = lastPage + 1
            dispatch(getTitles({ terms: lastSearch, page: newPage }))
        }
    }

    useEffect(() => {
        if (doIRequest) {
            console.log('Current page: ', currentPage)
            console.log('Total Pages: ', totalPages)
            // We want to check in the last page
            // currentPage start in 0 , totalPages in 1
            if (currentPage >= totalPages - 2) {

                // Prevent double request with a property , and set that property as false in one component. ***********************************************

                console.log('Pages?: ', noMorePages)
                console.log(lastSearch,)

                if (!noMorePages && !isLoading) {
                    //poner aqui el setinterval para recalcular el valor del loading
                    // https://stackoverflow.com/questions/22125865/wait-until-flag-true
                    //checkIsLoading();
                    console.log('BUSQUEDA NUEVA')
                    const newPage = lastPage + 1
                    dispatch(getTitles({ terms: lastSearch, page: newPage }))
                }
            }
        }


    }, [currentPage]) // Setear el currentPage a 0 cuando se realice una nueva búsqueda


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
                forcePage={currentPage}
            />
        </>
    )
}