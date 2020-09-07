import React, { useContext } from "react";

import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  if (alert) {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle">{alert.msg}</i>
      </div>
    );
  }

  return <></>;
}

export default Alert;
