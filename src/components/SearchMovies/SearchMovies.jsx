import { useState } from 'react';
import { Thumb, Form, Input, Btn } from './SearchMovies.styled';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
  };

  return (
    <Thumb>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <AiOutlineSearch />
        </Btn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={query}
        />
      </Form>
    </Thumb>
  );
};

export default SearchMovies;
