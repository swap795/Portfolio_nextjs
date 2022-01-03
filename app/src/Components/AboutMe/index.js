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
import Gallery from "./Gallery";

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
  const moreAboutMeRef = useRef(null);

  const stopAnimation = !loadMoreClicked && backAndForth;

  useEffect(() => {
    if (loadMoreClicked) {
      moreAboutMeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
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

  const sortedProjects = useMemo(() => {
    return experiences?.projects?.sort((a, b) => b.id - a.id);
  }, [experiences]);

  return (
    <>
      <Wrapper>
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <>
            {experiences && (
              <ExperiencesWrapper>
                <h4>{Object.keys(experiences)[0].toUpperCase()}</h4>
                <CardsWrapper>
                  {experiences &&
                    sortedExperiences.map((item) => (
                      <FlipCard
                        key={`flipcard-item-${item.title}`}
                        title={item.title}
                        company={item.company}
                        description={item.description}
                        time={item.time}
                      />
                    ))}
                </CardsWrapper>
              </ExperiencesWrapper>
            )}
            <SkillsWrapper>
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
              <Languages>
                {icons.map((icon) => (
                  <motion.div key={`icons-${icon}`} variants={photoAnimation}>
                    <Icon src={`/assets/${icon}.png`} alt={`${icon}`} />
                  </motion.div>
                ))}
              </Languages>
              <BouncingLoader
                {...{
                  loadMoreClicked,
                  setLoadMoreClicked,
                  variants: stopAnimation,
                }}
              />
            </SkillsWrapper>
          </>
        </motion.div>
      </Wrapper>
      {loadMoreClicked && (
        <>
          {sortedProjects.map((item) => {
            const switchImg = item.id % 2 === 0;
            const addRef = Boolean(item.id === "4");
            const projectId = item?.id;

            return (
              projectId && (
                <>
                  <Gallery
                    {...{
                      key: `projects-${projectId}`,
                      imgSrc: "/assets/athlete-small.png",
                      imgAlt: "athlete small pic",
                      size: "medium",
                      switchImg,
                      title: item.title,
                      descriptions: item.description,
                      ...(addRef && { forwardRef: moreAboutMeRef }),
                    }}
                  />
                </>
              )
            );
          })}
        </>
      )}
    </>
  );
}

const Languages = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
`;

const Wrapper = styled.div`
  background: #1b1b1b;
  /* border: 2px solid red; */
  height: 90vh;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const SkillsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem 0 10rem;
  color: white;
  overflow: hidden;
`;

const ExperiencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1rem 0 0 0;
`;

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
