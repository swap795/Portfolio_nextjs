import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

import { icons as images } from "../../util/constants";

export default function AboutMe({ strings }) {
  const icons = Object.values(images);
  const {
    from,
    title,
    motivated_description_1stHalf,
    motivated_description_2ndHalf,
    education_degree,
    education_institution,
  } = strings;

  return (
    <div>
      <div className="resume">
        <div className="header">
          <h4>{title}</h4>
          <p>
            {motivated_description_1stHalf}{" "}
            <span>{motivated_description_2ndHalf}</span>
          </p>
        </div>
        <div className="edcation">
          <p>{`${education_degree} ${from} ${education_institution}`}</p>
        </div>
        <div>
          <SkillsContainer>
            {icons.map((icon) => (
              <Icon
                key={`icons-${icon}`}
                src={`/assets/${icon}.png`}
                alt={`${icon}`}
              />
            ))}
          </SkillsContainer>
        </div>
        <div className="hobbies"></div>
      </div>
    </div>
  );
}

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
`;
