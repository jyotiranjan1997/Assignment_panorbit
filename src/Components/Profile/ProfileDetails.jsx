import { Link } from "react-router-dom";
import Address from "../UserProfile/Address";
import UserProfile from "../UserProfile/UserProfile";
import ComingSoon from "./ComingSoon";
import Styles from "./Profile.module.css";

export default function ProfileDetails({ data,company, page }) {
  return (
    <div className={Styles.Rightside}>
      <div className={Styles.UpperBar}>
        <h3>{page}</h3>
        <div className={Styles.Img}>
          <img src={data.profilepicture} alt="profile_pic" />
          <p>{data.name}</p>
        </div>
      </div>
      <hr />
      <div className={Styles.user}>
        {page === "Profile" ? (
          <>
            <UserProfile data={data} company={company} />
            <hr />
            <div>
              <Address {...data.address} />
            </div>
          </>
        ) : (
          <ComingSoon />
        )}
      </div>
    </div>
  );
}
