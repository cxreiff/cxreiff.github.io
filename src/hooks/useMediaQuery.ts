import { useEffect, useState } from "react";

export const MEDIA_QUERIES = {
  LARGER_THAN_XS: "(min-width: 385px)",
  LARGER_THAN_SM: "(min-width: 768px)",
  LARGER_THAN_MD: "(min-width: 1400px)",
  MOBILE: "only screen and (hover: none) and (max-width: 768px)",
} as const;

export const useMediaQuery = (
  query: (typeof MEDIA_QUERIES)[keyof typeof MEDIA_QUERIES]
) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [matches]);

  return matches;
};
