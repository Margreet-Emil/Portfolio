import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle(!isDark);
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((d) => !d) };
}
// useEffect(() => {
//   document.body.classList.toggle("light", !isDark);
// }, [isDark]);
