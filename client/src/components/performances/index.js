import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    Axios.get("/api/performances")
      .then(result => setPerformances(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Performances</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Band Name</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {performances.map(artist => (
              <tr key={artist._id}>
                <td>
                  {performance.name}
                </td>
                <td>
                  {performance.time}
                </td>
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
