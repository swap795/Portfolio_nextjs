import React from "react";
import styled from "styled-components";

export default function Icon({ children, src, alt, width, height, noIcon }) {
  return (
    <Wrapper>
      {!noIcon && (
        <ImageContainer src={src} alt={alt} width={width} height={height} />
      )}
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const ImageContainer = styled.img`
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "120px")};
  background-color: white;
  background-size: cover;
  background-position: center;
  border: solid 5px #5bafb7;
  border-radius: 6rem;
  padding: 0.5rem;
  margin: 0.5rem;
`;
