import React from "react";

import AboutMe from "../../app/src/Components/AboutMe";
import {
  aboutMeStringBundle,
  commonStrings,
} from "../../app/src/util/strings";
import { moreAboutMe } from "../../app/src/util/portfolioData";

export default function About({ strings, experiences = moreAboutMe }) {
  return <AboutMe strings={strings} experiences={experiences} />;
}

export async function getStaticProps() {
  return {
    props: {
      strings: { ...aboutMeStringBundle, ...commonStrings },
      experiences: moreAboutMe,
    },
  };
}
