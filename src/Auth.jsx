import React, { useContext } from "react";
import { LayoutContext } from "./Layout";
import { Button } from "./components/UI/buttons/Button/Button";

export const AuthPage = () => {
  const { setAuth } = useContext(LayoutContext);

  return (
    <div>
      <Button type="button" onClick={() => setAuth(true)}>
        Log in
      </Button>
    </div>
  );
};
