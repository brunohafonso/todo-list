import { useEffect, useState } from "react"

export const useLocalStorage = <T = unknown>(key: string, defaultValue: T) => {
  const [state, setState] = useState<T>(() => {
    const dataFromLocalStorage = window.localStorage.getItem(key);
    if (!dataFromLocalStorage) {
      return defaultValue;
    }

    return JSON.parse(dataFromLocalStorage) as T;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return {
    state,
    setState,
  }
}