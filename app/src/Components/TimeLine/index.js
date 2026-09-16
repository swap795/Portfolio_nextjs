import React from "react";
import styled from "styled-components";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import TimeLineContent from "./TimeLineContent";
import { formatDate } from "../../util/utils";
import CenterTag from "../../util/components/CenterTag";

export default function TimeLine({ strings = {}, timelineEvents = {} }) {
  const { projects, and, workExperience } = strings;

  const todaysDate = formatDate(new Date());
  return (
    <Wrapper>
      <H4>
        <Span>{`${projects} ${and} ${workExperience}`}</Span>
      </H4>
      <CenterTag tagName="h4">{todaysDate}</CenterTag>
      {Object.keys(timelineEvents).length > 0 && (
        <VerticalTimeline
          className="vertical-timeline-custom-line"
          lineColor="rgb(199, 101, 194, 0.5)"
        >
          {Object.values(timelineEvents)
            .sort((a, b) => b.id - a.id)
            .map((timelineEvent, index) => {
              const isEven = index % 2 === 0;
              const background = isEven ? "#EDEDED" : "#133B5C";
              const titleColor = isEven ? "#133B5C" : "#fff";
              const descriptionColor = isEven ? "#133B5C" : "#fff";
              return (
                <TimeLineContent
                  key={`timeline-${timelineEvent.id}`}
                  timelineEvent={timelineEvent}
                  background={background}
                  descriptionColor={descriptionColor}
                  titleColor={titleColor}
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

const H4 = styled.h4`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  margin-block-end: 5rem;
`;

const Span = styled.span`
  color: #515585;
`;
