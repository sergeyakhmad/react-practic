import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeTransactionApi } from "../../utils/apiService";
import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionsHistoryItem from "../TransactionsHistoryItem/TransactionsHistoryItem";
import s from "./TransactionsHistoryPage.module.scss";
import {
  removeCosts,
  removeIncomes,
} from "../../redux/transactions/transactionsActions";
import { deleteTransaction } from "../../redux/transactions/transactionsOperations";

const TransactionsHistoryPage = () => {
  const dispatch = useDispatch();

  const transactions = useSelector((state) => state.transactions);
  const [contextId, setContextId] = useState(null);
  const navigate = useNavigate();
  const { transType } = useParams();

  const changeContextId = (id) => {
    setContextId(id);
  };

  const onGoBack = () => navigate("/");

  const handleDeleteTransaction = (transType, id) => {
    dispatch(deleteTransaction({ transType, id }));
  };

  return (
    <>
      <HeaderWihtGoBack
        title={transType === "costs" ? "Витрати" : "Доходи"}
        withBtn
        onGoBack={onGoBack}
      />
      <ul className={s.list}>
        {transactions[transType].map((transaction) => (
          <TransactionsHistoryItem
            transType={transType}
            deleteTransaction={handleDeleteTransaction}
            contextId={contextId}
            changeContextId={changeContextId}
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionsHistoryPage;
