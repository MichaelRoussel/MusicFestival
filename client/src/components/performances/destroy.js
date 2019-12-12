import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
// import NotificationContext from "../notification_context";


function Destroy(props) {
  useEffect(() => {
    Axios.post("/api/performances/destroy", {
      id: props.match.params.id
    })
  }, [props]);

  return <Redirect to="/performances" />;
}

export default Destroy;
