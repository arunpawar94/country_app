import style from "./CountryCard.module.css";
import useTheme from "../hooks/useTheme";
import { useNavigate } from "react-router";

export default function CountryCard({ data: countryData }) {
  const { theme } = useTheme();
  const languages = Object.values(countryData.languages).join(", ");
  const capitals = countryData.capital.join(", ");
  const navigate = useNavigate();
  const handleNavigation = (data) => {
    navigate("/CountryDetail", {
      state: data
    });
  };
  return (
    <div
      className={
        theme === "light"
          ? style.mainDiv
          : style.mainDivDark.concat(" ", style.mainDiv)
      }
      onClick={() => handleNavigation(countryData)}
    >
      <img
        className={style.flagImg}
        src={countryData.flags.png}
        alt={countryData.name.common}
      />
      <div className={style.detailDiv}>
        <span className={style.nameText}>{countryData.name.common}</span>
        <div>
          <span className={style.labelKey}>Languages: </span>
          <span className={style.labelValue}>{languages}</span>
        </div>
        <div>
          <span className={style.labelKey}>Capital: </span>
          <span className={style.labelValue}>{capitals}</span>
        </div>
      </div>
    </div>
  );
}
