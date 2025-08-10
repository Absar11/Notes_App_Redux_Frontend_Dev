import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "../features/noteSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});
