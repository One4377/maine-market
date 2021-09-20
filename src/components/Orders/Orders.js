import "./Orders.scss";
import { NavLink, Outlet } from "react-router-dom";
import TabLinks from "../Tablinks";

function Orders() {
  return (
    <div className="Orders">
      <TabLinks>
        <NavLink to="completed">Завершены</NavLink>
        <NavLink to="running">Выполняются</NavLink>
        <NavLink to="cancelled">Отменены</NavLink>
      </TabLinks>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;
