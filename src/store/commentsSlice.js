import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
};

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addComments: (state,action)=>{
            state.comments.push(action.payload)
        },
    }
});

export const {
    addComments,
} = commentSlice.actions;

export default commentSlice.reducer;