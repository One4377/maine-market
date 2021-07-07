import "./Person.scss";

import Select from "../../Select/Select";
import Button from "../../Button/Button";

function Person() {
  const TYPE = [
    { value: "juristic_party", label: "Юридическое" },
    { value: "physical_person", label: "Физическое" },
  ];

  return (
    <div className="Person">
      <div className="title">Тип лица</div>
      <div className="description">Выбирети тип вашего лица</div>
      <Select
        className="sort"
        isSearchable={false}
        placeholder={"Тип лица"}
        isClearable={false}
        //   value={selectedMarket}
        //   onChange={setSelectedMarket}
        options={TYPE}
      />
      <div className="btn-total">
        <Button variant="primary" className="primary">
          Продолжить
        </Button>
      </div>
    </div>
  );
}

export default Person;
