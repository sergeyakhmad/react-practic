import s from "./ButtonsToAnalitics.module.scss";

const ButtonsToAnalitics = () => {
  return (
    <div className={s.container}>
      <button className={s.btn} type="button">
        Всі витрати
      </button>
      <button className={s.btn} type="button">
        Всі доходи
      </button>
    </div>
  );
};

export default ButtonsToAnalitics;
