import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Test() {
  const { state } = useContext(AppContext);

  return <div>{toString(state.state)}</div>;
}

export default Test;
