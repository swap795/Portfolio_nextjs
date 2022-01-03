import React from "react";

import AboutMe from "../../app/src/Components/AboutMe";
import Hobby from "../../app/src/Components/Hobby";

export default function About({ strings }) {
  return (
    <>
      <AboutMe strings={strings} />
      {/* <Hobby strings={strings} /> */}
    </>
  );
}

export async function getStaticProps() {
  // TODO: once deployed change the URL
  const aboutMeStrings = await fetch(
    "http://localhost:3000/api/strings/aboutMeStrings"
  ).then((res) => res.json());
  const commonStrings = await fetch(
    "http://localhost:3000/api/strings/commonStrings"
  ).then((res) => res.json());

  return {
    props: {
      strings: { ...aboutMeStrings, ...commonStrings },
    },
  };
}
