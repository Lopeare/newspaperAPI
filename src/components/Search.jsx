import { addSearch, cleanArticles, getTitles } from '../slices'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

export const Search = () => {

  const dispatch = useDispatch();

  const [{ value, isValid }, setSearch] = useState({
    value: 'Michigan',
    isValid: true
  })

  // Updating input value
  const onChange = ({ target }) => {
    const realValue = target.value.trim();
    setSearch({
      value: target.value,
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
      dispatch(cleanArticles());
      dispatch(getTitles({ terms: value }))
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
          placeholder='Enter a word or a sentence'
          value={value}
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
