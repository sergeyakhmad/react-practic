import sprite from "../../../assets/images/sprite.svg";
import s from "./ButtonWithIcon.module.scss";

const ButtonWithIcon = ({ icon, className }) => {
  return (
    <button className={className ? className : s.btn} type="button">
      <svg className={s.svg}>
        <use href={sprite + icon} />
      </svg>
    </button>
  );
};

export default ButtonWithIcon;
