import "./CardProductFull.scss";
import { useState } from "react";

import { Characteristic } from "..";
import { Raiting } from "../../Raiting";
import Button from "../../Button/Button";
import Modal from "../../Modal";

import MaineFerm from "./images/maine-ferm.png";

function CardProductFull({ buy }) {
  const [isOpenTrade, setIsOpenTrade] = useState(false);
  const toggleModal = () => setIsOpenTrade(!isOpenTrade);

  const [step, setStep] = useState(0);

  return (
    <div className="CardProductFull">
      <div className="top">
        <div className="image">
          <img src={MaineFerm} alt="images" />
          <div className="feature">
            <div className="info"> Характеристики</div>
            <Characteristic name={"Хэшрейт:"} parameter={"16 Th/s"} />
            <Characteristic name={"Алгоритм:"} parameter={"SHA-256"} />
            <Characteristic name={"Добыча:"} parameter={"14 780 ₽/мес"} />
            <Characteristic name={"Расходы:"} parameter={"3 600 ₽/мес"} />
            <Characteristic name={"Прибыль:"} parameter={"11 280 ₽/мес"} />
            <Characteristic name={"Окупаемость:"} parameter={"6 Мес"} />
            <Characteristic name={"Доходность:"} parameter={"200 %"} />
          </div>
        </div>
        <div className="detail">
          <div className="title">
            <div className="name">
              Antminer S9j 14.5TH/s 16nm ASIC Incl. APW3 ++ P/S
            </div>
            <div className="sub-title">s9j-16-APW3</div>
          </div>
          <div className="about">
            <div className="column">
              <div className="money">
                <div className="price">$610.00</div>
                <span>*цена ниже рыночной</span>
              </div>
              <div className="raiting">
                <span>seller: AntMiner</span>
                <Raiting />
              </div>
            </div>
            {!buy && (
              <div className="column">
                <div className="btn-wrapp">
                  <Button variant="primary" className="primary">
                    Купить
                  </Button>
                  <Button variant="rate" className="rate" onClick={toggleModal}>
                    Предложить свою цену
                  </Button>
                </div>
              </div>
            )}
          </div>
          <hr />
          <div className="parameter">
            <div className="argument">Параметры товара:</div>

            <Characteristic name={"Налет:"} parameter={"1 235 ч"} />
            <Characteristic
              name={"Дата производства:"}
              parameter={"12.05.2018"}
            />
          </div>

          <div className="description">
            <div className="specification">Описание майнера</div>
            <p>
              С другой стороны, курс на социально-ориентированный национальный
              проект прекрасно подходит для реализации как самодостаточных, так
              и внешне зависимых концептуальных решений. Прежде всего,
              синтетическое тестирование требует определения и уточнения новых
              предложений. Каждый из нас понимает очевидную вещь: выбранный нами
              инновационный путь способствует подготовке и реализации
              экспериментов, поражающих по своей масштабности и грандиозности.
              Значимость этих проблем настолько очевидна, что выбранный нами
              инновационный путь способствует повышению качества своевременного
              выполнения сверхзадачи. Стремящиеся вытеснить традиционное
              производство, нанотехнологии представляют собой не что иное, как
              квинтэссенцию победы маркетинга над разумом и должны быть в равной
              степени предоставлены сами себе. Но акционеры крупнейших компаний
              представляют собой не что иное, как квинтэссенцию победы
              маркетинга над разумом и должны быть в равной степени
              предоставлены сами себе!
            </p>
          </div>
        </div>
      </div>
      {!buy && (
        <div className="btn-total">
          <Button variant="rate" className="rate">
            Предложить свою цену
          </Button>
          <Button variant="primary" className="primary">
            Купить
          </Button>
        </div>
      )}

      <Modal
        isOpen={isOpenTrade}
        onClose={toggleModal}
        title="Торговаться"
      >
        {step === 0 && (
          <div className="Trade">
            <div className="you-price">Предложить свою цену</div>
            <div className="price">Текущая цена 24 888,80 ₽</div>
            <input className="total" placeholder="₽" />
            <textarea placeholder="Вы можете оставить комментарий" />
            <Button variant="rate" onClick={() => setStep(1)}>
              Предложить свою цену
            </Button>
          </div>
        )}

        {step === 1 && (
          <div className="Accept-trade">
            <div className="price">Текущая цена 24 888,80 ₽</div>

            <div className="сlient">
              <div className="you-price">23 456,80 ₽</div>
              <div className="info">Вы предложили цену</div>
            </div>

            <div className="seller">
              <div className="you-price">23 456,80 ₽</div>
              <div className="info">Вы предложили цену</div>

              <div className="btn-actions">
                <Button variant="rate">Отклонить</Button>
                <Button variant="primary" onClick={() => setStep(2)}>
                  Принять
                </Button>
              </div>

              <input className="total" placeholder="₽" />
              <div className="different-price">
                Вы можете предложить другую цену
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="Approve-trade">
            <div className="price">Текущая цена 24 888,80 ₽</div>

            <div className="сlient">
              <div className="you-price">23 456,80 ₽</div>
              <div className="info">Вы предложили цену</div>
            </div>

            <div className="seller">
              <div className="you-price">23 456,80 ₽</div>
              <div className="info">Вы предложили цену</div>

              <Button
                variant="primary"
                onClick={() => {
                  setStep(0);
                  toggleModal();
                }}
              >
                Принять
              </Button>

              <div className="different-price">*цена действует 24 часа</div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CardProductFull;
