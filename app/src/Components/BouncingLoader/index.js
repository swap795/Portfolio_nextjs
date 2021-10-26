import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Icon from "../../util/components/Icon";

import { rightIconAnimation } from "../../util/animations";

export default function BouncingLoader() {
  return (
    <Wrapper
      variants={rightIconAnimation}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon
        src={"/assets/money.svg"}
        alt="bouncing-logo"
        width="5rem"
        height="5rem"
        noIcon="true"
      >
        Load TimeLine
      </Icon>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  position: absolute;
  bottom: 4%;
  right: 45%;
  z-index: 300;

  :hover {
    cursor: pointer;
  }
`;
