import './SearchBar.css';
import { ISearchBarProps } from "../../interface";

export default function SearchBar ({ formName, onSubmit, htmlFor }: ISearchBarProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get(`${htmlFor}`)?.toString().toLowerCase() || ''; // search term only shows results when done in lower case?

    if (searchTerm !== '') {
      onSubmit(searchTerm);
      e.currentTarget.reset();
    } else {
      return
    }
  }

  return <form className="searchForm" name={formName} onSubmit={handleSubmit}>
    <label htmlFor={htmlFor}>Search homework: </label>
    <input type="text" id={htmlFor} name={htmlFor}/>

    <button type="submit">Search</button>
  </form>
}

// form that accepts a text input for a search term (string)
// after user sumbits text input to search, the input should reset to ''
// pass string to parent component to do search

// error handling:
  // if empty string is searched: do not make API call

