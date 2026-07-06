import { useEffect, useState } from "react";

function useLocalStorageState(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage unavailable (private browsing, etc.) — state still works in-memory
    }
  }, [key, value]);

  return [value, setValue];
}

export { useLocalStorageState };
