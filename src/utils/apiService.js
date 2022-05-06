import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const getTransactionsApi = (transType) => {
  return axios.get(transType).then(({ data }) => data);
};

export const addTransactionApi = (transType, transaction) => {
  return axios.post(transType, transaction).then(({ data }) => data);
};

export const removeTransactionApi = ({ transType, id }) => {
  return axios.delete(transType + "/" + id);
};
