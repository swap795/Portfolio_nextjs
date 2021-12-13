import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimeLineContent({
  timelineEvent,
  background,
  descriptionColor,
  titleColor,
}) {
  const {
    id,
    date,
    description_1,
    description_2,
    heading,
    icon,
    occupation,
    technologies,
    title,
  } = timelineEvent;

  const fontAwesome = occupation === "work" ? faBriefcase : faGraduationCap;

  const Icon =
    occupation === "personal" ? (
      <img
        className="vertical-timeline-element-icon bounce-in"
        src={icon}
        alt={icon}
      />
    ) : (
      <FontAwesomeIcon
        style={{
          width: "40%",
          height: "40%",
        }}
        icon={fontAwesome}
      />
    );

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{
        background: background,
        color: "#fff",
        borderRadius: "1rem",
      }}
      contentArrowStyle={{
        borderRight: `0.7rem solid ${background}`,
      }}
      iconStyle={{
        background: "rgb(33, 150, 243)",
        color: "#fff",
      }}
      icon={Icon}
    >
      <div className="bounce-in">
        <Row>
          {technologies?.map((tech) => (
            <Tag key={`technologies-${tech}`}>
              <Item>{tech}</Item>
            </Tag>
          ))}
        </Row>
        <H3
          style={{ color: titleColor }}
          className="vertical-timeline-element-title"
        >
          {title}
        </H3>
        <H3
          style={{ color: titleColor }}
          className="vertical-timeline-element-subtitle"
        >
          {heading}
        </H3>
        <P style={{ color: descriptionColor }}>{description_1}</P>
        {description_2 && <span>{description_2}</span>}
        <Span className="vertical-timeline-element-date">{date}</Span>
      </div>
    </VerticalTimelineElement>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0.5rem 0.5rem 0.5rem;
`;

const Tag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #d4d3d3;
  border-radius: 2rem;
  color: rgba(0, 0, 0, 0.87);
  cursor: default;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.8rem;
  height: 2rem;
  margin: 0.3rem 0.2rem;
  padding: 0 1rem;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-decoration: none;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
`;

const P = styled.p`
  padding: 0;
  font-size: 1.4rem;
`;

const H3 = styled.h3`
  padding: 0.2rem 0;
`;

const H4 = styled.h4`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  margin-block-end: 5rem;
`;

const Span = styled.span`
  color: #515585;
`;
