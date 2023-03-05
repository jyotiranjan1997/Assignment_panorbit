import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../Components/Profile/Profile";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import Styles from "./HomePage.module.css";

export default function HomePage() {
  const [data, setData] = useState({});
  const [page, setPage] = useState("Profile");
  const location = useLocation();
  

  useEffect(() => {
    setData(location.state)
  },[])
  return (
    <div>
      <div className={Styles.home}>
       
          <Profile setPage={setPage} />
       
        <div className={Styles.RightSide}>
          <ProfileDetails data={data} company={data.company} page={page} />
       </div>
          
        
      </div>
    </div>
  );
}
