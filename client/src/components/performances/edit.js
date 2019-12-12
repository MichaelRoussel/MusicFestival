import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";


function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/performances/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/performances/update", {
      id: props.match.params.id,
      performance: inputs
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

  if (redirect) return <Redirect to="/performances" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Performance Post</h1>
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
              value={inputs.date}
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              className="form-control"
              name="time"
              required="required"
              onChange={handleInputChange}
              value={inputs.time}
            />
          </div>

          <div className="form-group">
            <label>Artist</label>
            <input
              className="form-control"
              name="artist"
              required="required"
              onChange={handleInputChange}
              value={inputs.artist}
            />
          </div>

          <div className="form-group">
            <label>Stage</label>
            <input
              className="form-control"
              name="stage"
              required="required"
              onChange={handleInputChange}
              value={inputs.stage}
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
