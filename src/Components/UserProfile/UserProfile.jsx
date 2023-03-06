import { useEffect } from "react";
import Styles from "./UserProfile.module.css";

export default function UserProfile({ data, company }) {
  useEffect(() => {}, []);

  return (
    <div>
      <div className={Styles.profile}>
        <div>
          <img src={data.profilepicture} alt="profile" />
          <h2>{data.name}</h2>
        </div>

        <div>
          <div className={Styles.Text}>
            <p>username :</p>
            <p>{data.username}</p>
          </div>
          <div className={Styles.Text}>
            <p>email :</p>
            <p>{data.email}</p>
          </div>
          <div className={Styles.Text}>
            <p>Phone :</p>
            <p>{data.phone}</p>
          </div>
          <div className={Styles.Text}>
            <p>website :</p>
            <p>{data.website}</p>
          </div>
        </div>
        <hr />
        <div className={Styles.company}>
          <h2>Company</h2>
          {company ? (
            <div>
              <div className={Styles.Text}>
                <p>Name :</p>
                <p>{company.name}</p>
              </div>
              <div className={Styles.Text}>
                <p>catchPhrase :</p>
                <p>{company.catchPhrase}</p>
              </div>
              <div className={Styles.Text}>
                <p>bs :</p>
                <p>{company.bs}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
