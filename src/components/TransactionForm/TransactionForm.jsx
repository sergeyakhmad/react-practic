import s from "./TransactionForm.module.scss";

const TransactionForm = () => {
  return (
    <form className={s.form}>
      <label>
        <span className={s.title}>День</span>
        <input type="date" />
      </label>
      <label>
        <span className={s.title}>Час</span>
        <input type="time" />
      </label>
      <label>
        <span className={s.title}>Категорія</span>
        <input type="button" value="різне" />
      </label>
      <label>
        <span className={s.title}>Сума</span>
        <input type="text" placeholder="Введіть суму" />
      </label>
      <label>
        <span className={s.title}>Валюта</span>
        <input type="button" value="UAH" />
      </label>
      <label>
        <input type="text" placeholder="Коментар" />
      </label>
    </form>
  );
};

export default TransactionForm;
