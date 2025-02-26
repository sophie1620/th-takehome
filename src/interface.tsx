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
}
export interface IHomeworkResultProps {
  homeworkResults: IHomeworkItem[];
  searchTerm?: string;
}
export interface IErrorMessage {
  message: String;
}