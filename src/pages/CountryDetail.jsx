import { useLocation, useNavigate } from "react-router";
import style from "./CountryDetail.module.css";
import useTheme from "../hooks/useTheme";

export default function CountryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const data = location.state
    ? location.state
    : {
        languages: {},
        capital: [],
        currencies: { dop: {} },
        flags: { png: "" },
        name: { common: "" },
      };
  const languages = Object.values(data.languages).join(", ");
  const capitals = data.capital.join(", ");
  const currencies = Object.values(data.currencies)
    .map((item) => item.name)
    .join(", ");

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={
        theme === "light"
          ? style.mainDiv
          : style.mainDiv.concat(" ", style.mainDivDark)
      }
    >
      <button
        className={
          theme === "light"
            ? style.buttonLight
            : style.buttonDark.concat(" ", style.buttonLight)
        }
        onClick={handleBack}
      >
        Back
      </button>
      {location.state ? (
        <div className={style.innerDiv}>
          <img src={data.flags.png} alt="country_flag" />
          <div>
            <div className={style.itemDiv}>
              <span className={style.labelHead}>Common Name: </span>
              <span className={style.labelValue}>{data.name.common}</span>
            </div>
            <div className={style.itemDiv}>
              <span className={style.labelHead}>Official Name: </span>
              <span className={style.labelValue}>{data.name.official}</span>
            </div>
            <div className={style.itemDiv}>
              <span className={style.labelHead}>Languages: </span>
              <span className={style.labelValue}>{languages}</span>
            </div>
            <div className={style.itemDiv}>
              <span className={style.labelHead}>Capitals: </span>
              <span className={style.labelValue}>{capitals}</span>
            </div>
            <div className={style.itemDiv}>
              <span className={style.labelHead}>Currencies: </span>
              <span className={style.labelValue}>{currencies}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.innerDiv}>
          <h1 style={{ margin: "100px auto" }}>No data available</h1>
        </div>
      )}
    </div>
  );
}
