import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';

export const ArticlesTable = () => {

    // State, Selectors, Data
    const [isScrollbar, setIsScrollbar] = useState(false)
    const { articles, isLoading, history } = useSelector((state) => state.api)
    const { startOffset, endOffset, itemsPerPage, currentPage } = useSelector((state) => state.pagination)
    const lastSearch = history.at(-1).value
    const infoResultTable = `Results ${startOffset + 1} / 
    ${itemsPerPage * (currentPage + 1) > articles.length ? articles.length : (itemsPerPage * (currentPage + 1))} 
    of ${articles.length} from term ${lastSearch}`

    // Functions
    const onUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const onDown = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        })
    }

    // Enable Up / Down buttons when user scroll
    useEffect(() => {
        const onScroll = e => {
            window.scrollY > 0 && setIsScrollbar(true)
            window.removeEventListener("scroll", onScroll)
        };
        window.addEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {isScrollbar &&
                <Button style={{ float: 'right' }} onClick={onDown}>
                    Down
                </Button>
            }
            <p className="fw-light">{infoResultTable}</p>

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
                                <td>
                                    {<Nav.Link
                                        as={Link}
                                        to={`/details/${art.id.replaceAll('/', '_')}`}>{art.title}
                                    </Nav.Link>}
                                </td>
                                <td>{art.publisher}</td>
                                <td>{art.start_year}</td>
                                <td>{art.language}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <p className="fw-light">{infoResultTable}</p>
            {isScrollbar &&
                <Button style={{ float: 'right' }} onClick={onUp}>
                    Up
                </Button>
            }
        </>
    )
}
