import { Link } from "react-router-dom";

import "./SignIn.scss";

import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as PasswordIcon } from "../images/password.svg";
import { ReactComponent as TelegramIcon } from "../images/telegram.svg";
import { ReactComponent as GoogleIcon } from "../images/google.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedIn.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";

import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";

function SignIn() {
  return (
    <form className="SignIn">
      <div className="title">Зарегистрироваться</div>
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
      <div className="field">
        <input className="about" type="text" placeholder="Имя" />
      </div>
      <div className="field">
        <input className="about" type="text" placeholder="Фамилия" />
      </div>
      <div className="field">
        <input type="email" placeholder="email" />
        <EmailIcon className="icon" />
      </div>
      <div className="field">
        <input type="password" placeholder="Пароль" />
        <PasswordIcon className="icon" />
      </div>
      <div className="field">
        <input type="password" placeholder="Подтвердить пароль" />
        <PasswordIcon className="icon" />
      </div>

      <div className="info">
        <Checkbox />
        <div className="checkbox-field">
          Я принимаю условия
          <Link to="#">Пользовательского соглашения</Link>
        </div>
      </div>

      <div className="btn-total">
        <Button variant="rate" className="rate">
          Зарегистрироваться
        </Button>
      </div>

      <Link className="enter" to="/auth/sign-up">У меня уже есть доступ, войти</Link>
    </form>
  );
}

export default SignIn;
