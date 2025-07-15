import style from "./Footer.module.css";
import useTheme from "../hooks/useTheme";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className={style.mainDiv}>
      <span className={theme === "dark" ? style.spanDark : style.spanLight}>
        Developed by: Arun Pawar
      </span>
    </div>
  );
}
