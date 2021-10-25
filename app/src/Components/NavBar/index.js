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
          <a>{home}</a>
        </Item>
      </Link>
      <Row>
        <Link href="/about">
          <Item>
            <a>{about_me}</a>
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
            <a>{projects}</a>
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
            <a>{contact_me}</a>
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
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  margin: auto;
  padding: 0 10rem;
  background: #282828;

  a {
    color: white;
    text-decoration: none;
    /* font-size: 1.5rem; */
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.div`
  margin: 0 2rem;
  padding: 1rem 2rem;
  border-radius: 4rem;

  :hover {
    background-color: #535050;
    cursor: pointer;
    box-shadow: 5px 10px 8px #111111;
  }
`;

const ItemAnimation = styled(motion.div)`
  position: absolute;
  /* left: 53%; */
  background-color: #23d997;
  width: 0%;
  height: 0.3rem;
`;
