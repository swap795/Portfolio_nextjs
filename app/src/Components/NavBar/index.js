import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function NavBar({ strings }) {
  const { home, about_me, projects, contact_me } = strings;
  return (
    <NavStyle>
      <Link href="/">
        <a>{home}</a>
      </Link>
      <ul>
        <li>
          <Link href="/about">
            <a>{about_me}</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>{projects}</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>{contact_me}</a>
          </Link>
        </li>
      </ul>
    </NavStyle>
  );
}

const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  margin: auto;
  padding: 1rem 10rem;
  background: #282828;

  a {
    color: white;
    text-decoration: none;
    /* font-size: 1.5rem; */
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;
