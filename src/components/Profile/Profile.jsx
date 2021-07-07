import "./Profile.scss";

import MainLayouts from "../Layouts/Main";
import { Person } from "./";

function Profile() {
  return (
    <MainLayouts>
      <div className="Profile">
        <Person />
      </div>
    </MainLayouts>
  );
}

export default Profile;
