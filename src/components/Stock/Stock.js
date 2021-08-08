import "./Stock.scss";

function Stock() {
  return (
    <div className="Stock">
      <div className="information">
        <div className="description">Информация о складе</div>
        <div className="address">
          Склад на Звенигородском шоссе <br /> г. Москва, Звенигородское шоссе,
          д. 28, стр. 16, 123317
          <br />
          Режим работы:
          <br /> Ресепшн: 08:30 - 20:30
          <br /> Доступ на склад: 08:30 - 20:30
          <br /> Телефон: +7 (495) 126-18-23
        </div>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16955.60654936433!2d37.61399240668207!3d55.75016538441334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle!5e0!3m2!1sru!2sby!4v1628367233212!5m2!1sru!2sby"
        width="100%"
        height="350"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Stock;
