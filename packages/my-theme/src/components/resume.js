import React, { useEffect, useState } from "react";
import { connect, styled, css } from "frontity";
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
    height: 100%;
    min-width: 300px;
  }
`;

const Accordion = styled.div`
  display: grid;
  grid-template-rows: ${(props) =>
    props.oneIsActive ? "1fr" : "repeat(3,1fr"};
`;

const Post = styled.div`
  display: ${(props) => (props.hide ? "none" : "grid")};
  grid-template-rows: ${(props) => (props.active ? "115px 1fr" : "1fr")};
  ${(props) =>
    props.active &&
    css`
      ${PostContent} {
        display: block;
      }
    `};
`;

const PostTitle = styled.div`
  background-color: ${(props) => props.color};
  font-size: 2rem;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostContent = styled.div`
  display: none;
  height: 100%;
  overflow: auto;
  background-color: ${(props) => props.color};
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: inherit;
  padding: 1rem;
  h3 {
    padding-top: 10px;
  }
  h4 {
    padding-top: 5px;
  }
  ul {
    padding-left: 1.2rem;
  }
  .wp-block-columns {
    display: flex;
  }
  .column1 {
    padding-right: 0.5rem;
  }
  .column2 {
    padding-left: 0.5rem;
  }
`;

const Footer = styled.footer`
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

  const [active, setActive] = useState(0);
  const onClickItem = (i) => {
    if (i === active) {
      return setActive(0);
    }
    return setActive(i);
  };

  const checkHide = (i) => {
    return active !== 0 && active !== i;
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
        <Accordion oneIsActive={active !== 0}>
          {posts.map((item, i) => (
            <Post key={i} hide={checkHide(i + 1)} active={active === i + 1}>
              <PostTitle
                onClick={() => onClickItem(i + 1)}
                color={titleColor(i)}
              >
                {item.title.rendered}
              </PostTitle>
              <PostContent
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                color={contentColor(i)}
              ></PostContent>
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
