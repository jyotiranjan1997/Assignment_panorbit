import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../Components/User/User";
import { GET_USERS } from "../../Redux/Auth/AuthAction";
import Styles from "./LandingPage.module.css";

export default function LandingPage() {
  const [data, setData] = useState([]);
  const { users, loading, error } = useSelector((store) => store.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_USERS());
  }, []);

  useEffect(() => {
    setData(users);
  }, [loading]);

  return (
    <div className={Styles.Landing}>
      <div className={Styles.Container}>
        <div>
          <h4>Select an Account</h4>
        </div>
        <div>
          {data.map((el) => (
            <div key={el.id}>
              <User
                {...el}
              />
              <hr className={Styles.line} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
