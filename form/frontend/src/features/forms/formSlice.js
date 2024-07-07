import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/config";
export const fetchForms = createAsyncThunk("forms/fetchForms", async () => {
  const res = await api.get("/api/forms");
  return res.data;
});

export const createForm = createAsyncThunk("forms/createForm", async (form) => {
  const res = await api.post("/api/forms", form);
  return res.data;
});

const formSlice = createSlice({
  name: "forms",
  initialState: {
    forms: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchForms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.forms = action.payload;
      })
      .addCase(fetchForms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createForm.fulfilled, (state, action) => {
        state.forms.push(action.payload);
      });
  },
});

export default formSlice.reducer;
