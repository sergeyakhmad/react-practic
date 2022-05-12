import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionsHistoryItem from "../TransactionsHistoryItem/TransactionsHistoryItem";
import s from "./TransactionsHistoryPage.module.scss";

const TransactionsHistoryPage = ({ transactions, deleteTransaction }) => {
  const [contextId, setContextId] = useState(null);
  const navigate = useNavigate();
  const { transType } = useParams();

  const changeContextId = (id) => {
    setContextId(id);
  };

  const onGoBack = () => navigate("/");

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
            deleteTransaction={deleteTransaction}
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
