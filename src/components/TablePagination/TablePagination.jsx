import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getTitles } from '../../slices/newspaperThonk'
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";

export const TablePagination = () => {

    const dispatch = useDispatch();
    const lastSearch = useSelector((state) => state.search.history.at(-1))
    const { articles, lastApiPage } = useSelector((state) => state.newspaper)
    const itemPerPage = 5;

    const onNext = (e) => {
        console.log(e)
        console.log(`Llamando a ` + lastSearch + ' page ' + (lastApiPage + 1))
        //dispatch(getTitles({ terms: lastSearch, Page: lastApiPage + 1 }))
    }

    const onPrevious = (e) => {
        console.log(e.target.id)
        //dispatch(getTitles({ terms: lastSearch, Page: lastApiPage + 1 }))
    }

    const numButtons = articles.length / itemPerPage;
    let buttons = [];

    if (numButtons > 7) {
        buttons = [
            <Pagination.Item id="1" onClick={onPrevious} key={1}>1</Pagination.Item>,
            <Pagination.Item key={2}>2</Pagination.Item>,
            <Pagination.Ellipsis key={'...1'}></Pagination.Ellipsis>,
            <Pagination.Item key={numButtons / 2}>{numButtons / 2}</Pagination.Item>,
            <Pagination.Ellipsis key={'...2'}></Pagination.Ellipsis>,
            <Pagination.Item key={numButtons - 1}>{numButtons - 1}</Pagination.Item>,
            <Pagination.Item key={numButtons}>{numButtons}</Pagination.Item>,
        ]
    } else {
        for (let i = 1; i <= numButtons; i++) {
            buttons.push(<Pagination.Item>{i}</Pagination.Item>)
        }
    }

    const even = (e) => {
        console.log('entra')
    }

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