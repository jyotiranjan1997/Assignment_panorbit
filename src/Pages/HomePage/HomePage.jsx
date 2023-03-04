import React from "react";
import { useLocation } from "react-router-dom";
import Styles from "./HomePage.module.css";

export default function HomePage() {

  const location = useLocation();
  console.log(location)
  return <div>Home Page...</div>;
}
