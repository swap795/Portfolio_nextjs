import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Icon from "../../util/components/Icon";

import { backAndForth } from "../../util/animations";

export default function BouncingLoader({
  loadMoreClicked,
  setLoadMoreClicked,
  variants,
}) {
  return (
    !loadMoreClicked && (
      <Wrapper
        variants={variants}
        whileHover={{ scale: 1.1 }}
        onClick={() => setLoadMoreClicked(true)}
      >
        <Icon
          src={"/assets/waveHand.png"}
          alt="bouncing-logo"
          width="5rem"
          height="5rem"
        >
          <ChatBox>More about me?</ChatBox>
        </Icon>
      </Wrapper>
    )
  );
}

const ChatBox = styled.span`
  position: relative;
  background: #fff;
  border-radius: 0.4em;
  height: 100%;
  padding: 0.4rem;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 80%;
    width: 0;
    height: 0;
    border: 0.5rem solid transparent;
    border-right-color: #fff;
    border-left: 0;
    margin-top: -1rem;
    margin-left: -0.5rem;
  }
`;

const Wrapper = styled(motion.div)`
  position: absolute;
  bottom: 4%;
  right: 35%;
  z-index: 300;

  :hover {
    cursor: pointer;
  }
`;
