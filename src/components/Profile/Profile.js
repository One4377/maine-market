import "./Profile.scss";

import { NavLink, Outlet } from "react-router-dom";
import TabLinks from "../Tablinks";

function Profile() {
  return (
    <div className="Profile">
      <TabLinks>
        <NavLink to="person">Тип лица</NavLink>
        <NavLink to="about-user">Информация об учетной записи</NavLink>
        <NavLink to="passport">Паспортные данные</NavLink>
        {/* <NavLink to="#">Транзакции</NavLink> */}
      </TabLinks>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
