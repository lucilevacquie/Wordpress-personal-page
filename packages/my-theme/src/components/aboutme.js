import React from "react";
import { connect, styled } from "frontity";
import Header from "./header";
import ProfilePicture from "../assets/profile-picture.jpg";
import MyWebsite from "../assets/my-website.png";
import StagingClub from "../assets/the-staging-club.png";
import MyWebsiteVert from "../assets/my-website-vert.jpeg";

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
  padding: 0 3rem;
  line-height: 1.5rem;
`;

const Img = styled.img`
  width: 400px;
  margin: auto;
`;

const Row2 = styled.div`
  background-color: #883736;
`;

const Portfolio = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  margin: auto;
  padding: 5rem 0;
  width: 1500px;
  height: 800px;
`;

const X = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  margin: auto;
`;

const Y = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const SquareImg = styled.img`
  width: 400px;
  height: 330px;
  padding-bottom: 35px;
`;

const LongHorizImg = styled.img`
  width: 850px;
  height: 400px;
  margin: auto;
  padding-top: 35px;
`;

const LongVertiImg = styled.img`
  width: 400px;
  height: 800px;
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
          <Portfolio>
            <X>
              <Y>
                <SquareImg
                  src={StagingClub}
                  style={{ "padding-right": "25px" }}
                />
                <SquareImg
                  src={StagingClub}
                  style={{ "padding-left": "25px" }}
                />
              </Y>
              <LongHorizImg src={MyWebsite} />
            </X>
            <LongVertiImg src={MyWebsiteVert} />
          </Portfolio>
        </Row2>
      </Content>
    </>
  );
};

export default connect(AboutMe);
