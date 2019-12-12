import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
function New() {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/performances", {
            performance: {
                date: inputs.date,
                time: inputs.time,
                artist: inputs.artist,
                stage: inputs.stage
            }
        })
            .then(resp => setRedirect(true))
            .catch(err => console.error(err));
    }

    function handleInputChange(event) {
        event.persist();
        // const name = event.target.name;
        // const value = event.target.value;
        const { name, value } = event.target;

        setInputs(inputs => {
            inputs[name] = value;
            return inputs;
        });
    }

    if (redirect) return <Redirect to="/performances" />;

    return (
        <div className="container">
        <header>
        <h1>New Performance Entry</h1>
        </header>

        <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Date</label>
        <input
        className="form-control"
        name="date"
        required="required"
        onChange={handleInputChange}
        />
        </div>

        <div className="form-group">
        <label>Time</label>
        <input
        className="form-control"
        name="time"
        required="required"
        onChange={handleInputChange}
        />
        </div>

        <div className="form-group">
        <label>Artist</label>
        <input
        className="form-control"
        name="artist"
        required="required"
        onChange={handleInputChange}
        />
        </div>

        <div className="form-group">
        <label>Stage</label>
        <input
        className="form-control"
        name="stage"
        required="required"
        onChange={handleInputChange}
        />
        </div>

        <div className="form-group">
        <button className="btn btn-dark" type="submit">
        Submit
        </button>
        </div>
        </form>
        </div>
        </div>
    );
}

export default New;
