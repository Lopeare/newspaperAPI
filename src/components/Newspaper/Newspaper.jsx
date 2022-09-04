import { useSelector } from 'react-redux'
import { ArticlesTable } from '../ArticlesTable/ArticlesTable';
import { History } from '../History/History';
import { Search } from '../Search/Search';

export const Newspaper = () => {

    const { history } = useSelector((state) => state.search);

    return (
        <>
            <div className="articles">
                <Search />
                {history.length > 0 && <ArticlesTable />}
            </div>
            <div className="history">
                {history.length > 0 && <History />}
            </div>
        </>
    )
}
