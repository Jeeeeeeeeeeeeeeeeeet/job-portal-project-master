import React from "react";
import { useSelector } from "react-redux";

import { Form as BootStrapForm, Button } from "react-bootstrap";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import classes from "./Changepassword.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <BootStrapForm.Group className={`${classes.formBox} mb-2`}>
        <BootStrapForm.Label htmlFor={props.id || props.name}>
          {label}
        </BootStrapForm.Label>
        <BootStrapForm.Control
          className={meta.touched && meta.error && "invalid"}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </BootStrapForm.Group>
      {/* <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
};

const ChangePassword = () => {
  const selectauthToken = (rootstate) => rootstate.authToken;
  const authToken = useSelector(selectauthToken);
  console.log(authToken);
  return (
    <>
      <div className="flex">
        <div className="w-full bg-gray-100 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                passwordConfirmation: "",
              }}
              validationSchema={Yup.object({
                oldPassword: Yup.string()
                  // .oneOf([authToken.password], "Wrong Password")
                  .required("Old Password Required"),
                newPassword: Yup.string()
                  // .notOneOf(
                  //   [authToken.password],
                  //   "New Password should not be same as old Password"
                  // )
                  .required("New Password Required"),
                passwordConfirmation: Yup.string()
                  .oneOf([Yup.ref("newPassword")], "Password mismatch")
                  .required("Confirm New Password Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
                toast.success("Password Changed Successfully", {
                  position: "bottom-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              <Form className="space-y-4">
                <h1 className="text-lg font-semibold mb-6 text-gray-900 text-center">
                  Change Password!
                </h1>
                <label className="block text-sm font-medium text-gray-700">
                  Old Password
                </label>
                <input
                  label="Old password"
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  mandatory={"true"}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  label="New Password"
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  mandatory={"true"}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  label="Confirm New Password"
                  id="confirmPassword"
                  name="passwordConfirmation"
                  type="password"
                  mandatory={"true"}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                <button
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
