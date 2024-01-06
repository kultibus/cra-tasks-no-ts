import { useEffect, useState } from "react";

export const useOpacity = (cName, prop) => {
  const [opacity, setOpacity] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity({ [cName]: prop });
    });

    return () => {
      clearTimeout(timer);
    };
  }, [cName, prop]);

  return opacity;
};
