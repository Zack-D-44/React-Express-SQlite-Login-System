import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function AdminPanelSidebar() {
  return (
    <Sidebar>
      <Menu>
        <MenuItem component={<Link to="/admin/create-user" />}>
          {" "}
          Create User{" "}
        </MenuItem>
        <MenuItem component={<Link to="/admin/view-users" />}>
          {" "}
          View Users{" "}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
