import React from "react";
import styled from "styled-components";

const DashboardHome = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default DashboardHome;

const Container = styled.div`
  width: calc(100vw - 250px);
  height: 100vh;
  background-color: orangered;
`;
