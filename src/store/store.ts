import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
const store = configureStore({
  reducer: {
    taskSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
