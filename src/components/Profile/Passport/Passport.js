import "./Passport.scss";

import FileUpload from "../../FileUpload/FileUpload";
import Button from "../../Button/Button";

function Passport() {
  return (
    <div className="Passport">
      <div className="title">Паспортные данные</div>
      <div className="description">
        Для того, чтобы совершать покупки на площадке, необходимо верицицировать
        ваши паспортные данные
      </div>
      <div className="columns">
        <div className="column">
          <input type="text" placeholder="Дата рождения" />
          <input type="text" placeholder="Место Рождения" />
          <div className="wrapp">
            <input className="series" type="text" placeholder="Серия" />
            <input type="number" placeholder="Номер" />
          </div>
          <input type="text" placeholder="Кем выдан" />
          <div className="wrapp">
            <input className="date" type="text" placeholder="Дата выдачи" />
            <input type="text" placeholder="Код подразделения" />
          </div>
        </div>
        <div className="column">
          <div className="field">
            <FileUpload />
            <label className="label">
              Фотография должна быть без блик и посторонних объектов
            </label>
          </div>
          <div className="field">
            <FileUpload />
            <label className="label">
              На фотографии должно быть отчетливо видно ваше лицо
            </label>
          </div>
        </div>
      </div>
      <div className="btn-actoins">
        <Button variant="primary" className="primary">
          Сохранить изменения
        </Button>
      </div>
    </div>
  );
}

export default Passport;
