import React, { useEffect, useState } from "react";
import Header from "./Header";
import AdminPanelSidebar from "./AdminPanelSidebar";

export default function ViewUsers() {
  const [userData, setUserData] = useState(null);

  //fetch the top ten users data
  const fetchTopTenUserData = async () => {
    try {
      const url = "http://localhost:4023/admin/viewUsers/viewTopTen";

      const response = await fetch(url);

      if (response.ok) {
        const json = await response.json();
        setUserData(json);
      } else {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //fetch the top ten users data
  useEffect(() => {
    fetchTopTenUserData();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
      <Header />
      <AdminPanelSidebar />

      <h1>View Users</h1>
    </div>
  );
}
