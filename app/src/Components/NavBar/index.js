import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NavBar({ strings }) {
  const { home, about_me, projects, contact_me } = strings;
  const router = useRouter();
  const { pathname } = router;
  return (
    <NavStyle>
      <Link href="/">
        <Item>
          <A>{home}</A>
        </Item>
      </Link>
      <Row>
        <Link href="/about">
          <Item>
            <A active={pathname === "/about"}>{about_me}</A>
            <ItemAnimation
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/about" ? "5%" : "0%" }}
              active={pathname === "/about"}
            />
          </Item>
        </Link>
        <Link href="/projects">
          <Item>
            <A active={pathname === "/projects"}>{projects}</A>
            <ItemAnimation
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/projects" ? "4.5%" : "0%" }}
              active={pathname === "/projects"}
            />
          </Item>
        </Link>
        <Link href="/contactMe">
          <Item>
            <A active={pathname === "/contactMe"}>{contact_me}</A>
            <ItemAnimation
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contactMe" ? "6.5%" : "0%" }}
              active={pathname === "/contactMe"}
            />
          </Item>
        </Link>
      </Row>
    </NavStyle>
  );
}

const NavStyle = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 10vh;
  margin: auto;
  padding: 0 10rem;
  background: #282828;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1300px) {
    padding: 2rem;
    justify-content: space-around;
    width: 100%;
  }
`;

const Item = styled.div`
  margin: 0 2rem;
  padding: 1rem 2rem;
  border-radius: 4rem;

  :hover {
    cursor: pointer;

    a {
      color: #ffffff;
    }
  }

  @media (max-width: 1300px) {
    padding: 0;
  }
`;

const ItemAnimation = styled(motion.div)`
  position: absolute;
  /* left: 53%; */
  background-color: #23d997;
  width: 0%;
  height: 0.3rem;
`;

const A = styled.a`
  color: ${({ active }) => (active ? "#ffffff" : "#9e9e9e")};
  text-decoration: none;
  /* font-size: 1.5rem; */
  font-family: "Lobster", cursive;
  font-weight: lighter;
  transition: color 0.75s ease;
`;
