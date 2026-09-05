import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
    loading: false,
    error: null,
};

const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers: {
        setResults: (state,action)=>{
            state.results = action.payload
        },
        setLoading: (state,action)=>{
            state.loading = action.payload
        },
        setError: (state,action)=>{
            state.error = action.payload
        },
    }
});

export const {
    setResults,
    setLoading,
    setError,
} = animeSlice.actions;

export default animeSlice.reducer;