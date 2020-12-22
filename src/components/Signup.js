import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import config from "../config";
import "./Signup.css"

const Signup = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "Minimum 4 characters")
        .max(15, "Maximum 15 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      fetch(`${config.API_ENDPOINT}/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          history.push("/recordslist");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className="Signup">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          aria-label="username"
        />
        {formik.errors.username && formik.touched.username && (
          <p>{formik.errors.username}</p>
        )}
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          aria-label="email"
        />
        {formik.errors.email && formik.touched.email && (
          <p>{formik.errors.email}</p>
        )}
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          aria-label="password"
        />
        {formik.errors.password && formik.touched.password && (
          <p>{formik.errors.password}</p>
        )}
          <br />
        <label htmlFor="confirm_password">Confirm Password:</label>
          <br />
        <input
          type="password"
          name="confirm_password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          aria-label="confirm password"
        />
        {formik.errors.confirm_password && formik.touched.confirm_password && (
          <p>{formik.errors.confirm_password}</p>
        )}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
