import React, { useEffect, useContext } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function Logout() {

  useEffect(() => {
    Axios.post("/api/logout")
    .then(() => {
        return <Redirect to="/" />})
    .catch(err => console.error(err))
  }, []);

  return <Redirect to="/" />;
}

export default Logout;
