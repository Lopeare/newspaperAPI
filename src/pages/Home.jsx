import { useSelector } from 'react-redux'
import { Search, TablePagination, ArticlesTable } from '../components'

export const Home = () => {

    const { history } = useSelector((state) => state.search);

    return (
        <>
            <Search />
            <TablePagination />
            {history.length > 0 && <ArticlesTable />}
        </>
    )
}
