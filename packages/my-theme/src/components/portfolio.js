import React from "react";
import { connect, styled } from "frontity";
import "../style.css";
import MyWebsite from "../assets/my-website.png";
import StagingClub from "../assets/the-staging-club.png";
import MyWebsiteVert from "../assets/my-website-vert-mobile.jpeg";

const Data = [
  {
    src: MyWebsite,
    description: "My personal webpage built from scratch using React.",
    href: "https://github.com/lucilevacquie/ReactWebsite",
    link: "> Click to look at the code <",
    linkMobile: "> Click to access the code <",
  },
  {
    src: MyWebsiteVert,
    description: "My personal webpage built with responsive design technique.",
    href: "https://github.com/lucilevacquie/ReactWebsite",
    link: "> Access the whole code just here <",
    linkMobile: "> Click to access the code <",
  },
  {
    src: StagingClub,
    description:
      "My first pro bono project: a home staging website, built from scratch using React",
    href: "https://github.com/lucilevacquie/the-staging-club",
    link: "> Curious? Just click! <",
    linkMobile: "> Click to access the code <",
  },
  {
    src: StagingClub,
    description:
      "My first pro bono project: a home staging website, built from scratch using React",
    href: "https://github.com/lucilevacquie/the-staging-club",
    link: "> Have a look at the code <",
    linkMobile: "> Click to access the code <",
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  margin: auto;
  padding: 3rem 0;
  width: 1320px;
  height: 700px;
  @media (max-width: 1400px) {
    grid-template-columns: 68% 32%;
    width: 1150px;
    height: 700px;
    padding: 2rem;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 70% 20%;
    width: 900px;
    height: 600px;
    padding: 2rem 0;
  }
  @media (max-width: 992px) {
    grid-template-columns: 65% 35%;
    width: 700px;
    height: 400px;
    padding: 2rem 0;
  }
  @media (max-width: 768px) {
    display: block;
    height: 100%;
    width: 100%;
    padding: 0;
  }
`;

const Column1 = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  @media (max-width: 1400px) {
    grid-template-rows: 45% 55%;
  }
  @media (max-width: 992px) {
    grid-template-rows: 46% 54%;
  }
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 992px) {
    font-size: 1rem;
  }
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
  padding: 1rem 0; /*white gap bottom page*/
`;

const SquareImgContainer = styled.div`
  position: relative;
  width: 360px;
  height: 320px;
  #right {
    margin-left: auto;
  }
  :hover {
    ${OnHover} {
      display: flex;
    }
  }
  @media (max-width: 1400px) {
    width: 360px;
    height: 300px;
    margin-bottom: 15px;
  }
  @media (max-width: 1200px) {
    width: 280px;
    height: 240px;
    margin-bottom: 15px;
    #right {
      margin-left: 0;
    }
  }
  @media (max-width: 992px) {
    width: 200px;
    height: 165px;
    margin-bottom: 15px;
    #right {
      margin-left: 0;
    }
  }
`;

const SquareImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LongHorizImgContainer = styled.div`
  position: relative;
  width: 820px;
  height: 360px;
  :hover {
    ${OnHover} {
      display: flex;
    }
  }
  @media (max-width: 1400px) {
    width: 750px;
    height: 330px;
    margin-top: 5px;
  }
  @media (max-width: 1200px) {
    width: 595px;
    height: 290px;
    margin-top: 0px;
  }
  @media (max-width: 992px) {
    width: 425px;
    height: 200px;
    margin-top: 15px;
  }
`;

const LongHorizImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LongVertiImgContainer = styled.div`
  position: relative;
  width: 360px;
  height: 720px;
  :hover {
    ${OnHover} {
      display: flex;
    }
  }
  @media (max-width: 1400px) {
    width: 350px;
    height: 650px;
  }
  @media (max-width: 1200px) {
    width: 280px;
    height: 560px;
  }
  @media (max-width: 992px) {
    width: 200px;
    height: 400px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LongVertiImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SmallDeviceLayout = styled.div`
  display: grid;
  grid-template-rows: 15% 39% 23% 23%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ImgContainer = styled.div`
  align-items: center;
  padding: 1rem;
  max-width: 70%;
  margin: auto;
`;

const Image = styled.div`
  float: left;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  text-align: center;
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

          <SquareImgContainer id="right">
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
          <LongHorizImg src={Data[0].src} />
          <OnHover>
            <Wrapper>
              <Description>{Data[0].description}</Description>
              <Link href={Data[0].href} target="_blank">
                {Data[0].link}
              </Link>
            </Wrapper>
          </OnHover>
        </LongHorizImgContainer>
      </Column1>

      <LongVertiImgContainer>
        <LongVertiImg src={Data[1].src} />
        <OnHover>
          <Wrapper>
            <Description>{Data[1].description}</Description>
            <Link href={Data[1].href} target="_blank">
              {Data[1].link}
            </Link>
          </Wrapper>
        </OnHover>
      </LongVertiImgContainer>

      <SmallDeviceLayout>
        {Data.map((item) => (
          <ImgContainer>
            <Image>
              <Img src={item.src}></Img>
            </Image>
            <Text>
              <Description>{item.description}</Description>
              <Link href={item.href}>{item.linkMobile}</Link>
            </Text>
          </ImgContainer>
        ))}
      </SmallDeviceLayout>
    </Container>
  );
};

export default connect(Portfolio);
