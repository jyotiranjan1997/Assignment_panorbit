import { useEffect, useState } from "react";
import Styles from "./UserProfile.module.css";

export default function UserProfile({ data,company }) {


  useEffect(() => {
    
  }, []);

  console.log(company);
  return (
    <div>
      <div className={Styles.profile}>
        <div>
          <img src={data.profilepicture} alt="profile" />
          <h2>{data.name}</h2>
        </div>

        <div>
          <ul>
            <li>
              Username: <span>{data.username}</span>
            </li>
            <li>
              Email :<span>{data.email}</span>
            </li>
            <li>
              Phone: <span> {data.phone}</span>
            </li>
            <li>
              Website: <span>{data.website}</span>
            </li>
          </ul>
        </div>
        <hr />
        <div className={Styles.company} >
          <h2>Company</h2>
        {company ?  <div>
            <ul>
              <li>
                Name :<span>{company.name}</span>
              </li>
              <li>
                catchPhrase:<span> {company.catchPhrase}</span>{" "}
              </li>
              <li>
                bs: <span> {company.bs} </span>{" "}
              </li>
            </ul>
          </div> :""}
        </div>
      </div>
    </div>
  );
}
