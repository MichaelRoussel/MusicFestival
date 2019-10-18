import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    Axios.get(`/api/artists/${props.match.params.id}`)
      .then(result => setArtist(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{artist.name}</h1>
      </header>
      <div>
        <h4>{artist.genre}</h4>
      </div>
    </div>
  );
}

export default Show;
