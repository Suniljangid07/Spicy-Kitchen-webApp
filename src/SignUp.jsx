import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ComponentsCss/LogIn.css";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = () => {
    const [items,  setItems]= useState([]);



 const handleSubmit = (values, { setSubmitting }) => {
    console.log("values",values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    setItems([...items, values]);
  
  };
 console.log("data", items);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
    // setItems(items)
  },[items])
    return (
      <>{ 



      }
     
      <div className="formdiv">
     
      <div className="formfield">
      <h1>Sign Up</h1>
        <br />
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
              <label>
              Full Name
              <br/>
              <Field type="text" name="name"  placeholder="Name" required />
              <ErrorMessage name="name" component="div" />
              </label>
              <br /> <br/>
                <label>
                  Email
                  <br/> 
                  <Field type="email" name="email"  placeholder="Email"/>
                  <ErrorMessage name="email" component="div" />
                </label>
                <br /> <br/>
                <label>
                  Password
                  <br/>
                  <Field type="password" name="password" placeholder="Password"/>
                  <ErrorMessage name="password" component="div" />
                </label>
                <br/>
                <br/>
                <button className="Signupbtn" type="submit" disabled={isSubmitting}>
                 Sign Up
                </button>
              </Form>
            );
          }}
        </Formik>
        </div>
        </div>
      </>
    );
  }


export default SignUp;
