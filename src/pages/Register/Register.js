import React from "react";
import "./Register.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import RegisterNavbar from "../../components/Navbar/RegisterNavbar";

const registrationSchema = yup.object({
  fullName: yup.string().required("Name is required"),
  email: yup.string().email("Email is incorrect").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();

  const submitForm = (values) => {
    fetch("https://js-course-server.onrender.com/user/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          alert("Registered successfuly!");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <RegisterNavbar />
      <div className="register-wrapper">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={registrationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <div>
              <h1>Register</h1>
              <div>
                <input
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                  value={values.fullName}
                />
                <p className="error-message">
                  {errors.fullName && touched.fullName && errors.fullName}
                </p>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                  value={values.email}
                />
                <p className="error-message">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                  value={values.password}
                />
                <p className="error-message">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                />
                <p className="error-message">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </p>
              </div>
              <button onClick={handleSubmit} type="button">
                Submit
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
