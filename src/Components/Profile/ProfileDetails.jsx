import { useState, useEffect, useRef } from "react";
import LogoutCard from "../LogoutCard/LogoutCard";
import Address from "../UserProfile/Address";
import UserProfile from "../UserProfile/UserProfile";
import ComingSoon from "./ComingSoon";
import Styles from "./Profile.module.css";

export default function ProfileDetails({ data, company, page, Nextusers }) {
  const [visible, setVisible] = useState(false);

  const logoutref = useRef();
  useEffect(() => {
    const handle = (e) => {
      if (!logoutref.current.contains(e.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handle);
  });
  return (
    <div className={Styles.Rightside}>
      <div className={Styles.UpperBar}>
        <h3>{page}</h3>
        <div className={Styles.Img} ref={logoutref}>
          <img
            src={data.profilepicture}
            alt="profile_pic"
            onClick={() => setVisible(!visible)}
          />
          <p onClick={() => setVisible(!visible)}> {data.name}</p>
        </div>
      </div>
      <div className={visible ? Styles.logout2 : Styles.logout} ref={logoutref}>
        <LogoutCard {...data} Nextusers={Nextusers} />
      </div>
      <hr />

      <div>
        {page === "Profile" ? (
          <div className={Styles.user}>
            <UserProfile data={data} company={company} />
            <hr className={Styles.hr} />
            <div>
              <Address {...data.address} />
            </div>
          </div>
        ) : (
          <ComingSoon />
        )}
      </div>
    </div>
  );
}
