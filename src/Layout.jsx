import React, { useState, createContext, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

export const LayoutContext = createContext({
  auth: null,
  setAuth: () => {},
});

export const Layout = () => {
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/auth");
    } else {
      navigate("/");
    }
  }, [auth, navigate]);

  const contextValue = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth]
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      <Outlet />
    </LayoutContext.Provider>
  );
};
