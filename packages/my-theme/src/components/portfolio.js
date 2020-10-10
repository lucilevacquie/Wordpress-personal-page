import React from "react";
import { connect, styled } from "frontity";

import MyWebsite from "../assets/my-website.png";
import StagingClub from "../assets/the-staging-club.png";
import MyWebsiteVert from "../assets/my-website-vert.jpeg";

const Data = [
  (img1 = {
    src: MyWebsiteVert,
    description: "My personal webpage built with responsive design technique.",
    href: "https://github.com/lucilevacquie/ReactWebsite",
  }),
  (img2 = {
    src: MyWebsite,
    description: "My personal webpage built from scratch using React.",
    href: "https://github.com/lucilevacquie/ReactWebsite",
  }),
  (img3 = {
    src: StagingClub,
    description:
      "My first pro bono project: a home staging website, built from scratch using React",
    href: "https://github.com/lucilevacquie/the-staging-club",
  }),
  (img4 = {
    src: StagingClub,
    description:
      "My first pro bono project: a home staging website, built from scratch using React",
    href: "https://github.com/lucilevacquie/the-staging-club",
  }),
];

const Container = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  margin: auto;
  padding: 5rem 0;
  width: 1500px;
  height: 800px;
`;

const Column1 = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  margin: auto;
`;

const Row1 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const SquareImg = styled.img`
  width: 400px;
  height: 330px;
  padding-bottom: 35px;
  cursor: pointer;
`;

const LongHorizImg = styled.img`
  width: 850px;
  height: 400px;
  margin: auto;
  padding-top: 35px;
  cursor: pointer;
`;

const OnHover = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  align-items: center;
`;

const LongVertiImgContainer = styled.div`
  position: relative;
  width: 400px;
  height: 800px;
  cursor: pointer;
  :hover {
    ${OnHover} {
      display: flex;
    }
  }
`;

const LongVertiImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
`;

const Description = styled.div`
  color: white;
  margin: auto;
  position: relative;
  top: center;
  left: center;
  text-align: center;
`;

const Link = styled.a`
  color: white;
  margin: auto;
  position: relative;
  text-decoration: none;
  text-align: center;
  display: block;
`;

const Portfolio = () => {
  return (
    <Container>
      <Column1>
        <Row1>
          <SquareImg src={Data.img3.src} style={{ "padding-right": "25px" }} />
          <SquareImg src={StagingClub} style={{ "padding-left": "25px" }} />
        </Row1>
        <LongHorizImg src={MyWebsite} />
      </Column1>
      <LongVertiImgContainer>
        <LongVertiImg src={MyWebsiteVert} />
        <OnHover>
          <Wrapper>
            <Description>Responsive design</Description>
            <Link
              href="https://github.com/lucilevacquie/ReactWebsite"
              target="_blank"
            >
              - The code on my GitHub -
            </Link>
          </Wrapper>
        </OnHover>
      </LongVertiImgContainer>
    </Container>
  );
};

export default connect(Portfolio);
