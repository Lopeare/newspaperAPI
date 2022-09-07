import { Search, TablePagination, ArticlesTable } from '../components'
import { useSelector } from 'react-redux'

export const Home = () => {

    const { articles, isLoading, history } = useSelector((state) => state.api);
    const noResultFound = articles.length == 0 && history.length != 0 ? true : false
    return (
        <>
            <Search />
            {
                isLoading && articles.length == 0 &&
                <p className='fs-1'>
                    Loading...
                </p>
            }
            {
                articles.length > 0 &&
                <>
                    <TablePagination
                        amIConsumer={true}
                    />
                    <ArticlesTable />
                    <TablePagination
                        amIConsumer={false}
                    />
                </>
            }
            {
                noResultFound && !isLoading &&
                <p className='fs-3 fw-lighter'>
                    No results found for terms {history.at(-1).value}
                </p>
            }
        </>
    )
}
