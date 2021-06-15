import { useState } from 'react';
import styled from 'styled-components';
import API from '../utils/API';
import './searchBar.css';

const SearchForm = styled.form`
   position: absolute;
   top: 0;
   right: 45px;
   width: 200px;
`;

const Search = styled.input`
   width: 100%;
   padding: 10px;
   padding-left: 30px;
`;

function SearchBar({ search }) {

    const [query, setQuery] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        API.searchMovies(query).then(res => {
            search(res.data.results);
            setQuery("");
        });
    }

    return (
        <SearchForm onSubmit={e => handleSubmit(e)}>
            <i className="mglass"></i>
            <Search placeholder="Search for a movie" value={query} onChange={e => setQuery(e.target.value)} />
        </SearchForm>
    )
}

export default SearchBar;