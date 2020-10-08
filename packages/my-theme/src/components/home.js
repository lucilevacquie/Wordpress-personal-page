import React from "react";
import { connect, styled } from "frontity";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
`;

const Column1 = styled.div`
  background-color: blue;
`;

const Column2 = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`;

const Box1 = styled.a`
  text-decoration: none;
  color: white;
  background-color: purple;
`;
const Box2 = styled.a`
  text-decoration: none;
  color: white;
  background-color: pink;
`;

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  return (
    <Container>
      <Column1></Column1>
      <Column2>
        <Box1 href="/about-me"> About me</Box1>
        <Box2 href="/resume"> Resume</Box2>
      </Column2>
    </Container>
  );
};

export default connect(Home);
