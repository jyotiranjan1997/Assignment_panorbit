import User from "../User/User";
import Styles from "./LogoutCard.module.css"
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function LogoutCard({ profilepicture, name, email, Nextusers }) {
  
  return (
    <div className={Styles.Maindiv} >
      <div className={Styles.Card} >
        <img src={profilepicture} alt="pic" />
        <h4>{ name}</h4>
        <h6>{ email}</h6>
        <div>
          {Nextusers.map((el)=> <div key={el.id}>  <User {...el} /> <hr/> </div> )}
        </div>
        <Link to="/" > <button className={Styles.Logout} >Sign out</button> </Link>
       
      </div>
    </div>
  );
}

export default React.memo(LogoutCard)
