import { useSelector } from 'react-redux'
import { Search, TablePagination, ArticlesTable } from '../components'

export const Home = () => {

    const { articles } = useSelector((state) => state.api);

    return (
        <>
            <Search />
            {articles.length > 0 && (
                <>
                    <TablePagination
                        amIConsumer={true}
                    />
                    <ArticlesTable />
                    <TablePagination
                        amIConsumer={false}
                    />
                </>
            )}
        </>
    )
}
