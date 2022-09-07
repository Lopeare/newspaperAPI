import { useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';

export const ArticlesTable = () => {

    const { articles, isLoading, history } = useSelector((state) => state.api)
    const { startOffset, endOffset, itemsPerPage, currentPage } = useSelector((state) => state.pagination)
    const lastSearch = history.at(-1).value

    const infoResultTable = `Results ${startOffset + 1} / 
    ${itemsPerPage > articles.length ? articles.length : (itemsPerPage * (currentPage + 1))} 
    of ${articles.length} from term ${lastSearch}`

    return (
        <>
            <p>{infoResultTable}</p>
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
