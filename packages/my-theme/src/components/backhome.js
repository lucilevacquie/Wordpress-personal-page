import React from "react";
import { connect, styled } from "frontity";
import "../style.css";
import BackArrow from "../assets/back-arrow-white.png";

const Anchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin: 1rem;
  background-color: #883736;
  padding: 0.5rem;
  position: absolute;
`;

const Img = styled.img`
  width: 30px;
  transform: rotate(-90deg);
`;

const Text = styled.div`
  margin-left: 1rem;
  @media (max-width: 576px) {
    display: none;
  }
`;

const BackHome = () => {
  return (
    <Anchor href="/">
      <Img src={BackArrow} alt="Back to Home" />
      <Text>Back to Home</Text>
    </Anchor>
  );
};

export default connect(BackHome);
