import "./ApplicationPage.scss";
import { ProductTable } from "../ProductTable";

function ApplicationPage() {
  return (
    <div className="ApplicationPage">
      <div className="title">Лист заявок</div>
      
      <div className="content">
        <div className="description">Предложение</div>
        <ProductTable />
      </div>

      <div className="content">
        <div className="description">Спрос</div>
        <ProductTable />
      </div>
    </div>
  );
}

export default ApplicationPage;
