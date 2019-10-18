import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    Axios.get("/api/artists")
      .then(result => setArtists(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Artists</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {artists.map(artist => (
              <tr key={artist._id}>
                <td>
                  <Link to={`/artists/${artist._id}`}>{artist.name}</Link>
                </td>
                <td>{artist.genre}</td>
                <td>
                  <Link to={`/artists/${artist._id}/edit`}>edit </Link>|
                  <Link to={`/artists/${artist._id}/destroy`}> delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
