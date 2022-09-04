import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../../slices/searchSlice'

export const Search = () => {

  const dispatch = useDispatch();

  const [{ value, isValid }, setSearch] = useState({
    value: '',
    isValid: false
  })

  // Updating input value
  const onChange = ({ target }) => {
    const realValue = target.value.trim();
    setSearch({
      value: realValue,
      isValid: realValue.length > 3 ? true : false
    })
  }

  // Only store the value when is valid (letters > 3)
  const onSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      dispatch(addSearch(value));
      setSearch({
        value: '',
        isValid: false
      });
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Form.Label
          htmlFor="searching article">Search
        </Form.Label>
        <Form.Control
          type="text"
          id="inputSearch"
          placeholder='Enter a word'
          value={value}
          onChange={onChange}
          aria-describedby="searchHelpBlock"
          isValid={isValid}
          isInvalid={!isValid}
        />
        <Form.Text id="searchHelpBlock" muted>
          Please enter a more 3 letters long word
        </Form.Text>
      </form>
    </>
  )
}
