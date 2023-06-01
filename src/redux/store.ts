import { configureStore } from "@reduxjs/toolkit";
import { contactBook } from "./reducer";
export const store = configureStore({
  reducer: {
    contactBook: contactBook,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
