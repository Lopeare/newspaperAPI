import { useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';

export const ArticlesTable = () => {

    const { articles, isLoading, history } = useSelector((state) => state.api)
    const { startOffset, endOffset } = useSelector((state) => state.pagination)
    const lastSearch = history.at(-1).value
    // console.log(articles)
    // console.log(isLoading)

    console.log(startOffset + ' ' + endOffset)
    return (
        <>
            <p>Results for {lastSearch}</p>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Publisher</th>
                        <th>Year</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        articles.slice(startOffset, endOffset).map(art =>
                        (
                            <tr key={art.id}>
                                <td>{art.title}</td>
                                <td>{art.publisher}</td>
                                <td>{art.start_year}</td>
                                <td>{art.language}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            {isLoading && <h1>Loading...</h1>}
        </>
    )
}
