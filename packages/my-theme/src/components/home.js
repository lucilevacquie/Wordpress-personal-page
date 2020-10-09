import React from "react";
import { connect, styled, keyframes } from "frontity";
import Contact from "./contact";

const colors = {
  darkGreen: "#1D3D38",
  darkRed: "#883736",
  green: "#95AEA8",
  red: "#B83E4B",
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
`;

const Column1 = styled.div`
  background-color: ${colors.darkGreen};
`;

const Greetings = styled.div`
  position: relative;
  top: 5rem;
  left: 3rem;
  font-size: 5rem;
  color: white;
  p {
    font-size: 3rem;
    margin-top: 2rem;
  }
`;

const Column2 = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`;

const Box = styled.a`
  display: flex;
  text-decoration: none;
  color: white;
  background-color: ${(props) => props.color};
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.3);
  :hover {
    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h1`
  position: relative;
  top: 4rem;
  left: 3rem;
  font-size: 5rem;
`;

const UnderlineAnim = keyframes`
  from{left: -600px;}
  to{left: 2rem;}
`;

const Underline = styled.div`
  width: 500px;
  height: 1rem;
  background-color: rgb(184, 62, 75);
  position: relative;
  top: 7rem;
  left: 2rem;
  animation-name: ${UnderlineAnim};
  animation-duration: 3s;
`;

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <Container>
      <Column1>
        <Greetings
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        ></Greetings>
        <Underline />
        <Contact />
      </Column1>
      <Column2>
        <Box href="/about-me" color={colors.red}>
          <Title>About me</Title>
        </Box>
        <Box href="/resume" color={colors.green}>
          <Title>Resume</Title>
        </Box>
      </Column2>
    </Container>
  );
};

export default connect(Home);
