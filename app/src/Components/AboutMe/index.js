import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

import { icons as images } from "../../util/constants";

export default function AboutMe() {
  const icons = Object.values(images);
  return (
    <div>
      <div className="resume">
        <div className="header">
          <h4>My name is Swapnil Thapa</h4>
          <p>
            Motivated to apply the principle of <span>learn to be curios</span>{" "}
            by educating outside of school work.
          </p>
        </div>
        <div className="edcation">
          <p>Studying Computer Engineering at Brigham Young University-Idaho</p>
        </div>
        <div>
          <div>This will be all the pictures</div>
          <SkillsContainer>
            {icons.map((icon) => (
              <Icon
                src={`/assets/${icon}.png`}
                alt={`${icon}`}
                width="100"
                height="100"
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
