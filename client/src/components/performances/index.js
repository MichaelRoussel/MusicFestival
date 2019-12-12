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
        <script src='.../models/user.js'></script>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Artist</th>
              <th>Stage</th>
            </tr>
          </thead>

          <tbody>
            {performances.map(performance => (
              <tr key={performance._id}>
                <td>
                  <Link to={`/performances/${performance._id}`}>{performance.date}</Link>
                </td>
                <td>{performance.time}</td>
                <td>{performance.artist}</td>
                <td>{performance.stage}</td>                
                <td>
                  <Link to={`/performances/${performance._id}/edit`}>edit </Link>|
                  <Link to={`/performances/${performance._id}/destroy`}> delete</Link>
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
