import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import Wave from "../../util/wave";

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

export default function Home({ strings }) {
  const { welcome, to_my, portfolio } = strings;
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
            <motion.h2 variants={titleAnimation}>{welcome}</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>{to_my}</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>
              <span>{portfolio}</span>
            </motion.h2>
          </HideStyle>
        </DescriptionStyle>
        <ImgStyle>
          <motion.div variants={photoAnimation}>
            <Image
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
