import React from "react";
import { SideBar } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const DashboardLayout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
