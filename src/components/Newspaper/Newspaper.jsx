import { useSelector } from 'react-redux'
import { ArticlesTable } from '../ArticlesTable/ArticlesTable';
import { History } from '../History/History';
import { Search } from '../Search/Search';
import { TablePagination } from '../TablePagination/TablePagination'

export const Newspaper = () => {

    const { history } = useSelector((state) => state.search);

    return (
        <>
            <div className='search'>
                <Search />
            </div>
            <div className="pagination">
                <TablePagination />
            </div>

            <div className="articles">
                {history.length > 0 && <ArticlesTable />}
            </div>


            <div className="history">
                {history.length > 0 && <History />}
            </div>
        </>
    )
}
