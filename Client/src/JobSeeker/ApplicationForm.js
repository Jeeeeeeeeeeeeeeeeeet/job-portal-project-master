import React, { useEffect } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import classes from "./Modalf.module.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Config from "../config/Config.json";
import SpinnerComponent from "../components/UI/SpinnerComponent";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

toast.configure();

function Register(props) {
  const [inputs, setinputs] = useState({});
  const [errors, setErrors] = useState({});
  const [showSpinner, setSpinner] = useState(false);
  // console.log(props.job);
  const selectauthToken = (rootstate) => rootstate.authToken;

  const authToken = localStorage.getItem("token");
  const redAuthToken = jwtDecode(authToken);

  const handleChange = (event) => {
    setinputs((values) => {
      if (event.target.name === "Resume") {
        return {
          ...values,
          [event.target.name]: event.target.files[0],
        };
      }
      return {
        ...values,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (validate()) {
      formData.append("name", inputs.name);
      formData.append("email", inputs.email);
      formData.append("resume", inputs.Resume);
      formData.append("jobId", props.job._id);
      formData.append("providerId", props.job.providerId);

      setSpinner(true);
      axios
        .post(
          `${Config.SERVER_URL + "user/apply/" + props.job._id}`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setSpinner(false);
          props.changes((prev) => !prev);
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          props.onClose();
        })
        .catch((err) => {
          setSpinner(false);
          console.log(err);
          toast.error("Oops! Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  useEffect(() => {
    console.log(redAuthToken)
  }, []);

  const validate = () => {
    let isValid = true;
    let error = {};

    if (!inputs["name"]) {
      isValid = false;
      error["name"] = "Please enter your name.";
    }
    if (!inputs["email"]) {
      isValid = false;
      error["email"] = "Please enter your emailID.";
    }
    if (typeof inputs["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(inputs["email"])) {
        isValid = false;
        error["email"] = "Please enter valid email address.";
      }
    }

    if (!inputs["Resume"]) {
      isValid = false;
      error["Resume"] = "Please choose your Resume.";
    }
    setErrors(error);

    return isValid;
  };

  return (
    <div>
      {showSpinner && <SpinnerComponent />}
      <div className={classes.abc}>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Card
              className={classes.register}
              style={{
                backgroundColor: "white",
                border: "none",
                width: "20rem",
              }}
            >
              <Card.Body>
                <div className={classes.cardbody}>
                  <Form onSubmit={handleSubmit}>
                    <span className="text-pretty">
                      Applying For:{" "}
                    </span>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        value={props.job.title}
                        disabled
                      />
                    </div>
                    <Form.Group className="mb-3">
                      <div className="form-group-required">
                        <span className={classes["control-label"]}>
                          Name <span style={{ color: "red" }}> *</span>
                        </span>
                        <Form.Control
                          type="text"
                          value={redAuthToken.userName}
                          disabled
                          name="name"
                          onChange={handleChange}
                        />
                        {errors.name ? (
                          <div className={classes.errors}>{errors.name} </div>
                        ) : null}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <div className="form-group-required">
                        <Form.Label className={classes["control-label"]}>
                          Email address <span style={{ color: "red" }}> *</span>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={redAuthToken.email}
                          name="email"
                          disabled
                          onChange={handleChange}
                        />
                        {errors.email ? (
                          <div className={classes.errors}>{errors.email}</div>
                        ) : null}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <div className="form-group-required">
                        <Form.Label className={classes["control-label"]}>
                          Resume <span style={{ color: "red" }}> *</span>
                        </Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Choose file"
                          name="Resume"
                          onChange={handleChange}
                        />
                        {errors.Resume ? (
                          <div className={classes.errors}>{errors.Resume}</div>
                        ) : null}
                      </div>
                    </Form.Group>

                    <button type="submit" className="w-full bg-teal-400 text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                      {" "}
                      Submit
                    </button>
                    <button
                      type="button"
                      className="w-full bg-black text-white mt-1 p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                      onClick={props.onClose}
                    >
                      Cancel
                    </button>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Register;
