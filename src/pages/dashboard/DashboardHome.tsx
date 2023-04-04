import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { fetchDictionary } from "../../utils/api";

const DashboardHome = () => {
  const { data } = useQuery({
    queryKey: ["dictionary"],
    queryFn: fetchDictionary,
  });

  return (
    <div>
      <Container>
        <p>word::</p>

        {data.list?.map((props: any) => (
          <p>{props.definition}</p>
        ))}
      </Container>
    </div>
  );
};

export default DashboardHome;

const Container = styled.div`
  width: calc(100vw - 250px);
  height: 100vh;
  background-color: orangered;
  display: flex;
  justify-content: center;
  align-items: center;

  /* p {
    margin: 0;
  } */
`;
