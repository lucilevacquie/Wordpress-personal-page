import React from "react";
import { connect, styled } from "frontity";
import "../style.css";
import Header from "./header";

const Container = styled.div``;

const Content = styled.div`
  text-align: justify;

  .columns {
    display: flex;
    h2 {
      padding: 1rem 0;
    }

    .column1 {
      h4 {
        padding-bottom: 0.7rem;
      }
      p {
        line-height: 1.5rem;
      }
      ul {
        line-height: 1.5rem;
        padding-bottom: 1rem;
      }
      .experiences {
        background-color: #b83e4b;
        padding: 1rem 3rem;
      }
      .education {
        background-color: #95aea8;
        padding: 1rem 3rem;
      }
    }

    .column2 {
      /* padding: 1rem; */
      padding-top: 5%;
      padding-left: 5%;
      background-color: #1d3d38;
      color: white;
      ul {
        line-height: 1.5rem;
      }
      h2 {
        color: #b83e4b;
      }
    }
  }
`;

const Resume = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  console.log(state);
  return (
    <Container>
      <Header />
      <Content
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      ></Content>
    </Container>
  );
};

export default connect(Resume);
