import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

function History() {
  const { history } = useSelector((state) => state.api);

  return (
    <ListGroup className="list pt-4" variant="flush">
      {
        history.slice(0).reverse().map((search) => (
          <ListGroup.Item
            key={search.id}
          >
            {search.value}
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  );
}
export default History;
