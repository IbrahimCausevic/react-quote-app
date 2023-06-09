import React from "react";
import "./Login.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../../components/Navbar/LoginNavbar";

const loginSchema = yup.object({
  email: yup
    .string()
    .required("You must input your email first")
    .email("Email is incorrect"),
  password: yup
    .string()
    .required("You must enter your password first")
    .min(6)
    .max(50),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <LoginNavbar />
      <div className="login-wrapper">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            fetch("https://js-course-server.onrender.com/user/login", {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.token) {
                  alert("Login successful!");
                  localStorage.setItem("authToken", data.token);
                  navigate("/");
                }
              });
          }}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div>
              <h1>Login</h1>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
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
                  value={values.password}
                  placeholder="Password"
                />
                <p className="error-message">
                  {errors.password && touched.password && errors.password}
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

export default Login;
