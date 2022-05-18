import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCostsSuccess,
  addIncomesSuccess,
  deleteCostsSuccess,
  deleteIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [getCostsSuccess]: (_, { payload }) => payload,
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
  [deleteCostsSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const incomesReducer = createReducer([], {
  [getIncomesSuccess]: (_, { payload }) => payload,
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [deleteIncomesSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});
