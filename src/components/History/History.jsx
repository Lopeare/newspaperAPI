import { useSelector } from "react-redux"
import ListGroup from 'react-bootstrap/ListGroup';

export const History = () => {

    const { history } = useSelector((state) => state.search);

    return (
        <>
            <ListGroup className="list" variant="flush">
                <h4>Search History</h4>
                {
                    history.slice(0).reverse().map(search =>
                        < ListGroup.Item
                            key={search.id}> {search.value}</ListGroup.Item>
                    )
                }
            </ListGroup>
        </>
    )
}
