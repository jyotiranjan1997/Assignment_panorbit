import { Link, useNavigate } from "react-router-dom";
import Styles from "./User.module.css";

export default function User(el) {

    const Navigate = useNavigate();

    const handlenavigate = (e) => {
        e.preventDefault();
        Navigate("/profile",{state:el})
}

  return (
      <div className={Styles.Profile} onClick={handlenavigate} >
        <img src={el.profilepicture} alt="profile_pic" />
        <h4>{el.name}</h4>
      </div>
  );
}
