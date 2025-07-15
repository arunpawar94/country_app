import style from "./Header.module.css";
import sunIcon from "url:../assets/images/sunIcon.png";
import moonIcon from "url:../assets/images/moonIcon.png";
import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, changeTheme } = useTheme();
  return (
    <div className={theme === "light" ? style.mainDiv : style.mainDivDark.concat(" ", style.mainDiv)}>
      <span className={style.headerHeadingText}>Countries in the world</span>
      <button className={style.buttonStyle} onClick={changeTheme}>
        <div>
          <img src={theme === "dark" ? moonIcon : sunIcon} alt="theme_icon" />
          <span className={style.themeText}>
            {theme === "dark" ? "Dark mode" : "Light mode"}
          </span>
        </div>
      </button>
    </div>
  );
}
