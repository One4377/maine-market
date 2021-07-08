import { Link } from "react-router-dom";

import "./SignUp.scss";

import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as PasswordIcon } from "../images/password.svg";
import { ReactComponent as TelegramIcon } from "../images/telegram.svg";
import { ReactComponent as GoogleIcon } from "../images/google.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedIn.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";

import Checkbox from "../../Checkbox/Checkbox";
import Button from "../../Button/Button";

function SignUp() {
  return (
    <form className="SignIn">
      <div className="title">Войти</div>
      <div className="field">
        <input type="email" placeholder="email" />
        <EmailIcon className="icon" />
      </div>
      <div className="field">
        <input type="password" placeholder="Пароль" />
        <PasswordIcon className="icon" />
      </div>
      <div className="info">
        <div className="checkbox-field">
          <Checkbox />
          Запомнить
        </div>
        <Link to="#">Я забыл пароль</Link>
      </div>
      <div className="btn-total">
        <Button variant="primary" className="primary">
          Войти
        </Button>
        <Button variant="rate" className="rate">
          <Link to="/auth/sign-in">Зарегистрироваться</Link>
        </Button>
      </div>
      <div className="more">
        <span>Войти через</span>
        <div className="links">
          <Link to="#">
            <FacebookIcon />
          </Link>
          <Link to="#">
            <LinkedInIcon />
          </Link>
          <Link to="#">
            <GoogleIcon />
          </Link>
          <Link to="#">
            <TelegramIcon />
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
