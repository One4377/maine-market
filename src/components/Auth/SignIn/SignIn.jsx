import React from "react";

import "./SignIn.scss";

import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as PasswordIcon } from "../images/password.svg";
import { ReactComponent as TelegramIcon } from "../images/telegram.svg";
import { ReactComponent as GoogleIcon } from "../images/google.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedIn.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";

import Button from "../../Button/Button";

function SignIn() {
  return (
    <form className="SignIn">
      <div className="title">Зарегистрироваться</div>
      <div className="field">
        <input type="email" placeholder="email" />
        <EmailIcon className="icon" />
      </div>
      <div className="field">
        <input type="password" placeholder="Пароль" />
        <PasswordIcon className="icon" />
      </div>

      <div className="btn-total">
        <Button variant="primary" className="primary">
          Зарегистрироваться
        </Button>
      </div>
      <div className="more">
        <span>Войти через</span>
        <div className="links">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
          <a href="#">
            <GoogleIcon />
          </a>
          <a href="#">
            <TelegramIcon />
          </a>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
