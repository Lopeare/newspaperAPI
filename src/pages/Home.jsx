import { offset } from '@popperjs/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Search, TablePagination, ArticlesTable } from '../components'

export const Home = () => {

    const { articles } = useSelector((state) => state.api);

    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const [{ start, end }, setOffset] = useState({
        start: 0,
        end: itemsPerPage,
    })

    const onSetOffset = (start, end) => {
        setOffset({
            start, end
        })
    }

    const onSetItemsPerPage = (items) => {
        setItemsPerPage(items);
    }

    const onSetCurrentPage = (page) => {
        setCurrentPage(page)
    }




    return (
        <>
            <Search
                setItemsPerPage={onSetItemsPerPage} />

            {articles.length > 0 && (
                <>
                    <TablePagination
                        setCurrentPage={onSetCurrentPage}
                        currentPage={currentPage}
                        startOffset={start}
                        endOffset={end}
                        itemsPerPage={itemsPerPage}
                        setOffset={onSetOffset} />

                    <ArticlesTable
                        startOffset={start}
                        endOffset={end} />

                    <TablePagination
                        setCurrentPage={onSetCurrentPage}
                        currentPage={currentPage}
                        startOffset={start}
                        endOffset={end}
                        itemsPerPage={itemsPerPage}
                        setOffset={onSetOffset} />

                </>
            )}
        </>
    )
}
