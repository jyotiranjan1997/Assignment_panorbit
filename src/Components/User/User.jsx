import { useNavigate } from "react-router-dom";
import Styles from "./User.module.css";
import React, { useEffect, useState } from "react";

 function User(el) {
   const [page, setPage] = useState(false);
    const Navigate = useNavigate();

    const handlenavigate = (e) => {
        e.preventDefault();
      Navigate("/profile", { state: el });
      setPage(!page)
   }
   
   useEffect(() => {
     
   },[page])

  return (
    
       <div className={Styles.Profile} onClick={handlenavigate} >
        <img src={el.profilepicture} alt="profile_pic" />
        <h4>{el.name}</h4>
      </div>
    
     
  );
}


export default React.memo(User)