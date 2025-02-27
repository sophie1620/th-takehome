import { useState } from "react";
import './Home.css';

import SearchBar from "../components/SearchBar/SearchBar"
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import HomeworkResults from "../components/HomeworkResults/HomeworkResults";
import { getCourseHomework } from "../service/getCourseHomework";
import { formatHomeworkResult } from "../utils/helpers";
import { IHomeworkResultProps } from "../interface";

const defaultError = {hasError: false, message: ''}

export default function Home() {
  // const [homeworkData, setHomeworkData] = useState<IHomeworkItem[] | [] | undefined >(undefined);
  const [homeworkData, setHomeworkData] = useState<IHomeworkResultProps | undefined >(undefined);
  const [error, setError] = useState(defaultError);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  async function handleSearch(searchTerm: string) {
    setIsLoading(true);
    fetchData(searchTerm);

    setSearchTerm(searchTerm);
    setIsLoading(false);
  }

  async function fetchData(searchTerm: string) {
    try {
      setError(defaultError);
      const responseData = await getCourseHomework(searchTerm);
      const formatedData = await formatHomeworkResult(responseData);
      setHomeworkData({term: searchTerm, homeworkResults: formatedData});

    } catch (error) {
      setError({hasError: true, message:`We're unable to get homework for "${searchTerm}." Please try again.`});
      setHomeworkData(undefined);
    }
  }

  return <>
    <h2>Course homework search</h2>

    <SearchBar 
      formName="searchHomework"
      onSubmit={handleSearch}
      htmlFor="courseHomeworkSearch"
    />

    {isLoading && <Loading />}

    {/* sometimes search results return empty array--I'm assuming that there is no assigned homework for the topic */}
    {!isLoading 
      && !error.hasError 
      && homeworkData?.homeworkResults.length === 0
      && <p className="homework-results-none">{`You don't have any ${searchTerm} homework right now.`}</p>}

    {!isLoading 
      && homeworkData 
      && <div className="homework-results-container">
        <HomeworkResults homeworkResults={homeworkData.homeworkResults} term={homeworkData.term} />
      </div>}

    {!isLoading 
      && error.hasError 
      && <Error message={error.message} />}
  </>
} 