import React from "react";
import { connect, styled } from "frontity";
import "../style.css";
import Header from "./header";
import SmallProfilePicture from "../assets/small-profile-picture.jpg";
import Portfolio from "./portfolio";
import SmallContact from "./smallContact";

const Content = styled.div`
  display: grid;
  grid-template-rows: 30% 70%;
`;

const Row1 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  top: 4rem;
  align-items: center;
  background-color: #95aea8;
  @media (max-width: 1400px) {
    grid-template-columns: 60% 40%;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 70% 30%;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const Text = styled.div`
  text-align: justify;
  padding: 1rem 3rem;
  line-height: 1.7rem;
  font-size: 1.2rem;
  @media (max-width: 1200px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 992px) {
    line-height: 1.5rem;
    padding: 1rem;
    font-size: 1.1rem;
  }
  @media (max-width: 576px) {
    line-height: 1.5rem;
    padding: 1rem;
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 400px;
  margin: auto;
  @media (max-width: 1400px) {
    width: 300px;
  }
  @media (max-width: 1200px) {
    width: 250px;
  }
  @media (max-width: 992px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Row2 = styled.div`
  background-color: #883736;
`;

const AboutMe = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  return (
    <>
      <Header />

      <Content>
        <Row1>
          <Text dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
          <Img src={SmallProfilePicture} />
        </Row1>
        <Row2>
          <Portfolio />
        </Row2>
      </Content>

      <SmallContact />
    </>
  );
};

export default connect(AboutMe);
