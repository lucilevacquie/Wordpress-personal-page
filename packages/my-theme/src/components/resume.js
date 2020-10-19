import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import "../style.css";
import Header from "./header";
import SmallContact from "./smallContact";

const Container = styled.div`
  height: 100%;
`;

const LaptopResume = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

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
      @media (max-width: 768px) {
        .experiences {
          background-color: #b83e4b;
          padding: 1.5rem;
        }
        .education {
          background-color: #95aea8;
          padding: 1.5rem;
        }
      }
    }

    .column2 {
      padding-top: 1rem;
      padding-left: 5%;
      background-color: #1d3d38;
      color: white;
      ul {
        line-height: 1.5rem;
      }
      h2 {
        color: #b83e4b;
      }
      .extra {
        height: 100%;
        padding-right: 2%;
      }
      @media (max-width: 904px) {
        padding-left: 3%;
      }
    }
  }
`;

const MobileResume = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: grid;
    grid-template-rows: 100px 1fr 100px;
    min-height: 100%;
  }
`;

const Accordion = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Post = styled.div`
  margin: 1rem;
`;

const PostTitle = styled.div`
  background-color: ${(props) => props.color};
  font-size: 2rem;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const PostContent = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.color};
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: justify;
  padding: 0 1.5rem;
  h3 {
    padding-top: 10px;
  }
  h4 {
    padding-top: 5px;
  }
  .wp-block-columns {
    display: flex;
  }
`;

const Footer = styled.footer`
  /* position: fixed;
  height: 100px;
  width: 100%;
  bottom: 0;
  margin: 0; */
  height: 100%;
`;

const Resume = ({ state, actions, ...props }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  useEffect(() => {
    actions.source.fetch("/category/accordion");
  });

  const categories = state.source.get("/category/accordion");
  let posts = [];
  if (categories.isCategory) {
    posts = categories.items.map(({ type, id }) => state.source[type][id]);
  }

  const [index, setIndex] = useState(0);
  const checkIndex = (i) => {
    if (i === index) {
      return setIndex(0);
    }
    return setIndex(i);
  };

  const titleColor = (i) => {
    if (i === 0) {
      return "#95AEA8";
    } else if (i === 1) {
      return "#B83E4B";
    }
    return "#1D3D38";
  };

  const contentColor = (i) => {
    if (i === 0) {
      return "#d1e5dd";
    } else if (i === 1) {
      return "#d2707a";
    }
    return "#95AEA8";
  };

  return (
    <Container>
      <LaptopResume>
        <Header />
        <Content
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        ></Content>
      </LaptopResume>

      <MobileResume>
        <Header />
        <Accordion>
          {posts.map((item, i) => (
            <Post key={i}>
              <PostTitle
                onClick={() => checkIndex(i + 1)}
                color={titleColor(i)}
              >
                {item.title.rendered}
              </PostTitle>
              {index === i + 1 && (
                <PostContent
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                  color={contentColor(i)}
                ></PostContent>
              )}
            </Post>
          ))}
        </Accordion>
        <Footer>
          <SmallContact />
        </Footer>
      </MobileResume>
    </Container>
  );
};

export default connect(Resume);
