import { IHomeworkItem } from "../interface";

/**
 * formats flat tree results into a nested tree structure
 *  sorts homeworkResults according to parent_id starting from 0
 *  finds parent object and pushes child(ren) into the parent's tasks object
 *  "tasks" are the subtasks that are associated with the main task/homework
 * @param homeworkResults 
 * @returns 
 */
export async function formatHomeworkResult(homeworkResults: IHomeworkItem[]) {
  let sortedResults = homeworkResults.sort((a, b) => a.parent_id - b.parent_id);
  let formattedData: IHomeworkItem[] = [];

    for (let item of sortedResults) {
      item.tasks = [];

      // establish the top level
      if (item.parent_id === 0) {
        formattedData.push(item);

      } else {
        // find the parent
        const parentContainer = homeworkResults.find((x) => {if(x.id === item.parent_id){ return x} });

        // push child into parent
        if (parentContainer) {
          parentContainer.tasks?.push(item);
        }
      }
    }
    return formattedData;
}
