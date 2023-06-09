import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return (
    <div>
      <Container>
        <NavLink to="" style={{ textDecoration: "none" }}>
          <p>Home</p>
        </NavLink>
        <NavLink to="about" style={{ textDecoration: "none" }}>
          <p>About</p>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h3>Back to home page</h3>
        </NavLink>
      </Container>
    </div>
  );
};

export default SideBar;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #123456;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  p {
    margin: 0;
    text-decoration: none;
    color: #fff;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  h3 {
    margin: 0;
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    font-weiight: 200;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
