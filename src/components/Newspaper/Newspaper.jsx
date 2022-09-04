import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Routes } from 'react-router-dom';
import { getPosts } from '../../slices/newspaperSlice'
import { ArticlesTable } from '../ArticlesTable/ArticlesTable';
import { History } from '../History/History';
import { Navbar } from '../NavBar/Navbar';
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

    return (
        <>
            <div className="articles">
                <Search />
                <ArticlesTable />
            </div>
            <div className="history">
                <History />
            </div>
        </>
    )
}
