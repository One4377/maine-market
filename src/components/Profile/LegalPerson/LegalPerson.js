import "./LegalPerson.scss";

import Button from "../../Button/Button";

function LegalPerson() {
  return (
    <div className="LegalPerson">
      <div className="title">Информация о юридическом лице</div>
      <div className="description">
        Заполните данные о вашем юридическом лице для дальнейшего использования
      </div>
      <div className="column">
        <input type="text" placeholder="ОГРН" />

        <div className="wrapp">
          <input className="type" type="text" placeholder="ИНН" />
          <input type="number" placeholder="КПП" />
        </div>
        <input type="text" placeholder="Регистрационный номер в ПФР" />
        <input type="text" placeholder="Полное наименование " />
        <input type="text" placeholder="Сокращенное наименование " />
        <div className="wrapp">
          <input className="type" type="text" placeholder="ОКВЭД" />
          <input type="text" placeholder="ОКАТО" />
        </div>
      </div>
      <div className="btn-actoins">
        <Button variant="primary" className="primary">
          Продолжить
        </Button>
      </div>
    </div>
  );
}

export default LegalPerson;
