import React, { useContext, useState } from "react";
import { logcont } from "../Loginsignincontext/context";
import "./login.css";

import Button from "@mui/material/Button";
import { NavLink, Route, useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";

function Signin() {
  const navigate = useNavigate();

  const { signin, user } = useContext(logcont);

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [err, seterr] = useState("");

  function signinuser() {
    if (pass != cpass) {
      return seterr("Sign in failed");
    } else if (!email.includes(".com")) {
      return seterr("Failed to Signin.");
    }

    seterr("");
    signin(email, pass)
      .then((res) => {
        alert("you are succesfully signin");
        navigate("/");
      })
      .catch((err) => {
        seterr("Failed to Signin.");
      });
  }

  return (
    <>
      <div class=" flex-r container logsign">
        <div class="flex-r login-wrapper">
          <div class="login-text">
            <div class="logo">
              <span>
                <i class="fab fa-speakap"></i>
              </span>
              <span>STUHELP (Teacher)</span>
            </div>
            <h1>Sign In</h1>
            <p>If you are Professor/teacher then Login Here.</p>
            {err && <Alert severity="error">{err}</Alert>}
            <form class="flex-c">
              <div class="input-box">
                <span class="label">E-mail</span>
                <div class=" flex-r input">
                  <input
                    type="text"
                    placeholder="name@abc.com"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                  <i class="fas fa-at"></i>
                </div>
              </div>

              <div class="input-box">
                <span class="label">Password</span>
                <div class="flex-r input">
                  <input
                    type="password"
                    placeholder="8+ (a, A, 1, #)"
                    value={pass}
                    onChange={(e) => {
                      setpass(e.target.value);
                    }}
                  />
                  <i class="fas fa-lock"></i>
                </div>
              </div>
              <div class="input-box">
                <span class="label">Confirm Password</span>
                <div class="flex-r input">
                  <input
                    type="password"
                    placeholder="8+ (a, A, 1, #)"
                    value={cpass}
                    onChange={(e) => {
                      setcpass(e.target.value);
                    }}
                  />
                  <i class="fas fa-lock"></i>
                </div>
              </div>
              <div class="check">
                <input type="checkbox" name="" id="" />
                <span>I've read and agree with T&C</span>
              </div>
              <Button
                variant="contained"
                className="log"
                onClick={() => {
                  signinuser();
                }}
              >
                Sign in
              </Button>
              <span class="extra-line">
                <span>Already have an account?</span>
                <a>
                  <NavLink to="/tlogin"> Log In</NavLink>
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
