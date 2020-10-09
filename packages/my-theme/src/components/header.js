import React from "react";
import { connect, styled } from "frontity";
import BackHome from "./backhome";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
`;

const Title = styled.h1`
  position: relative;
  margin: auto;
`;

const Header = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <Container>
      <BackHome />
      <Title>{page.title.rendered}</Title>
    </Container>
  );
};

export default connect(Header);
