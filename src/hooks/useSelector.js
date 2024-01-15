import { useEffect, useState } from "react";

export const useSelector = (selector) => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProperty(() => ({ [selector]: true }));
    });

    return () => {
      clearTimeout(timer);
    };
  }, [selector]);

  return property;
};
