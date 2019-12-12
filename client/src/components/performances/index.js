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
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {console.log(performances)}
            {performances.map(performance => (
              <tr key={performance._id}>
                <td>
                  <Link to={`/performances/${performance._id}`}>{performance.name}</Link>
                </td>
                <td>{performance.time}</td>
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
