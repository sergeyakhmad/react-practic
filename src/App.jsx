import MainPage from "./components/MainPage/MainPage";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import data from "./data/data.json";

function App() {
  return (
    <>
      {/* <CategoriesList /> */}
      {/* <MainPage /> */}
      <TransactionsHistoryPage transactions={data} />
    </>
  );
}

export default App;
