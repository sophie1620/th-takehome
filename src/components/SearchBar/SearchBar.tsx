import './SearchBar.css';

import { ISearchBarProps } from "../../interface";
import { ChangeEvent } from 'react';

export default function SearchBar ({ formName, onSubmit, htmlFor }: ISearchBarProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get(`${htmlFor}`)?.toString().toLowerCase() || ''; // search term seems to only shows results when done in lower case

    if (searchTerm !== '') {
      onSubmit(searchTerm);
      e.currentTarget.reset();
    } else {
      return
    }
  }
  
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const term = e.target.value;
    onSubmit(term);
  }

  return <form className="searchForm" name={formName} onSubmit={handleSubmit}>
    {/* use onChange to keep track of the word, and pass the word over to the parent component to make the API call */}
    <label htmlFor={htmlFor}>Search homework: </label>
    <input type="text" id={htmlFor} name={htmlFor} onChange={handleInputChange} />

    <button type="submit">Search</button>
  </form>
}

// form that accepts a text input for a search term (string)
// after user sumbits text input to search, the input should reset to ''
// pass string to parent component to do search

// error handling:
  // if empty string is searched: do not make API call

