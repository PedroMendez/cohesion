import { useState } from "react";

export const useLocalStorage = (key, initialValue, isJson) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (isJson === true ? JSON.parse(item) : item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value, isJson = true) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(
        key,
        isJson === true ? JSON.stringify(valueToStore) : valueToStore
      );
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
