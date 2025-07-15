import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState("");
  useEffect(() => {
    const getKey = localStorage.getItem(key);
    if (!getKey) {
      localStorage.setItem(key, initialValue);
      setValue(initialValue);
    } else {
        setValue(getKey)
    }
  }, []);
  const setStorage = (currentValue) => {
    setValue(currentValue);
    localStorage.setItem(key, currentValue);
  };
  return [value, setStorage];
}
