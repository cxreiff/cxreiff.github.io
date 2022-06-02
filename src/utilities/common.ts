
export const isMobile = () => window.matchMedia(
    "only screen and (hover: none) and (max-width: 768px)"
).matches
