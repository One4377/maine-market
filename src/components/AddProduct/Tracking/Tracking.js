import "./Tracking.scss";

import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import { Step } from "../";

function Tracking() {
  return (
    <div className="Tracking">
      <div className="wrapp">
        <div className="title">Отслеживание</div>
        <div className="status">Ожидает приемки</div>
      </div>
      <div className="description">
        Вы можете отслеживать состояние вашего заказа
      </div>
      <Step />

      <div className="info">
        Имеется спорная точка зрения, гласящая примерно следующее: ключевые
        особенности структуры проекта набирают популярность среди определенных
        слоев населения, а значит, должны быть преданы социально-демократической
        анафеме. Банальные, но неопровержимые выводы, а также ключевые
        особенности структуры проекта призывают нас к новым свершениям, которые,
        в свою очередь, должны быть превращены в посмешище, хотя само их
        существование приносит несомненную пользу обществу. Ясность нашей
        позиции очевидна: существующая теория позволяет оценить значение анализа
        существующих паттернов поведения. Разнообразный и богатый опыт говорит
        нам, что граница обучения кадров способствует повышению качества
        кластеризации усилий. Прежде всего, повышение уровня гражданского
        сознания позволяет оценить значение системы массового участия.
        Предварительные выводы неутешительны: семантический разбор внешних
        противодействий влечет за собой процесс внедрения и.
      </div>

      <div className="add">
        <Link to="/add-product/category-goods">
          <Button variant="primary">Добавить ещё товар</Button>
        </Link>
      </div>

      <div className="btn-actoins">
        <Link to="/add-product/confirmation">
          <Button variant="blue ">Назад</Button>
        </Link>
        <Link to="/add-product/ready-product">
          <Button variant="primary" className="primary">
            Далее
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Tracking;
