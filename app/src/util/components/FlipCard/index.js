import React from "react";
import styled from "styled-components";

export default function FlipCard({ title, company, description }) {
  return (
    <FlipCardOuter>
      <FlipCardInner>
        <CardFront>
          <h1>{title}</h1>
        </CardFront>
        <CardBack>
          <h3>{company}</h3>
        </CardBack>
      </FlipCardInner>
    </FlipCardOuter>
  );
}

const FlipCardOuter = styled.div`
  background-color: transparent;
  width: 20%;
  height: 100px;
  margin: 0.5rem;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${FlipCardOuter}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: #bbb;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  margin: 0 auto;
`;
