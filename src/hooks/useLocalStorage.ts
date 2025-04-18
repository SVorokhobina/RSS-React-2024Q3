import { useState } from "react";

const useLocalStorage = (key: string) => {
  const storedValue = localStorage.getItem(key) || "";
  const [state, setState] = useState<string>(storedValue);
  return [state, setState] as const;
};

export default useLocalStorage;
