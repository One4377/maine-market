import "./Profile.scss";

import { NavLink, Outlet } from "react-router-dom";

import MainLayout from "../Layouts/Main";
import TabLinks from "../Tablinks";

function Profile() {
  return (
    <div className="Profile">
      <TabLinks>
        <NavLink to="person">Общие</NavLink>
        <NavLink to="test">Клиентская анкета</NavLink>
        <NavLink to="#">Документы</NavLink>
      </TabLinks>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
