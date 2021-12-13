import React from "react";
import styled from "styled-components";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import TimeLineContent from "./TimeLineContent";

export default function TimeLine({ strings, timelineEvents }) {
  const { projects, and, workExperience } = strings;

  let background = "#133B5C";
  let titleColor = "#fff";
  let descriptionColor = "#ffffff";

  return (
    <Wrapper>
      <H4>
        <Span>{`${projects} ${and} ${workExperience}`}</Span>
      </H4>
      {timelineEvents && (
        <VerticalTimeline
          classname="vertical-timeline-custom-line"
          lineColor="rgb(199, 101, 194, 0.5)"
        >
          {Object.values(timelineEvents)
            .sort((a, b) => b.id - a.id)
            .map((timelineEvent) => {
              background = background === "#EDEDED" ? "#133B5C" : "#EDEDED";
              titleColor = titleColor === "#fff" ? "#133B5C" : "#fff";
              descriptionColor =
                descriptionColor === "#133B5C" ? "#fff" : "#133B5C";
              return (
                <TimeLineContent
                  {...{
                    key: `timeline-${timelineEvent.title}`,
                    timelineEvent,
                    background,
                    descriptionColor,
                    titleColor,
                  }}
                />
              );
            })}
        </VerticalTimeline>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
