import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
    const [stages, setStages] = useState([]);

    useEffect(() => {
        Axios.get("/api/stages")
            .then(result => setStages(result.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
        <header>
        <h1>All Stages</h1>
        </header>

        <div>
        <table className="table table-striped">
        <thead>
        <tr>
        <th>Name</th>
        <th>Location</th>
        </tr>
        </thead>

        <tbody>
        {stages.map(stage => (
        <tr key={stage._id}>
        <td>
        <Link to={`/stages/${stage._id}`}>{stage.name}</Link>
</td>
<td>{stage.location}</td>
<td>
<Link to={`/stages/${stage._id}/edit`}>edit </Link>|
        <Link to={`/stages/${stage._id}/destroy`}> delete</Link>
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
