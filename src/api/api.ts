const apiUrl = 'https://coursetreesearch-service-sandbox.dev.tophat.com/treesearch/?query=';

export async function getCourseHomework(searchTerm: string) {
  const data = await fetch(`${apiUrl}${searchTerm}`);
  console.log(data);
  
  if (!data.ok || data.status === 404) {
    throw new Error(`Unable to get course homework results for ${searchTerm}. Please try again`);
  }
  const responseData = await data.json();

  return responseData;
}