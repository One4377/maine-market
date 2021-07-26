import "./LegalContact.scss";

import Button from "../../Button/Button";

function LegalContact() {
  return (
    <div className="LegalContact">
      <div className="title">Информация о юридическом лице</div>
      <div className="description">
        Заполните данные о вашем юридическом лице для дальнейшего использования
      </div>
      <div className="column">
        <input type="text" placeholder="Юридический адрес" />
        <input type="text" placeholder="Фактический адрес" />
        <input type="number" placeholder="Телефон" />
        <input type="email" placeholder="e-mail" />
        <input type="text" placeholder="Лицо, представляющее организацию" />
      </div>
      <div className="btn-actoins">
        <Button variant="primary" className="primary">
          Продолжить
        </Button>
      </div>
    </div>
  );
}

export default LegalContact;
