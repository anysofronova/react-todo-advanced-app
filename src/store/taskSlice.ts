import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITaskSlice } from "../@types/ITaskSlice";
import { ITask } from "../@types/ITask";

const initialState: ITaskSlice = {
  taskList: [],
  searchList: [],
  term: "",
  filter: "All",
  doneCount: 0,
  todoCount: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      action.payload.label.length > 0 &&
        state.taskList.push({ ...action.payload });
      taskSlice.caseReducers.countingTasks(state);
      taskSlice.caseReducers.setSearchList(state);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.filter((i) => i.id !== action.payload);
      taskSlice.caseReducers.countingTasks(state);
      taskSlice.caseReducers.setSearchList(state);
    },
    toggleTaskOption: (
      state,
      action: PayloadAction<{ id: string; option: "done" | "important" }>
    ) => {
      state.taskList = state.taskList.map((i) => {
        return i.id === action.payload.id
          ? { ...i, [action.payload.option]: !i[action.payload.option] }
          : { ...i };
      });
      taskSlice.caseReducers.sortTasks(state);
      taskSlice.caseReducers.countingTasks(state);
      taskSlice.caseReducers.setSearchList(state);
    },
    setSearchOption: (
      state,
      action: PayloadAction<{ value: string; option: "term" | "filter" }>
    ) => {
      state[action.payload.option] = action.payload.value;
      taskSlice.caseReducers.setSearchList(state);
    },

    setSearchList: (state) => {
      state.searchList = state.taskList.filter((i) => {
        const search =
          i.label.toLowerCase().indexOf(state.term.toLowerCase()) > -1;
        const option =
          state.filter === "Active"
            ? i.done === false
            : state.filter === "Done"
            ? i.done === true
            : true;
        return search && option;
      });
    },
    sortTasks: (state) => {
      state.taskList = state.taskList.sort(
        (a, b) => Number(b.important) - Number(a.important)
      );
    },
    countingTasks: (state) => {
      state.doneCount = state.taskList.filter((i) => i.done).length;
      state.todoCount = state.taskList.length;
    },
  },
});

export const { addTask, deleteTask, toggleTaskOption, setSearchOption } =
  taskSlice.actions;
export default taskSlice.reducer;
