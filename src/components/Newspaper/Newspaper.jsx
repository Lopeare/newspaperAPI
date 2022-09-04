import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../slices/newspaperSlice'
import { ArticlesTable } from '../ArticlesTable/ArticlesTable';
import { History } from '../History/History';
import { Search } from '../Search/Search';

export const Newspaper = () => {

    ///////////////////////////////////////////////////////////////////
    const dispatch = useDispatch();
    const props = useSelector((state) => state.Newspaper);

    useEffect(() => {
        dispatch(getPosts('arg'));

        return () => {

        }
    }, [])
    /////////////////////////////////////////////////////////////////////

    const { history } = useSelector((state) => state.search);

    return (
        <>
            <div className="articles">
                <Search />
                <ArticlesTable />
            </div>
            <div className="history">
                {history.length > 0 && <History />}
            </div>
        </>
    )
}
