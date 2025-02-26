import { IHomeworkItem } from "../interface";

const apiUrl = 'https://coursetreesearch-service-sandbox.dev.tophat.com/?query=';

export async function getCourseHomework(searchTerm: string): Promise<IHomeworkItem[] | []> {
  const data = await fetch(`${apiUrl}${searchTerm}`);
  
  if (!data.ok) {
    throw new Error(`Unable to get course homework results for ${searchTerm}. Please try again`);
  }
  
  const responseData = await data.json();
  return responseData;
}