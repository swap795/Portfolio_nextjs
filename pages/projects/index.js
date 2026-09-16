import React from "react";
import { fetchWrapper } from "../../app/src/util/utils";

export default function Projects() {
  return <div></div>;
}

export async function getStaticProps() {
  // TODO: once deployed change the URL
  // const aboutMeStrings = await fetch(
  //   "http://localhost:3000/api/strings/aboutMeStrings"
  // ).then((res) => res.json());

  const commongStrings = await fetchWrapper("api/strings/commonStrings").then(
    (res) => res.json()
  );

  return {
    props: {
      strings: { ...commonStrings },
    },
  };
}
