import React from "react";
import styled from "styled-components";

export default function Icon({ src, alt, width, height }) {
  return <ImageContainer src={src} alt={alt} />;
}

const ImageContainer = styled.img`
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "120px")};
  background-color: white;
  background-size: cover;
  background-position: center;
  border: solid 5px #5bafb7;
  border-radius: 6rem;
  padding: 0.5rem;
`;
