import {
  Button, InputGroup, Dropdown, DropdownButton,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {
  addSearch, cleanArticles, getTitles, setCurrentPage, setItemsPerPage,
} from '../slices';

function Search() {
  const ITEMS_PAGE_SELECTION = [10, 20, 30, 40, 50];

  // Hooks
  const dispatch = useDispatch();
  const lastSearch = useSelector((state) => state.api.lastSearch);
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);

  const [{ inputValue, isValid }, setSearch] = useState({
    inputValue: '',
    isValid: false,
  });

  // Functions
  // Updating input value
  const onChange = ({ target }) => {
    const realValue = target.value.trim();
    setSearch({
      inputValue: target.value,
      isValid: realValue.length > 3,
    });
  };

  // Only store the value when is valid (letters > 3)
  const onSubmit = (event) => {
    event.preventDefault();
    if (isValid && lastSearch !== inputValue) {
      dispatch(addSearch(inputValue));
      setSearch({
        inputValue: '',
        isValid: false,
      });
      dispatch(setCurrentPage(0));
      dispatch(cleanArticles());
      dispatch(getTitles({ terms: inputValue }));
    }
  };

  const onDropDown = (newItemsPerPage) => {
    dispatch(setItemsPerPage(parseInt(newItemsPerPage, 10)));
  };

  return (
    <form onSubmit={onSubmit} className="py-4">
      <InputGroup>
        <Form.Control
          type="text"
          id="inputSearch"
          placeholder="Enter a word or a sentence"
          value={inputValue}
          onChange={onChange}
          aria-describedby="searchHelpBlock"
          isValid={isValid}
          isInvalid={!isValid}
        />
        <Button
          variant="success"
          onClick={onSubmit}
        >
          <i className=" bi-search">Search</i>
        </Button>
        <DropdownButton onSelect={onDropDown} id="dropdown-basic-button" title={`${itemsPerPage} Items/Page`}>
          {
              ITEMS_PAGE_SELECTION.map((value) => (
                <Dropdown.Item
                  key={value}
                  eventKey={value}
                >
                  {value}
                </Dropdown.Item>
              ))
            }
        </DropdownButton>
      </InputGroup>
      <Form.Text className="ps-3" id="searchHelpBlock" muted>
        Please enter more than 3 letters
      </Form.Text>
    </form>
  );
}
export default Search;
