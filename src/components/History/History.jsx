import { useSelector } from "react-redux"
import ListGroup from 'react-bootstrap/ListGroup';

export const History = () => {

    const { history } = useSelector((state) => state.search);

    console.log(history);
    return (
        <>

            <ListGroup className="list" variant="flush">
                <h4>Search History</h4>
                {
                    history.map(search =>
                        < ListGroup.Item
                            key={search}> {search}</ListGroup.Item>
                    )
                }
            </ListGroup>
        </>
    )
}
