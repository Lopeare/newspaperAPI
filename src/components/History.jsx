import { useSelector } from "react-redux"
import ListGroup from 'react-bootstrap/ListGroup';

export const History = () => {

    const { history } = useSelector((state) => state.api);

    return (
        <>
            <ListGroup className="list" variant="flush">
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
