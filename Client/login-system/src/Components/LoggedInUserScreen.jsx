import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { verifyAdmin } from "../auth/auth";

// import style from "../styles/createUser.module.css";
// import globalStyles from "../styles/globalStyles.module.css";
import AdminPanelSidebar from "./AdminPanelSidebar";

export default function LoggedInUserScreen() {
  // create states for the username and password
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = verifyAdmin();
    if (!isAdmin) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header />
      <AdminPanelSidebar />
    </div>
  );
}
