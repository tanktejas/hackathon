import React, { useContext, useState } from "react";
import { logcont } from "../Loginsignincontext/context";
import "./login.css";

import Button from "@mui/material/Button";
import { NavLink, Route, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

function Forgot() {
  const { updatepass, user } = useContext(logcont);

  const [email, setemail] = useState(user.email);
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [err, seterr] = useState("");

  const navigate = useNavigate();

  function resetpass() {
    if (pass != cpass) {
      return seterr("Password and Confirm password Must be same.");
    } else if (pass.length < 6) {
      return seterr("Password length must be at least 6.");
    }

    seterr("");
    updatepass(pass)
      .then((res) => {
        alert("Your Password has been Successfully changed.");
        navigate("/");
      })
      .catch((err) => {
        seterr("Some Error Occured Please try again.");
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
              <span>Study Buddy</span>
            </div>
            <h1>Change Password</h1>
            <p>
              here you can change or reset your password and make it more
              strong.
            </p>
            {err && <Alert severity="error">{err}</Alert>}
            <form class="flex-c">
              <div class="input-box">
                <span class="label">Your E-mail (Read Only)</span>
                <div class=" flex-r input">
                  <input type="text" value={email} disabled />
                  <i class="fas fa-at"></i>
                </div>
              </div>

              <div class="input-box">
                <span class="label">Change Password</span>
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
                <span class="label">Retype Password</span>
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

              <Button
                variant="contained"
                className="log"
                onClick={() => {
                  resetpass();
                }}
              >
                Change
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
