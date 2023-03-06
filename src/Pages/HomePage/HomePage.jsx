import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ChatBox from "../../Components/ChatBox/ChatBox";
import Profile from "../../Components/Profile/Profile";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import { GET_USERS } from "../../Redux/Auth/AuthAction";
import Styles from "./HomePage.module.css";

export default function HomePage() {
  const [data, setData] = useState({});
  const [Nextusers, setNextusers] = useState([]);
  const [page, setPage] = useState("Profile");
  const location = useLocation();
  const { users } = useSelector((store) => store.UserReducer);
  const dispatch = useDispatch();

  const Get_next_users = () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === location.state.id && i !== users.length - 1) {
        if (users[i + 1] === undefined) {
          setNextusers([users[i - 1]]);
        } else if (users[i - 1] === undefined) {
          setNextusers([users[i + 1]],users[i + 2]);
        } else {
          setNextusers([users[i - 1], users[i + 1]]);
        }
      }
    }
  };

  useEffect(() => {
    dispatch(GET_USERS());
  }, [location]);
  
  useEffect(() => {
    Get_next_users();
  }, [users, location]);

  useEffect(() => {
    setData(location.state);
  }, [location]);
  return (
    <div>
      <div className={Styles.home}>
        <Profile setPage={setPage} />

        <div className={Styles.RightSide}>
          <ProfileDetails
            data={data}
            company={data.company}
            Nextusers={Nextusers}
            page={page}
          />
        </div>
      </div>
      <div>
        <ChatBox users={ users} />
      </div>
    </div>
  );
}
