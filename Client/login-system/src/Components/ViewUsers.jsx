import React, { useEffect, useState, useCallback, useMemo } from "react";
import style from "../styles/viewUsers.module.css";
import Header from "./Header";
import AdminPanelSidebar from "./AdminPanelSidebar";
const { useTable } = require("react-table");

export default function ViewUsers() {
  const [userData, setUserData] = useState([]);
  const [userToSearchFor, setUserToSearchFor] = useState("");
  const [filterByOption, setFilterByOption] = useState("");

  const handleFilterByOptionChange = (event) => {
    // Set state to the selected option
    setFilterByOption(event.target.value);

    // switch case to handle which option was selected
    switch (filterByOption) {
      case "username":
        break;
      case "password":
        break;
      case "id":
        break;
      default:
        break;
    }
  };

  // Fetch the top ten users data
  const fetchTopTenUserData = useCallback(async () => {
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
  }, []);

  // Fetch the top ten users data on mount
  useEffect(() => {
    fetchTopTenUserData();
  }, [fetchTopTenUserData]);

  const data = useMemo(() => userData || [], [userData]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Password",
        accessor: "password",
      },
    ],
    []
  );

  // Use react-table hooks
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <Header />
      <AdminPanelSidebar />

      <div className={style.filterOptionsContainer}>
        <label htmlFor="filter-options">Filter By: </label>
        <select
          name="filter-options"
          id="filter-options"
          className={style.handleFilterByOptionChange}
        >
          <option value="Filter By ID">Id</option>
          <option value="Filter By Username">Username</option>
          <option value="Filter By Password">Password</option>
        </select>

        <input
          type="text"
          placeholder="Search For User"
          value={userToSearchFor}
          onChange={(e) => setUserToSearchFor(e.target.value)}
        />
      </div>

      {/* Table container */}
      <div className={style.userDataTableContainer}>
        <table {...getTableProps()} className={style.userDataTable}>
          {/* Table head */}
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key, ...restHeaderProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderProps}>
                  {headerGroup.headers.map((column) => {
                    const { key: colKey, ...restColumnProps } =
                      column.getHeaderProps();
                    return (
                      <th key={colKey} {...restColumnProps}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>

          {/* Table body */}
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const { key: rowKey, ...restRowProps } = row.getRowProps();
              return (
                <tr key={rowKey} {...restRowProps} className={style.tableRow}>
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...restCellProps } =
                      cell.getCellProps();
                    return (
                      <td key={cellKey} {...restCellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
