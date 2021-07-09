import "./AboutUser.scss";

import { ReactComponent as UserIcon } from "./images/user.svg";

import Button from "../../Button/Button";

function AboutUser() {
  return (
    <div className="AboutUser">
      <div className="title">Тип лица</div>
      <div className="description">Выбирети тип вашего лица</div>
      <form className="form">
        <div className="user">
          <div className="icon">
            <UserIcon />
          </div>
          <div className="info">
            <div className="name">ИВАН</div>
            <div className="type">Пользователь</div>
          </div>
        </div>
        <div className="btn-total">
          <Button variant="primary" className="primary">
            Загрузить аватар
          </Button>
          <Button variant="rate" className="rate">
            Удалить аватар
          </Button>
        </div>
        <input type="text" placeholder="Фамилия" />
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Отчество" />
        <div className="btn-total">
          <Button variant="primary" className="primary">
            Мужской
          </Button>
          <Button variant="primary" className="rate">
            Женский
          </Button>
        </div>
        <input type="email" placeholder="email" />
        <div className="password">
          <input type="password" placeholder="Введите пароль" />
          <div className="edit">Изменить пароль</div>
        </div>
      </form>
      <div className="btn-actoins">
        <Button variant="primary" className="primary">
          Сохранить изменения
        </Button>
      </div>
    </div>
  );
}

export default AboutUser;
