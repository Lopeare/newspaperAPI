import { addSearch, cleanArticles, getTitles, setCurrentPage } from '../slices'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { setOffset } from '../slices/paginationSlice';

export const Search = () => {

  const dispatch = useDispatch();
  const lastSearch = useSelector((state) => state.api.lastSearch)
  const itemsPerPage = useSelector((state) => state.pagination.lastSearch)

  const [{ inputValue, isValid }, setSearch] = useState({
    inputValue: 'Michigan',
    isValid: true
  })

  // Updating input value
  const onChange = ({ target }) => {
    const realValue = target.value.trim();
    setSearch({
      inputValue: target.value,
      isValid: realValue.length > 3 ? true : false
    })
  }

  // Only store the value when is valid (letters > 3)
  const onSubmit = (event) => {
    event.preventDefault();
    if (isValid && lastSearch != inputValue) {
      dispatch(addSearch(inputValue));
      setSearch({
        inputValue: '',
        isValid: false
      });
      dispatch(setCurrentPage(0))
      dispatch(setOffset(0,))
      dispatch(cleanArticles());
      dispatch(getTitles({ terms: inputValue }))
    }
  }

  return (
    <>
      {/*  BOTON AL LADO DE LA BARRA DE BUSQUEDA ********************************************************** */}
      <form onSubmit={onSubmit}>
        <Form.Label
          htmlFor="searching article">Search
        </Form.Label>
        <Form.Control
          className="bi bi-search"

          type="text"
          id="inputSearch"
          placeholder='Enter a word or a sentence'
          value={inputValue}
          onChange={onChange}
          aria-describedby="searchHelpBlock"
          isValid={isValid}
          isInvalid={!isValid}
        />
        <Form.Text id="searchHelpBlock" muted>
          Please enter more than 3 letters
        </Form.Text>
      </form>
    </>
  )
}
