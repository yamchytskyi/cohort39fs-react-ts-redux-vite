import { createAppSlice } from "store/createAppSlice"
import axios from "axios"
import { v4 } from "uuid"

import { CatFactSliceState } from "./types"

const catFactInitialState: CatFactSliceState = {
  catFacts: [],
  error: undefined,
}

export const CatFactSlice = createAppSlice({
  name: "CAT_FACT",
  initialState: catFactInitialState,
  reducers: create => ({
    // asyncThunk - метод у обьекта create, он позволяет работать с ассинхронностью в redux
    // принимает в себя 2 аргумента
    // 1. функция callback, которая выполняет ассинхронные действия
    // 2. обьект  - в котором содержаться 3 редьюсера; pending, fulfilled, rejected
    // pending, fulfilled, rejected - вызываются только на действия, прописанные в первом аргументе функции middleware
    getCatFact: create.asyncThunk(
      async () => {
        // в response у нас либо ошибка, либо нормальные данные
        let response = await axios.get("https://catfact.ninja/fact")

        return response
      },
      {
        pending: (state: CatFactSliceState, action) => {
          state.error = undefined
          console.log("Pending", action)
        },
        fulfilled: (state: CatFactSliceState, action) => {
          state.catFacts = [
            ...state.catFacts,
            { fact: action.payload.data.fact, id: v4() },
          ]
          console.log("Fulfilled", action)
        },
        rejected: (state: CatFactSliceState, action) => {
          state.error = action.error.message
          console.log("Rejected", action)
        },
      },
    ),
  }),
  selectors: {
    catFacts: (state: CatFactSliceState) => state.catFacts,
    error: (state: CatFactSliceState) => state.error,
  },
})

export const catFactsActions = CatFactSlice.actions

export const catFactsSelectors = CatFactSlice.selectors
