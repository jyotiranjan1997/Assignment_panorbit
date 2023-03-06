
import { useState } from "react";
import Styles from "./ChatBox.module.css";

export default function ChatBox({ users }) {
    const [page, SetPage] = useState(false);

  return (
    <div className={Styles.box}>
      <div className={Styles.ChatBox} onClick={()=>SetPage(!page)} >
        {" "}
        Chat Box
        <h3>{page ? "∨" : "∧"}</h3>
      </div>
      <div className={page ? Styles.box4 : Styles.box3}>
        {users.map((el) => (
          <div key={el.id} className={Styles.box2}>
            {" "}
            <img src={el.profilepicture} /> <p>{el.name}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
