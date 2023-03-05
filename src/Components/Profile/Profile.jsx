import { useState } from "react";
import Styles from "./Profile.module.css";

export default function Profile({setPage}) {
  
  return (
    <div className={Styles.Sidebar}>
      <h4 onClick={() => setPage("Profile")}>Profile</h4>
      <hr />
      <h4 onClick={() => setPage("Posts")}>Posts</h4>
      <hr />
      <h4 onClick={() => setPage("Gallery")}>Gallery</h4>
      <hr />
      <h4 onClick={() => setPage("ToDo")}>ToDo</h4>
    </div>
  );
}
