import React from "react";
import { connect, styled } from "frontity";

const Container = styled.div``;

const Header = styled.header``;

const Title = styled.h1`
  text-align: center;
`;

const Column1 = styled.div`
  text-align: justify;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 0 4rem;
  h2 {
    margin: 1rem 0;
  }
  .wp-block-group {
    margin: 1rem;
  }
  h3 {
    margin: 1rem;
  }
  h4 {
    margin-bottom: 0.7rem;
  }
  p {
    line-height: 1.5rem;
  }
  ul {
    line-height: 1.5rem;
  }
`;

const Column2 = styled.div``;

const Resume = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  return (
    <Container>
      <Header>
        <Title>{page.title.rendered}</Title>
      </Header>

      <Content>
        <Column1
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        ></Column1>
        <Column2></Column2>
      </Content>
    </Container>
  );
};

export default connect(Resume);
