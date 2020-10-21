import React from "react";
import { connect, styled, keyframes } from "frontity";
import "../style.css";
import Contact from "./contact";
import SmallContact from "./smallContact";

const colors = {
  darkGreen: "#1D3D38",
  darkRed: "#883736",
  green: "#95AEA8",
  red: "#B83E4B",
};

const Container = styled.div`
  height: 100vh;
  @media (min-width: 768px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: 80% 20%;
  }
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 85% 15%;
  }
`;

const BigDeviceMenu = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Column1 = styled.div`
  background-color: ${colors.darkGreen};
`;

const Greetings = styled.div`
  position: relative;
  padding-top: 3rem;
  padding-left: 3rem;
  font-size: 4rem;
  color: white;
  p {
    font-size: 3rem;
    padding-top: 2rem;
  }
  @media (max-width: 1330px) {
    font-size: 3.5rem;
    padding-top: 3rem;
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1170px) {
    font-size: 3.5rem;
    padding-right: 1.5rem;
  }
  @media (max-width: 992px) {
    font-size: 3rem;
    padding-top: 4rem;
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-top: 2rem;
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
    padding-top: 2rem;
    padding-left: 2.5rem;
    p {
      padding-top: 1rem;
      font-size: 1.5rem;
    }
  }
`;

const MediumDeviceMenu = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

const SmallDeviceMenu = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: grid;
    grid-template-rows: 40% 30% 30%;
  }
`;

const Column2 = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Box = styled.a`
  text-decoration: none;
  color: white;
  background-color: ${(props) => props.color};
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.3);
  :hover {
    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h1`
  padding-top: 3rem;
  padding-left: 3rem;
  font-size: 5rem;
  @media (max-width: 1170px) {
    font-size: 4rem;
    padding-top: 3rem;
  }
  @media (max-width: 992px) {
    font-size: 3rem;
    padding-top: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-top: 2rem;
  }
  @media (max-width: 576px) {
    padding-top: 1.5rem;
    padding-left: 2.5rem;
    font-size: 2rem;
  }
`;

const Blabla = styled.div`
  font-size: 1.5rem;
  padding-left: 3rem;
  padding-top: 3rem;
  padding-right: 1rem;
  @media (max-width: 1170px) {
    font-size: 1.5rem;
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-top: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 1rem;
    padding-left: 2.5rem;
  }
`;

const UnderlineAnim = keyframes`
  from{left: -600px;}
  to{left: 0;}
`;

const Underline = styled.div`
  width: 600px;
  height: 1rem;
  background-color: rgb(184, 62, 75);
  position: relative;
  margin-top: 3.5rem;
  margin-left: 3rem;
  animation-name: ${UnderlineAnim};
  animation-duration: 2s;
  @media (max-width: 1330px) {
    width: 520px;
    margin-top: 3rem;
  }
  @media (max-width: 1170px) {
    width: 430px;
    margin-top: 3rem;
  }
  @media (max-width: 992px) {
    width: 300px;
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    width: 220px;
    margin-top: 2rem;
  }
  @media (max-width: 576px) {
    width: 270px;
    height: 0.7rem;
    margin-top: 1rem;
    margin-left: 2.5rem;
  }
`;

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <Container>
      <BigDeviceMenu>
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
            <Blabla>Want to know my journey and what I am capable of?</Blabla>
          </Box>
          <Box href="/resume" color={colors.green}>
            <Title>Resume</Title>
            <Blabla>
              An overview of my main professional experiences and knowledge.
            </Blabla>
          </Box>
        </Column2>
      </BigDeviceMenu>

      <MediumDeviceMenu>
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
            <Blabla>Want to know my journey and what I am capable of?</Blabla>
          </Box>
          <Box href="/resume" color={colors.green}>
            <Title>Resume</Title>
            <Blabla>
              An overview of my main professional experiences and knowledge.
            </Blabla>
          </Box>
        </Column2>
      </MediumDeviceMenu>

      <SmallDeviceMenu>
        <Column1>
          <Greetings
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          ></Greetings>
          <Underline />
        </Column1>
        <Box href="/about-me" color={colors.red}>
          <Title>About me</Title>
          <Blabla>Want to know my journey and what I am capable of?</Blabla>
        </Box>
        <Box href="/resume" color={colors.green}>
          <Title>Resume</Title>
          <Blabla>
            An overview of my main professional experiences and knowledge.
          </Blabla>
        </Box>
      </SmallDeviceMenu>
      <SmallContact />
    </Container>
  );
};

export default connect(Home);
