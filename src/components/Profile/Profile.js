import "./Profile.scss";
import { Fragment } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import TabLinks from "../Tablinks";

function Profile() {
  const location = useLocation();

  console.log(location.pathname.includes("/physical-person"));

  return (
    <div className="Profile">
      <TabLinks>
        <NavLink to="person">Тип лица</NavLink>

        {location.pathname.includes("/physical-person") && (
          <Fragment>
            <NavLink to="about-user">Информация об учетной записи</NavLink>
            <NavLink to="passport">Паспортные данные</NavLink>
            <NavLink to="transaction">Транзакции</NavLink>
          </Fragment>
        )}

        {location.pathname.includes("/legal-person") && (
          <Fragment>
            <NavLink to="legal">Информация о юридическом лице</NavLink>
            <NavLink to="legal-contact">Контактактные данные</NavLink>
            <NavLink to="transaction">Транзакции</NavLink>
          </Fragment>
        )}
      </TabLinks>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
