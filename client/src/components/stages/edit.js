import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";


function Edit(props) {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`/api/stages/${props.match.params.id}`)
            .then(result => setInputs(result.data))
            .catch(err => console.error(err));
    }, [props]);

    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/stages/update", {
            id: props.match.params.id,
            stage: inputs
        })
            .then(resp => setRedirect(true))
            .catch(err => console.error(err));
    }

    function handleInputChange(event) {
        event.persist();

        const { name, value } = event.target;

        setInputs(inputs => {
            return {
                ...inputs,
                [name]: value
            };
        });
    }

    if (redirect) return <Redirect to="/stages" />;

    return (
        <div className="container">
        <header>
        <h1>Edit Stage Post</h1>
        </header>
        <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Name</label>
        <input
        className="form-control"
        name="name"
        required="required"
        onChange={handleInputChange}
        value={inputs.name}
        />
        </div>

        <div className="form-group">
        <label>Location</label>
        <input
        className="form-control"
        name="location"
        required="required"
        onChange={handleInputChange}
        value={inputs.location}
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

export default Edit;
