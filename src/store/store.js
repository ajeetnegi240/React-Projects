import { configureStore } from '@reduxjs/toolkit'
import animereducers from "./animeslice"
import commentreducers from "./commentsSlice"


const store = configureStore({
  reducer: {
    anime:animereducers,
    comment: commentreducers,
  }
})

export default store;