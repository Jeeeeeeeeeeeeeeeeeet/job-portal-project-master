// import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./Register.module.css";
import {
  NumberInput,
  SelectInput,
  TextInput,
} from "../../components/dashboard/ManageUsers/AddUsersFormik/fields/FieldInputs";

const Register = (props) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();
  const [chkbox, setChkbox] = useState(false);

  const togglechkbox = () => {
    setChkbox((value) => !value);
  };

  let initialValues = {
    name: "",
    address: "",
    dob: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",    
    qualification: "",
    experience: "",
    role: "User",
  };

  const formSubmitHandler = (values, setSubmitting) => {
    setShowSpinner(true);
    axios
      .post(`http://localhost:8080/auth/register`, { ...values })
      .then((res) => {
        setShowSpinner(false);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        setShowSpinner(false);
        toast.error("Oops something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="flex">
        {/* <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className=""><img src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-507557,resizemode-75,msid-84398720/jobs/covid-19-impact-investigators-find-sudden-spurt-in-job-related-frauds-due-to-wfh.jpg" className="absolute float-left" /></div>
        </div> */}
        <div className="w-full bg-gray-100 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">
              Sign Up
            </h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              Join to Our Community with all time access and free{" "}
            </h1>

            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(4, "Name should be more than 4 characters")
                  .max(25, "Name should be less than 25 characters")
                  .required("Name is a required field"),
                address: Yup.string()
                  .min(10, "Address must be longer than 10 characters")
                  .max(100, "Address must not be longer than 100 characters")
                  .required("Address is a required field"),
                dob: Yup.date()
                  .required("Date of birth is a required field"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is a required field"),                
                password: Yup.string()
                  .min(6, "Password must be minimum 6 characters")
                  .required("Password is a required field"),
                mobile: Yup.string()
                  .required("Phone number is required")
                  .matches(/^[0-9]+$/, "Must be only digits")
                  .min(10, "Must be exactly 10 digits")
                  .max(10, "Must be exactly 10 digits"),
                gender: Yup.string().required("Gender Required"),
                qualification: Yup.string().required("Qualification Required"),
                experience: Yup.string(),
                role: Yup.string(),
              })}
              onSubmit={(values, { setSubmitting }) => {
                const editedValues = { ...props.userInfo, ...values };
                formSubmitHandler(editedValues, setSubmitting);
              }}
            >
              {(formik) => (
                <div className={classes.main}>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="uname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        label="Name"
                        id="name"
                        name="name"
                        mandatory={"true"}
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <textarea
                        label="address"
                        id="address"
                        name="address"
                        mandatory={"true"}
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date of Birth
                      </label>
                      <input
                      type="date"
                        label="dob"
                        id="dob"
                        name="dob"
                        mandatory={"true"}
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>
                    </div>
                    <div className="flex">
                      <div className="relative float-left">
                        <input
                          type="radio"
                          value="Male"
                          name="gender"
                          id="Male"
                        />
                        <label htmlFor="Male">Male</label>
                      </div>
                      <div className="pl-10 float-right">
                        <input
                          type="radio"
                          value="Female"
                          name="gender"
                          id="Female"
                        />
                        <label htmlFor="Female">Female</label>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        label="Mobile No"
                        id="mobile"
                        name="mobile"
                        mandatory={"true"}
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        label="Password"
                        id="password"
                        type="password"
                        name="password"
                        mandatory={"true"}
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cpassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <input
                        label="cPassword"
                        id="cpassword"
                        type="password"
                        name="cpassword"
                        mandatory={"true"}
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="qualification"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Qualification
                      </label>
                      <select
                        name="qualification"
                        id="qualification"
                        label="Qualification"
                        mandatory={"true"}
                        className="mt-1 bg-white p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      >
                        <option value="">Select</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="High School">High School</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="qualification"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Experience
                      </label>
                      <select
                        name="experience"
                        id="experience"
                        label="Experience"
                        mandatory={"true"}
                        className="mt-1 bg-white p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      >
                        <option value="">Select</option>
                        <option value="0-2">0-2</option>
                        <option value="3-7">3-7</option>
                        <option value="7-10">7-10</option>
                        <option value="10-50">10-50</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="tnc"
                        className="block text-sm font-medium text-gray-700"
                      >
                        <input
                          type="checkbox"
                          value={chkbox}
                          onChange={togglechkbox}
                          className="focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0.1"
                        />
                        <span className="mx-2">
                          By clicking submit you are agreeing to the Terms and
                          Conditions.
                        </span>
                      </label>
                    </div>
                    <div>
                      <button className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </Formik>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/Login" className="text-black hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
