import {
  addTransactionApi,
  getTransactionsApi,
  removeTransactionApi,
} from "../../utils/apiService";
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
} from "./transactionsActions";

export const getTransactions = (transType) => (dispatch) => {
  transType === "costs" && dispatch(getCostsRequest());
  transType === "incomes" && dispatch(getIncomesRequest());

  getTransactionsApi(transType)
    .then((transactions) => {
      transType === "costs" && dispatch(getCostsSuccess(transactions));
      transType === "incomes" && dispatch(getIncomesSuccess(transactions));
    })
    .catch((error) => {
      transType === "costs" && dispatch(getCostsError(error.message));
      transType === "incomes" && dispatch(getIncomesError(error.message));
    });
};

export const addTransaction = (transaction) => (dispatch) => {
  const { transType } = transaction;
  transType === "costs" && dispatch(addCostsRequest());
  transType === "incomes" && dispatch(addIncomesRequest());

  addTransactionApi(transaction)
    .then((transaction) => {
      transType === "costs" && dispatch(addCostsSuccess(transaction));
      transType === "incomes" && dispatch(addIncomesSuccess(transaction));
    })
    .catch((error) => {
      transType === "costs" && dispatch(addCostsError(error.message));
      transType === "incomes" && dispatch(addIncomesError(error.message));
    });
};

export const deleteTransaction =
  ({ transType, id }) =>
  (dispatch) => {
    transType === "costs" && dispatch(deleteCostsRequest());
    transType === "incomes" && dispatch(deleteIncomesRequest());

    removeTransactionApi({ transType, id })
      .then(() => {
        transType === "costs" && dispatch(deleteCostsSuccess(id));
        transType === "incomes" && dispatch(deleteIncomesSuccess(id));
      })
      .catch((error) => {
        transType === "costs" && dispatch(deleteCostsError(error.message));
        transType === "incomes" && dispatch(deleteIncomesError(error.message));
      });
  };
