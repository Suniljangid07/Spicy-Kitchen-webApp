import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ComponentsCss/LogIn.css";
import { NavLink,useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      localStorage.setItem('item', JSON.stringify(values));
      setSubmitting(false);
      navigate('/menu');
      window.location.reload();
    }, 400);
    // window.location.reload();
  };

  return (
    <>
      <div className="formdiv">
        <div className="formfield">
          <h1>Login</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <label>
                    Email
                    <br/>
                     <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </label>
                  <label>
                  <br/>
                    Password:
                    <br/>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                  </label>
                  <br/>
                  <br/>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                  <p>If You Don't Have Account please <NavLink to="/onlineorder/signup" >Sign Up</NavLink></p>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
