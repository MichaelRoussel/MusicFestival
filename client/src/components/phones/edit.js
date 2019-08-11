import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";


function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/phones/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/phones/update", {
      id: props.match.params.id,
      phone: inputs
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

  if (redirect) return <Redirect to="/phones" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Phone Post</h1>
      </header>
      <div>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Model</label>
            <input
              className="form-control"
              name="model"
              required="required"
              onChange={handleInputChange}
              value={inputs.model}
            />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input
              className="form-control"
              name="brand"
              required="required"
              onChange={handleInputChange}
              value={inputs.brand}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              required="required"
              onChange={handleInputChange}
              value={inputs.price}
            />
          </div>

          <div className="form-group">
            <label>Specifications</label>
            <textarea
              className="form-control"
              name="specifications"
              onChange={handleInputChange}
              value={inputs.specifications}
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
