import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import LandingPage from "../Pages/LandingPage/LandingPage";

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<HomePage />} />
    </Routes>
  );
}
