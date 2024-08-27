import React from "react";

export const handleWindowBlurChangeTitle = (titleWhenBlur: string[]) => {
  const previousTitle = React.useRef(document.title);
  const handleWindowBlur = () => {
    previousTitle.current = document.title;
    document.title =
      titleWhenBlur[Math.floor(Math.random() * titleWhenBlur.length)];
  };

  const handleWindowFocus = () => {
    if (previousTitle.current) {
      document.title = previousTitle.current;
    }
  };

  React.useEffect(() => {
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    return () => {
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [titleWhenBlur]);
};
