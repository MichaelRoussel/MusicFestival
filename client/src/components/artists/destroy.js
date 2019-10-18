import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
// import NotificationContext from "../notification_context";


function Destroy(props) {
  useEffect(() => {
    Axios.post("/api/artists/destroy", {
      id: props.match.params.id
    })
    // .then(() => setNotification(notification => {
    //   return {
    //     ...notification,
    //     status: "success",
    //     message: "Artist deleted successfully"
    //   };
    // }))
    // .catch(() => setNotification(notification => {
    //   return {
    //     ...notification,
    //     status: "danger",
    //     message: "Unexpected error occured"
    //   };
    // }));
  }, [props]);

  return <Redirect to="/artists" />;
}

export default Destroy;
