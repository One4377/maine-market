import "./Running.scss";
import { CardOrder } from "../CardOrder";
import { Accordion } from "../../Accordion";
import { RowOrder } from "../RowOrder";

function Running() {
  return (
    <div className="Running">
      <div className="title">Завершенные покупки</div>
      <div className="description">
        Здесь вы можете изменить свои личные данные. Не используйте недопустимые
        имена или изображения
      </div>
      <CardOrder>
        <Accordion
          title="Заказ № 123"
          date="23.06.2021"
          detail="Детали заказа"
          save="Сохранить чек"
          executed
          location="2715 Ash Dr. San Jose, South Dakota 83475"
          amount="234 580,00₽"
        >
          <RowOrder
            name="Antminer S9j 14.5TH/s 16nm ASIC Incl. APW3 ++ P/S"
            price="234 580,00₽"
            currency="234 580,00₽"
            total="234 580,00₽"
          />
          <RowOrder
            name="Antminer S9j 14.5TH/s 16nm ASIC Incl. APW3 ++ P/S"
            price="234 580,00₽"
            currency="234 580,00₽"
            total="234 580,00₽"
          />
          <RowOrder
            name="Antminer S9j 14.5TH/s 16nm ASIC Incl. APW3 ++ P/S"
            price="234 580,00₽"
            currency="234 580,00₽"
            total="234 580,00₽"
          />
        </Accordion>

        <Accordion
          title="Заказ № 123"
          date="23.06.2021"
          detail="Детали заказа"
          save="Сохранить чек"
          executed
          location="2715 Ash Dr. San Jose, South Dakota 83475"
          amount="234 580,00₽"
        >
          <RowOrder
            name="Antminer S9j 14.5TH/s 16nm ASIC Incl. APW3 ++ P/S"
            price="234 580,00₽"
            currency="234 580,00₽"
            total="234 580,00₽"
          />
          <RowOrder
            name="Antminer S9j 14.5TH/s 16nm ASIC Incl. APW3 ++ P/S"
            price="234 580,00₽"
            currency="234 580,00₽"
            total="234 580,00₽"
          />
        </Accordion>

        <Accordion
          title="Заказ № 123"
          date="23.06.2021"
          detail="Детали заказа"
          save="Сохранить чек"
          executed
          location="2715 Ash Dr. San Jose, South Dakota 83475"
          amount="234 580,00₽"
        >
          <RowOrder
            name="Antminer S9j 14.5TH/s 16nm ASIC Incl. APW3 ++ P/S"
            price="234 580,00₽"
            currency="234 580,00₽"
            total="234 580,00₽"
          />
        </Accordion>
      </CardOrder>
    </div>
  );
}

export default Running;
