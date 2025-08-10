import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [],
  filterCategory: "All",
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      state.allNotes.push({
        id: Date.now(),
        title: action.payload.title,
        content: action.payload.content,
        category: action.payload.category,
      });
    },
    deleteNote: (state, action) => {
      state.allNotes = state.allNotes.filter(
        (note) => note.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filterCategory = action.payload;
    },
  },
});

export const { addNotes, deleteNote, setFilter } = notesSlice.actions;
export default notesSlice.reducer;
