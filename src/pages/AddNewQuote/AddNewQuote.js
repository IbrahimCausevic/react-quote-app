import React, { useEffect, useState } from "react";
import "./AddNewQuote.css";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"

const newQuoteSchema = yup.object({
  quoteText: yup
    .string()
    .required("Ovo polje ne sme biti prazno")
    .min(6, "Na ovom polju mora da ima najmanje 6 karaktera")
    .max(100, "Na ovom polju mora da ima najvise 50 karaktera"),
  quoteAuthor: yup
    .string()
    .required("Ovo polje ne sme biti prazno")
    .min(6, "Na ovom polju mora da ima najmanje 6 karaktera")
    .max(100, "Na ovom polju mora da ima najvise 50 karaktera"),
  quoteSource: yup
    .string()
    .required("Ovo polje ne sme biti prazno")
    .min(6, "Na ovom polju mora da ima najmanje 6 karaktera")
    .max(100, "Na ovom polju mora da ima najvise 50 karaktera"),
  category: yup.string().required("Molim te odaberi kategoriju"),
});

const AddNewQuote = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/category/get-all")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const submitForm = (values) => {
    fetch("https://js-course-server.onrender.com/quotes/add-quote", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Uspesno");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
<div>
    <div className="add-quote-wrapper">
      <Formik
        initialValues={{
          quoteText: "",
          quoteAuthor: "",
          quoteSource: "",
          category: "",
        }}
        validationSchema={newQuoteSchema}
        onSubmit={(values, actions) => {
          submitForm(values);
        }}
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
            <div>
              <h1>Text</h1>
              <textarea
                type="text"
                name="quoteText"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteText}
              />
              <p className="error-message">
                {errors.quoteText && touched.quoteText && errors.quoteText}
              </p>
            </div>
            <div>
              <h1>Author</h1>
              <input
                type="text"
                name="quoteAuthor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteAuthor}
              />
              <p className="error-message">
                {errors.quoteAuthor &&
                  touched.quoteAuthor &&
                  errors.quoteAuthor}
              </p>
            </div>
            <div>
              <h1>Source</h1>
              <input
                type="text"
                name="quoteSource"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteSource}
              />
              <p className="error-message">
                {errors.quoteSource &&
                  touched.quoteSource &&
                  errors.quoteSource}
              </p>
            </div>
            <div>
              <h1>Category</h1>
              <select
                name="category"
                onChange={handleChange}
                value={values.category}
              >
                <option value={""} disabled={true}>
                  Kategorija
                </option>
                {categories.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <p className="error-message">
                {errors.category && touched.category && errors.category}
              </p>
            </div>
            <button onClick={handleSubmit} type="button">
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div></div>
  );
};

export default AddNewQuote;
