import { useCallback, useEffect, useState } from "react";

export const getValueFromLocalStorage = <T>(
  key: string,
  defaultValue: T,
): T => {
  if (typeof window === "undefined") return defaultValue;

  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : defaultValue;
  } catch {
    window.localStorage.removeItem(key);
    return defaultValue;
  }
};

export const setValueIntoLocalStorage = <T>(key: string, value: T): boolean => {
  if (typeof window === "undefined") return false;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T | null>(() =>
    getValueFromLocalStorage<T>(key, initialValue),
  );

  const setValue = useCallback(
    (value: T) => {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
      window.dispatchEvent(new Event(`local-storage:${key}`));
    },
    [key],
  );

  const clearValue = useCallback(() => {
    window.localStorage.removeItem(key);
    setStoredValue(null);
    window.dispatchEvent(new Event(`local-storage:${key}`));
  }, [key]);

  const reHydrate = useCallback(() => {
    const data = getValueFromLocalStorage<T>(key, initialValue);
    setStoredValue(data);
  }, [key, initialValue]);

  useEffect(() => {
    window.addEventListener(`local-storage:${key}`, reHydrate);
    return () => {
      window.removeEventListener(`local-storage:${key}`, reHydrate);
    };
  }, [key, reHydrate]);

  return { storedValue, setValue, clearValue } as const;
};
