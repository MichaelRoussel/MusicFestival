import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [performance, setArtist] = useState([]);

  useEffect(() => {
    Axios.get(`/api/performances/${props.match.params.id}`)
      .then(result => setArtist(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{performance.name}</h1>
      </header>
      <div>
        <h4>{performance.time}</h4>
      </div>
    </div>
  );
}

export default Show;
