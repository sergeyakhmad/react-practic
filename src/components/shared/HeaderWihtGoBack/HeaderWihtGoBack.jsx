import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import s from "./HeaderWihtGoBack.module.scss";

const HeaderWihtGoBack = ({ title, btnTitle }) => {
  return (
    <header className={s.header}>
      {btnTitle && <ButtonWithIcon icon="#icon-arrow-left2" />}
      <h1 className={s.title}>{title}</h1>
    </header>
  );
};

export default HeaderWihtGoBack;
