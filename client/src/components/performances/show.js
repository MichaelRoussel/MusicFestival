import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    Axios.get(`/api/performances/${props.match.params.id}`)
      .then(result => setPerformance(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
    <header>
    <h1>{performance.name}</h1>
    </header>
    <div>
    <h6>{performance.time}</h6>
    </div>
    </div>
  );
}

export default Show;
