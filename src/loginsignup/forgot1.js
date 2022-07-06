import React, { useContext, useState } from "react";
import { logcont } from "../Loginsignincontext/context";
import "./login.css";

import Button from "@mui/material/Button";
import { NavLink, Route, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

function Forgot() {
  const { passremail, user } = useContext(logcont);

  const [email, setemail] = useState("");
  const [err, seterr] = useState("");
  const [sent, setsent] = useState(false);

  const navigate = useNavigate();

  function sendmail() {
    seterr("");
    setsent(false);
    passremail(email)
      .then(() => {
        setsent(true);
      })
      .catch((err) => {
        seterr("Some Error occured or User not exist try again.");
      });
  }

  return (
    <>
      <div class=" flex-r container logsign">
        <div class="flex-r login-wrapper">
          <div class="login-text asd">
            <div class="logo">
              <span>
                <i class="fab fa-speakap"></i>
              </span>
              <span>STUHELP</span>
            </div>
            <h1>Forgot Password</h1>
            <p>
              Type your mail and get password reset link on mail (Check Spam
              Also).
            </p>
            {err && <Alert severity="error">{err}</Alert>}
            {sent && (
              <Alert severity="success">
                Mail sent Successfully, Check inbox (Must check Spam).
              </Alert>
            )}
            <form class="flex-c">
              <div class="input-box">
                <span class="label">E-mail</span>
                <div class=" flex-r input">
                  <input
                    type="text"
                    placeholder="abc@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                  <i class="fas fa-at"></i>
                </div>
              </div>

              <Button
                variant="contained"
                className="log links"
                onClick={() => {
                  sendmail();
                }}
              >
                send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
