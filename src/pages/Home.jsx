import CountryCard from "../components/CountryCard";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import useTheme from "../hooks/useTheme";

export default function Home() {
  const [countryList, setCountryList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies,languages"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountryList(data);
        setFilterList(data);
        setLoading(false);
      })
      .catch((_error) => {
        setLoading(false);
      });
  }, []);
  const skeletonDiv = () => {
    return (
      <div className={style.listDiv}>
        {Array(10)
          .fill(null)
          .map((_item, index) => (
            <div
              key={index}
              className={
                theme === "light"
                  ? style.skeletonMainDiv
                  : style.skeletonMainDiv.concat(" ", style.skeletonDivDark)
              }
            >
              <div className={style.skeletonImgDiv}></div>
              <div className={style.skeletonDiv}></div>
              <div className={style.skeletonDiv}></div>
              <div className={style.skeletonDiv}></div>
            </div>
          ))}
      </div>
    );
  };

  const handleSearchChange = (event) => {
    const filteredData = countryList.filter((item) =>
      item.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearch(event.target.value);
    setFilterList(filteredData)
  };

  return (
    <div className={theme === "light" ? style.mainDiv : style.mainDivDark}>
      <div className={style.searchDiv}>
        <span>Search</span>
        <input
          className={theme === "light" ? "" : style.inputDark}
          name="search"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Enter Country Name"
        />
      </div>
      {loading === true ? (
        skeletonDiv()
      ) : (
        <>
          {filterList.length === 0 ? (
            <div className={style.emptyDiv}><h1>No Match Found!</h1></div>
          ) : (
            <div className={style.listDiv}>
              {filterList.map((item, index) => (
                <CountryCard key={index} data={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
