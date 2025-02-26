import './HomeworkResults.css';
import { IHomeworkResultProps } from "../../interface"

export default function HomeworkResults({homeworkResults}: IHomeworkResultProps) {

  return <>
    <ul>
      {homeworkResults.map((result) => 
        <li key={result.id}>
          <p>{result.name}</p>

          {result.tasks && <HomeworkResults homeworkResults={result.tasks} />}
        </li>
      )}
    </ul>
  </>
} 

// Loops over homeworkResults that have been passed from parent component
// checks to see if each result has additional subtasks, and if so passes it to itself to loop over the results
// dashes are added via CSS styling on imported CSS page 