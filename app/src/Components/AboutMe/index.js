import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import Icon from "../../util/components/Icon";
import FlipCard from "../../util/components/FlipCard";
import { icons as images } from "../../util/constants";
import {
  backAndForth,
  delayedDescriptionAnimation,
  descriptionAnimation,
  fadeAnimation,
  pageAnimation,
  photoAnimation,
  titleAnimation,
} from "../../util/animations";
import {
  AboutStyle,
  DescriptionStyle,
  HideStyle,
  ImgStyle,
} from "../../util/styles";

import BouncingLoader from "../BouncingLoader";
import TimeLine from "../TimeLine";

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

  const [experiences, setExperiences] = useState(null);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [isFlipCard, setIsFlipCard] = useState(false);
  const moreAboutMeRef = useRef(null);

  const stopAnimation = !loadMoreClicked && backAndForth;

  useEffect(() => {
    if (loadMoreClicked) {
      moreAboutMeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.info("Load More is not clicked");
    }
  }, [moreAboutMeRef, loadMoreClicked]);

  useEffect(() => {
    fetch("/api/data/moreAboutMe")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
      });
  }, []);

  const sortedExperiences = useMemo(() => {
    return experiences?.work?.sort((a, b) => b.id - a.id);
  }, [experiences]);

  console.log({ isFlipCard });
  return (
    <Wrapper>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <>
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
            <SkillsContainer>
              {icons.map((icon) => (
                <motion.div key={`icons-${icon}`} variants={photoAnimation}>
                  <Icon src={`/assets/${icon}.png`} alt={`${icon}`} />
                </motion.div>
              ))}
            </SkillsContainer>
            <BouncingLoader
              {...{
                loadMoreClicked,
                setLoadMoreClicked,
                variants: stopAnimation,
              }}
            />
          </AboutStyle>
          {(loadMoreClicked || isFlipCard) && (
            <>
              <MoreAboutMe ref={moreAboutMeRef}>
                <h2>{Object.keys(experiences)[0]}</h2>
                <CardsWrapper>
                  {experiences &&
                    sortedExperiences.map((item) => (
                      <FlipCard
                        key={`flipcard-item-${item.id}`}
                        title={item.title}
                        company={item.company}
                        description={item.description}
                      />
                    ))}
                </CardsWrapper>
              </MoreAboutMe>
              {/* <MoreAboutMe>
                <LeftContainer>
                  <Image
                    src={aboutMe[0].img}
                    alt="proPic"
                    width="400rem"
                    height="300rem"
                  />
                </LeftContainer>
                <Description>
                  <Paragraph ref={textAreaRef}>
                    {aboutMe[0].description}
                  </Paragraph>
                </Description>
              </MoreAboutMe> */}
              {/* {aboutMe
                .filter((item) => item.id !== "passion")
                .map(({ id, description, img }) => (
                  <MoreAboutMe key={`aboutMe-${id}`}>
                    <LeftContainer>
                      <Image
                        src={img}
                        alt={img}
                        width="400rem"
                        height="300rem"
                      />
                    </LeftContainer>
                    <Description>
                      <Paragraph>{description}</Paragraph>
                    </Description>
                  </MoreAboutMe>
                ))} */}
            </>
          )}
        </>
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

const MoreAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Card = styled.div``;

const FrontSide = styled.div``;

const BackSide = styled.div``;

const LeftContainer = styled.div`
  z-index: 1;
  transform: translateX(30%);
`;

const Paragraph = styled.p`
  padding: 6rem 4rem 6rem 8rem;
  font-size: 1.2rem;
  line-height: 1.5em;
  margin: 2rem;
`;

const Description = styled.div`
  background-color: #282828;
  border-radius: 1rem;
  width: 50%;
`;
