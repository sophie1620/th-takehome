export interface ISearchBarProps {
  formName: string;
  onSubmit: (searchTerm: string) => void;
  htmlFor: string;
}
export interface IHomeworkItem {
  id: number;
  name: string;
  parent_id: number;
  tasks?: IHomeworkItem[];
  term?: string;
}
export interface IHomeworkResultProps {
  homeworkResults: IHomeworkItem[];
  term?: string;
}
export interface IErrorMessage {
  message: String;
}