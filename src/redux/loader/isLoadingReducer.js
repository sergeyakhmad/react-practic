import { createReducer } from "@reduxjs/toolkit";
import {
  addCostsError,
  addCostsRequest,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequest,
  addIncomesSuccess,
  deleteCostsError,
  deleteCostsRequest,
  deleteCostsSuccess,
  deleteIncomesError,
  deleteIncomesRequest,
  deleteIncomesSuccess,
  getCostsError,
  getCostsRequest,
  getCostsSuccess,
  getIncomesError,
  getIncomesRequest,
  getIncomesSuccess,
} from "../transactions/transactionsActions";

export const isLoadingReducer = createReducer(false, {
  [getCostsRequest]: () => true,
  [getCostsSuccess]: () => false,
  [getCostsError]: () => false,

  [getIncomesRequest]: () => true,
  [getIncomesSuccess]: () => false,
  [getIncomesError]: () => false,

  [addCostsRequest]: () => true,
  [addCostsSuccess]: () => false,
  [addCostsError]: () => false,

  [addIncomesRequest]: () => true,
  [addIncomesSuccess]: () => false,
  [addIncomesError]: () => false,

  [deleteCostsRequest]: () => true,
  [deleteCostsSuccess]: () => false,
  [deleteCostsError]: () => false,

  [deleteIncomesRequest]: () => true,
  [deleteIncomesSuccess]: () => false,
  [deleteIncomesError]: () => false,
});
