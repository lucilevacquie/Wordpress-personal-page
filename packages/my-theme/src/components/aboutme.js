import React from "react";
import { connect, styled } from "frontity";

const Title = styled.h1`
  text-align: center;
`;

const Text = styled.div`
  text-align: center;
`;

const AboutMe = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  return (
    <>
      <Title>{page.title.rendered}</Title>
      <Text dangerouslySetInnerHTML={{ __html: page.content.rendered }}></Text>
    </>
  );
};

export default connect(AboutMe);
