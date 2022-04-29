import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionForm from "../TransactionForm/TransactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";

const MainPage = () => {
  return (
    <>
      <HeaderWihtGoBack title={"Журнал видатків"} />
      <TransactionForm />
      <ButtonsToAnalitics />
    </>
  );
};

export default MainPage;
