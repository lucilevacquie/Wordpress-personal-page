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
  top: 15rem;
  left: 2rem;
`;

const Link = styled.a`
  padding: 1rem;
`;

const Icon = styled.img`
  width: 100px;
`;

const Contact = () => {
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

export default connect(Contact);
