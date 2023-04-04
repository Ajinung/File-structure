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
  width: calc(100% - 200px);
  height: 100%;
  background-color: orangered;
`;
