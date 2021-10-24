import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Wave from "../../util/wave";
import Icon from "../Icon";

import { proPic } from "../../util/constants";
import {
  AboutStyle,
  DescriptionStyle,
  HideStyle,
  ImgStyle,
} from "../../util/styles";
import {
  pageAnimation,
  photoAnimation,
  titleAnimation,
} from "../../util/animations";

export default function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutStyle>
        <DescriptionStyle>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>Welcome</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>to my</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>
              <span>Portfolio!</span>
            </motion.h2>
          </HideStyle>
        </DescriptionStyle>
        <ImgStyle>
          <motion.div variants={photoAnimation}>
            <Icon
              src={`/assets/${proPic}.JPEG`}
              alt="proPic"
              width="460"
              height="400"
            />
          </motion.div>
        </ImgStyle>
        <Wave />
      </AboutStyle>
      <div style={{ background: "linear-gradient(#1b1b1b, #5d5555)" }}>
        {/* <Timeline /> */}
      </div>
    </motion.div>
  );
}
