import React from "react";
import styled from "styled-components";

import Icon from "../../util/components/Icon";
import {
  delayedDescriptionAnimation,
  descriptionAnimation,
  fadeAnimation,
  pageAnimation,
  photoAnimation,
  titleAnimation,
} from "../../util/animations";
import { icons as images } from "../../util/constants";
import {
  AboutStyle,
  DescriptionStyle,
  HideStyle,
  ImgStyle,
} from "../../util/styles";
import { motion } from "framer-motion";

export default function AboutMe({ strings }) {
  const icons = Object.values(images);
  const {
    education_degree,
    education_institution,
    education_major,
    from,
    in_string,
    motivated_description_1stHalf,
    motivated_description_2ndHalf,
    title,
  } = strings;

  return (
    <Wrapper>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutStyle>
          <DescriptionStyle>
            <div>
              <motion.h4 variants={fadeAnimation}>{title}</motion.h4>
              <motion.p variants={fadeAnimation}>
                {motivated_description_1stHalf}{" "}
                <motion.span variants={fadeAnimation}>
                  {motivated_description_2ndHalf}
                </motion.span>
              </motion.p>
            </div>
            <motion.div>
              <motion.p variants={descriptionAnimation}>
                {education_degree} {in_string}
                <motion.span variants={delayedDescriptionAnimation}>
                  {" "}
                  {education_major}{" "}
                </motion.span>
                {from} {education_institution}
              </motion.p>
            </motion.div>
          </DescriptionStyle>
          <div>
            <SkillsContainer>
              {icons.map((icon) => (
                <motion.div key={`icons-${icon}`} variants={photoAnimation}>
                  <Icon src={`/assets/${icon}.png`} alt={`${icon}`} />
                </motion.div>
              ))}
            </SkillsContainer>
          </div>
        </AboutStyle>
      </motion.div>
    </Wrapper>
  );
}

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
`;

const Wrapper = styled.div`
  background: #1b1b1b;
`;
