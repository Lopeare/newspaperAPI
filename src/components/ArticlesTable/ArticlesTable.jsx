import { useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';

export const ArticlesTable = () => {

    const { articles, isLoading } = useSelector((state) => state.newspaper)
    const lastSearch = useSelector((state) => state.search.history.at(-1).value)
    // console.log(articles)
    // console.log(isLoading)

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
                {
                    articles.map(art => {
                        return (
                            <tbody key={art.id}>
                                <tr>
                                    <td>{art.title}</td>
                                    <td>{art.publisher}</td>
                                    <td>{art.start_year}</td>
                                    <td>{art.language}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
            {isLoading && <h1>Loading...</h1>}
        </>
    )

}
