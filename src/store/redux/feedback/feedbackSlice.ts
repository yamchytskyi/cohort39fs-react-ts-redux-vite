import { createSlice } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"

import { FeedbackSliceState } from "./types"
import { count } from "console"

const feedbackInitialState: FeedbackSliceState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    onLike: create.reducer((state: FeedbackSliceState) => {
      state.likes += 1
    }),
    onDislike: create.reducer((state: FeedbackSliceState) => {
      state.dislikes += 1
    }),
    resetResults: create.reducer((state: FeedbackSliceState) => {
      state.likes = 0
      state.dislikes = 0
    }),
  }),
  selectors: {
    likes: (state: FeedbackSliceState) => {
      return state.likes
    },
    dislikes: (state: FeedbackSliceState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
