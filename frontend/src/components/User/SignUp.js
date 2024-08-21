import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameerror, setNameerror] = useState(" ");
  const [emailerror, setEmailerror] = useState(" ");
  const [passworderror, setPassworderror] = useState(" ");

  const navigate = useNavigate();
  const Register = () => {
    axios.post('http://localhost:3001/user/signup', { name, email, password })
      .then(response => {
        if (response.status === 200) {
          toast.success("Sign Up Success....");
          setTimeout(() => {
            window.location.reload(); // Reload the page after 2 seconds
          }, 2000);
        }
      }).catch(err => {
        if(err.response.status === 400){
          toast.info(err.response.data);
        }else
        toast.error("User internal error...");
      });
  };


  return (
    <>
      <ToastContainer />
      <section className="" style={{ backgroundColor: "#eee" }}>
        <div className="container-fluid h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">

                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" style={{ backgroundColor: "#c6cbc9" }}>
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example1c"> Your Name</label>
                            <input type="text" onChange={(event) => { (event.target.value === "") ? setNameerror("name is required") : (!event.target.value.match("^[a-z A-Z]+$")) ? setNameerror("name contains only charecters") : (!event.target.value.match("^[a-z A-Z]{2,20}$")) ? setNameerror("name must be at least 2-20 characters long.") : setNameerror(""); setName(event.target.value); }} id="form3Example1c" className="form-control" />
                            <small className="text-danger fs-7" >{nameerror}</small>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example3c"> Your Email</label>
                            <input type="email" onChange={(event) => { (event.target.value === "") ? setEmailerror("email is required") : (!event.target.value.match(/^[^\s@]+@/)) ? setEmailerror("Email must start with valid characters.") : (!event.target.value.match(/@gmail\.com$/)) ? setEmailerror("Email must end with '@gmail.com'.") : setEmailerror(""); setEmail(event.target.value); }} id="form3Example3c" className="form-control" />
                            <small className="text-danger fs-7" >{emailerror}</small>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4c">Password</label>
                            <input type="password" onChange={(event) => { (event.target.value === "") ? setPassworderror("password is required") : (!event.target.value.match(/^(?=.*\d)/)) ? setPassworderror("Password must contain at least one digit.") : (!event.target.value.match(/^(?=.*[a-zA-Z])/)) ? setPassworderror("Password must contain at least one letter.") : (!event.target.value.match(/^.{5,}$/)) ? setPassworderror("Password must be at least 5 characters long.") : setPassworderror(""); setPassword(event.target.value); }} id="form3Example4c" className="form-control" />
                            <small className="text-danger fs-7" >{passworderror}</small>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <label className="form-check-label" for="form2Example3">you have already account <a href="" onClick={() => navigate('/signin')}> Sign In</a></label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {(nameerror === "" && emailerror === "" && passworderror === "") ?
                            <button type="button" onClick={() => { Register() }} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button> :
                            <button type="submit" onClick={() => { alert("plese fill all information") }} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                          }
                        </div>

                      </form>

                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="logo.png" className="img-fluid" alt="Sample image" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
