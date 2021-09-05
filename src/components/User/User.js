import "./User.scss";
import AvatarIcon from "./images/avatar.png";

function User() {
  return (
    <div className="User">
      <img src={AvatarIcon} alt="img" />
      <div className="name">Savannah Nguyen</div>
    </div>
  );
}

export default User;
