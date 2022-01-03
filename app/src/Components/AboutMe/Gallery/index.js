import styled from "styled-components";
import { DescriptionStyle } from "../../../util/styles";

export default function Gallery({
  forwardRef,
  imgSrc,
  imgAlt,
  size,
  switchImg = false,
  title,
  descriptions,
}) {
  const displayCorrectImgSize = (size) => {
    switch (size) {
      case "small":
        return "250px";
      case "medium":
        return "500px";
      case "large":
        return "1000px";
      default:
        return "500px";
    }
  };

  console.log({ title, descriptions });

  return (
    <Wrapper ref={forwardRef}>
      {switchImg ? (
        <>
          <FloatChild>
            {title && <H1>{title}</H1>}
            {descriptions &&
              descriptions.map((description) => <p>{description}</p>)}
          </FloatChild>
          <FloatChild>
            <img
              src={imgSrc}
              alt={imgAlt}
              width={displayCorrectImgSize(size)}
              height={displayCorrectImgSize(size)}
            />
          </FloatChild>
        </>
      ) : (
        <>
          <FloatChild>
            <img
              src={imgSrc}
              alt={imgAlt}
              width={displayCorrectImgSize(size)}
              height={displayCorrectImgSize(size)}
            />
          </FloatChild>
          <FloatChild>
            {title && <H1>{title}</H1>}
            {descriptions &&
              descriptions.map((description) => <p>{description}</p>)}
          </FloatChild>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: white;
  overflow: hidden;
`;

const FloatChild = styled.div`
  flex: 1;
  padding: 1rem;
`;

const H1 = styled.h1`
  color: black;
`;
