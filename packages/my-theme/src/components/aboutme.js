import React from "react";
import { connect, styled } from "frontity";
import Header from "./header";
import ProfilePicture from "../assets/profile-picture.jpg";
import Portfolio from "./portfolio";

const Content = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`;

const Row1 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  top: 4rem;
  align-items: center;
  background-color: #95aea8;
`;

const Text = styled.div`
  text-align: justify;
  padding: 1rem 3rem;
  line-height: 1.5rem;
  font-size: 1.2rem;
`;

const Img = styled.img`
  width: 400px;
  margin: auto;
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
          <Img src={ProfilePicture} />
        </Row1>
        <Row2>
          <Portfolio />
        </Row2>
      </Content>
    </>
  );
};

export default connect(AboutMe);
