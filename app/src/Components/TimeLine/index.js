import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimeLine({ strings, timelineEvents }) {
  const { projects, and, workExperience } = strings;
  return (
    <Wrapper>
      <H4>
        <Span>{`${projects} ${and} ${workExperience}`}</Span>
      </H4>
      {timelineEvents && (
        <VerticalTimeline lineColor="rgb(255, 255, 255, 0.6)">
          {Object.values(timelineEvents)
            .sort((a, b) => b.id - a.id)
            .map(
              ({
                id,
                date,
                description_1,
                description_2,
                icon,
                occupation,
                technologies,
                title,
              }) => {
                const fontAwesome =
                  occupation === "work" ? faBriefcase : faGraduationCap;
                return (
                  <VerticalTimelineElement
                    key={`timelineEvents-${id}-${title}`}
                    className="vertical-timeline-element--education"
                    contentStyle={{
                      // background: "#6281b6",
                      background: "#133B5C",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid #6281b6",
                    }}
                    date={date}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={
                      occupation === "personal" ? (
                        <img
                          className="vertical-timeline-element-icon bounce-in"
                          src={icon}
                          alt={icon}
                        />
                      ) : (
                        <FontAwesomeIcon
                          style={{ width: "40%", height: "40%" }}
                          icon={fontAwesome}
                        />
                      )
                    }
                  >
                    <Row>
                      {technologies?.map((tech) => (
                        <Tag key={`technologies-${id}-${title}`}>
                          <Item>{tech}</Item>
                        </Tag>
                      ))}
                    </Row>
                    <H3 className="vertical-timeline-element-title">{title}</H3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {date}
                    </h4>
                    <P>{description_1}</P>
                    {description_2 && <span>{description_2}</span>}
                  </VerticalTimelineElement>
                );
              }
            )}
        </VerticalTimeline>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* background-color: pink; */
  background: #e8e1d9;
`;

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
  background-color: #e0e0e0;
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
  color: #ccc;
  font-size: 1.4rem;
`;

const H3 = styled.h3`
  padding: 0.5rem 0;
`;

const H4 = styled.h4`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  margin-block-end: 5rem;
`;

const Span = styled.span`
  color: "#515585";
`;
