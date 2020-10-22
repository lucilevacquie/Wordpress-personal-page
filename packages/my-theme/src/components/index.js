import React from "react";
import { connect, styled, Global, css, Head } from "frontity";
import Home from "./home";
import AboutMe from "./aboutme";
import Resume from "./resume";

const Main = styled.div`
  height: 100%;
  width: 100%;
`;

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const pageFromLink = (link) => {
    switch (link) {
      case "/":
        return <Home />;
      case "/about-me/":
        return <AboutMe />;
      case "/resume/":
        return <Resume />;
    }
  };
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            font-family:'Piazzolla', serif;
          }
          html,
          body,
          #root {
            height: 100%;
          }
        `}
      />
      <Head>
      <title>Lucile's WordPress Webpage</title>
        <meta name="description" content="Personal Page" />
        <html lang="en" />
      </Head>
      <Main>{pageFromLink(state.router.link)}</Main>
    </>
  );
};

export default connect(Root);
