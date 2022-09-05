import { useDispatch, useSelector } from 'react-redux';
import { getTitles } from '../slices/apiThonk'
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";

export const TablePagination = () => {

    const dispatch = useDispatch();
    const lastSearch = useSelector((state) => state.search.history.at(-1))
    const { articles, lastApiPage } = useSelector((state) => state.api)
    const itemPerPage = 5;




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
                onPageChange={(e) => { console.log(e) }}
                pageRangeDisplayed={3}
                pageCount={20}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    )
}