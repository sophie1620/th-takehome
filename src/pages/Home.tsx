import { useState } from "react";
import './Home.css';

import SearchBar from "../components/SearchBar/SearchBar"
import Error from "../components/Error/Error";
import { IHomeworkItem } from "../interface";
import { getCourseHomework } from "../service/getCourseHomework";
import HomeworkResults from "../components/HomeworkResults/HomeworkResults";
import { formatHomeworkResult } from "../utils/helpers";
import Loading from "../components/Loading/Loading";

const defaultError = {hasError: false, message: ''}

export default function Home() {
  const [homeworkData, setHomeworkData] = useState<IHomeworkItem[] | [] | undefined >(undefined);
  const [error, setError] = useState(defaultError);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  async function handleSearch(searchTerm: string) {
    setIsLoading(true);
    try {
      setError(defaultError);
      const responseData = await getCourseHomework(searchTerm);
      const formatedData = await formatHomeworkResult(responseData);
      setHomeworkData(formatedData);

    } catch (error) {
      setError({hasError: true, message:`We're unable to get homework for "${searchTerm}." Please try again.`});
      setHomeworkData([]);
    }
    setSearchTerm(searchTerm);
    setIsLoading(false);
  }

  return <>
    <h2>Course homework search</h2>

    <SearchBar 
      formName="searchHomework"
      onSubmit={handleSearch}
      htmlFor="courseHomeworkSearch"
    />

    {isLoading && <Loading />}

    {!isLoading 
      && !error.hasError 
      && homeworkData?.length === 0 
      && <p className="homework-results-none">{`You don't have any ${searchTerm} homework right now.`}</p>}

    {!isLoading && homeworkData &&
      <div className="homework-results-container">
        <HomeworkResults searchTerm={searchTerm} homeworkResults={homeworkData} />
      </div>}

    {!isLoading && error.hasError && <Error message={error.message} />}
  </>
}