import React from "react";
import { SideBar } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* <Container> */}
      <SideBar />
      <Outlet />
      {/* </Container> */}
    </div>
  );
};

export default DashboardLayout;
