import { useDispatch, useSelector } from 'react-redux';
import { getTitles } from '../slices/apiThonk'
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import { useEffect } from 'react';

export const TablePagination = ({
    currentPage,
    itemsPerPage,
    setCurrentPage,
    setOffset,
}) => {

    const dispatch = useDispatch();
    const lastSearch = useSelector((state) => state.search.history.at(-1))
    const { articles, lastPage } = useSelector((state) => state.api)
    const totalItems = articles.length;

    const onPageChange = (event) => {
        const page = event.selected

        setCurrentPage(page)
        setOffset(
            page * itemsPerPage,
            (page + 1) * itemsPerPage
        );
    }

    useEffect(() => {

        //API call for more results


    }, [currentPage])


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
                onPageChange={(e) => onPageChange(e)}
                pageRangeDisplayed={3}
                pageCount={Math.ceil(totalItems / itemsPerPage)}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                forcePage={currentPage}
            />
        </>
    )
}