import { ITask } from "./ITask";

export interface ITaskSlice {
  taskList: ITask[];
  searchList: ITask[];
  term: string;
  filter: string;
  doneCount: number;
  todoCount: number;
}
