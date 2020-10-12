import React from "react";
import { connect, styled } from "frontity";
import "../style.css";
import MyWebsite from "../assets/my-website.png";
import StagingClub from "../assets/the-staging-club.png";
import MyWebsiteVert from "../assets/my-website-vert.jpeg";

const Data = [
  {
    src: MyWebsiteVert,
    description: "My personal webpage built with responsive design technique.",
    href: "https://github.com/lucilevacquie/ReactWebsite",
    link: "> Access the whole code just here <",
  },
  {
    src: MyWebsite,
    description: "My personal webpage built from scratch using React.",
    href: "https://github.com/lucilevacquie/ReactWebsite",
    link: "> Click to look at the code <",
  },
  {
    src: StagingClub,
    description:
      "My first pro bono project: a home staging website, built from scratch using React",
    href: "https://github.com/lucilevacquie/the-staging-club",
    link: "> Curious? Just click! <",
  },
  {
    src: StagingClub,
    description:
      "My first pro bono project: a home staging website, built from scratch using React",
    href: "https://github.com/lucilevacquie/the-staging-club",
    link: "> Have a look at the code <",
  },
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

const OnHover = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  align-items: center;
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
  padding: 1rem 0;
`;

const SquareImgContainer = styled.div`
  position: relative;
  width: 400px;
  height: 330px;
  margin-bottom: 35px;
  :hover {
    ${OnHover} {
      display: flex;
    }
  }
`;

const SquareImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LongHorizImgContainer = styled.div`
  position: relative;
  width: 850px;
  height: 400px;
  margin-top: 35px;
  :hover {
    ${OnHover} {
      display: flex;
    }
  }
`;

const LongHorizImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LongVertiImgContainer = styled.div`
  position: relative;
  width: 400px;
  height: 800px;
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

const Portfolio = () => {
  return (
    <Container>
      <Column1>
        <Row1>
          <SquareImgContainer>
            <SquareImg src={Data[2].src} />
            <OnHover>
              <Wrapper>
                <Description>{Data[2].description}</Description>
                <Link href={Data[2].href} target="_blank">
                  {Data[2].link}
                </Link>
              </Wrapper>
            </OnHover>
          </SquareImgContainer>

          <SquareImgContainer style={{ "margin-left": "25px" }}>
            <SquareImg src={Data[3].src} />
            <OnHover>
              <Wrapper>
                <Description>{Data[3].description}</Description>
                <Link href={Data[3].href} target="_blank">
                  {Data[3].link}
                </Link>
              </Wrapper>
            </OnHover>
          </SquareImgContainer>
        </Row1>

        <LongHorizImgContainer>
          <LongHorizImg src={Data[1].src} />
          <OnHover>
            <Wrapper>
              <Description>{Data[1].description}</Description>
              <Link href={Data[1].href} target="_blank">
                {Data[1].link}
              </Link>
            </Wrapper>
          </OnHover>
        </LongHorizImgContainer>
      </Column1>

      <LongVertiImgContainer>
        <LongVertiImg src={Data[0].src} />
        <OnHover>
          <Wrapper>
            <Description>{Data[0].description}</Description>
            <Link href={Data[0].href} target="_blank">
              {Data[0].link}
            </Link>
          </Wrapper>
        </OnHover>
      </LongVertiImgContainer>
    </Container>
  );
};

export default connect(Portfolio);
