import { useState } from "react";

import SearchBar from "../components/search-bar/SearchBar"
import { getCourseHomework } from "../api/api";
import Error from "../components/error/Error";

export default function Home() {
  const [isFetching, setIsFetching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [responseData, setResponseData] = useState();

  async function handleSearch(searchTerm: string) {
    setIsFetching(true);
    const responseData = await getCourseHomework(searchTerm);

    console.log(responseData);
    if (responseData) {
      setIsFetching(false)
    } else {
      setHasError(true);
    }
  }

  return <>
    <h2>Course homework search</h2>

    <SearchBar 
      formName="searchHomework"
      onSubmit={handleSearch}
      htmlFor="courseHomeworkSearch"
    />

    {hasError && <Error message="Unable to complete search at this time" />}
  </>
}