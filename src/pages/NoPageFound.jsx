import style from "./NoPageFound.module.css";
import useTheme from "../hooks/useTheme";
import { useNavigate } from "react-router";

export default function NoPageFound() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div
      className={
        theme === "light"
          ? style.mainDiv
          : style.mainDiv.concat(" ", style.mainDivDark)
      }
    >
      <span className={style.codeSpan}>404</span>
      <span>Oops!</span>
      <span>Page Not Found...</span>
      <button
        className={
          theme === "light"
            ? style.buttonLight
            : style.buttonDark.concat(" ", style.buttonLight)
        }
        onClick={handleHomeClick}
      >
        Home
      </button>
    </div>
  );
}
