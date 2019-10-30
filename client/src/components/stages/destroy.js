import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
// import NotificationContext from "../notification_context";


function Destroy(props) {
    useEffect(() => {
        Axios.post("/api/stages/destroy", {
            id: props.match.params.id
        })
        
    }, [props]);

    return <Redirect to="/stages" />;
}

export default Destroy;