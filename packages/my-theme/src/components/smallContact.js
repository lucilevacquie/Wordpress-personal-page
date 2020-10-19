import React from "react";
import { connect, styled } from "frontity";
import Email from "../assets/email-icon.png";
import Linkedin from "../assets/linkedin-icon.png";
import Github from "../assets/github-icon.png";
import Instagram from "../assets/instagram-icon.png";

const Data = [
  {
    href: "mailto: lucile.vacquie@gmail.com",
    src: Email,
    alt: "Email",
  },
  {
    href: "https://www.linkedin.com/in/lucile-vacqui%C3%A929/",
    src: Linkedin,
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/lucilevacquie",
    src: Github,
    alt: "GitHub",
  },
  {
    href: "https://www.instagram.com/lucile_vcq/",
    src: Instagram,
    alt: "Instagram",
  },
];

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  background-color: #883736;
  height: 100px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  padding: 1rem;
  @media (max-width: 576px) {
    padding: 0.7rem;
  }
`;

const Icon = styled.img`
  width: 80px;
  @media (max-width: 576px) {
    width: 60px;
  }
`;

const SmallContact = () => {
  return (
    <Container>
      {Data.map((item) => (
        <Link href={item.href} target="_blank">
          <Icon src={item.src} alt={item.alt} />
        </Link>
      ))}
    </Container>
  );
};

export default connect(SmallContact);
