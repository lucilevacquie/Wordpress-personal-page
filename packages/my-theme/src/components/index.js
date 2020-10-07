import React from "react";
import { connect, styled } from "frontity";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Column1 = styled.div`
  background-color: blue;
`;

const Column2 = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`;

const Root = () => {
  <Container>
    <Column1></Column1>
    <Column2></Column2>
  </Container>;
};

export default connect(Root);
