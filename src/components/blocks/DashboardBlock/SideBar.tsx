import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default SideBar;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #123456;
  color: #fff;
`;
