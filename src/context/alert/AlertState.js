import React, { useReducer } from "react";

import AlertContext from "./AlertContext";
import alertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

function GithubState(props) {
  const initialState = {
    alert: null,
  };

  const [state, dispatcher] = useReducer(alertReducer, initialState);

  const setAlert = (alert) => {
    dispatcher({ type: SET_ALERT, payload: alert });
    setTimeout(() => dispatcher({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default GithubState;
