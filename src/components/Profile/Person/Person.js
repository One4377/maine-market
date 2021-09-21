import "./Person.scss";
import { useNavigate } from "react-router";
import { useState } from "react";
import Select from "../../Select/Select";
import Button from "../../Button/Button";

function Person() {
  const TYPE = [
    { value: "legal-person", label: "Юридическое" },
    { value: "physical-person", label: "Физическое" },
  ];

  const [selectedType, setSelectedType] = useState();
  const navigate = useNavigate();

  const handdleOnChange = () => {
    navigate(`/${selectedType.value}`);
  };

  return (
    <div className="Person">
      <div className="title">Тип лица</div>
      <div className="description">Выбирети тип вашего лица</div>
      <Select
        className="sort"
        isSearchable={false}
        placeholder={"Тип лица"}
        isClearable={false}
        value={selectedType}
        onChange={setSelectedType}
        options={TYPE}
      />
      <div className="btn-total">
        <Button variant="primary" className="primary" onClick={handdleOnChange}>
          Продолжить
        </Button>
      </div>
    </div>
  );
}

export default Person;
