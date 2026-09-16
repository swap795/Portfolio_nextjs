import styled from "styled-components";
import Image from "next/image";

export default function Gallery({
  forwardRef,
  media = {},
  size,
  switchImg = false,
  title,
  descriptions,
}) {
  const displayCorrectImgSize = (size) => {
    switch (size) {
      case "small":
        return 250;
      case "medium":
        return 500;
      case "large":
        return 1000;
      default:
        return 500;
    }
  };

  const mediaSize = displayCorrectImgSize(size);
  const isPlaceholder = media.type !== "image" || !media.src;
  const mediaAlt = media.alt || "Project media placeholder";
  const mediaLabel = media.label || "Project media placeholder";

  const renderedMedia = isPlaceholder ? (
    <MediaPlaceholder role="img" aria-label={mediaAlt} size={mediaSize}>
      {mediaLabel}
    </MediaPlaceholder>
  ) : (
    <Image
      src={media.src}
      alt={mediaAlt}
      width={mediaSize}
      height={mediaSize}
    />
  );

  return (
    <Wrapper ref={forwardRef}>
      {switchImg ? (
        <>
          <FloatChild>
            {title && <H1>{title}</H1>}
            {descriptions &&
              descriptions.map((description, index) => (
                <p key={`${title}-description-${index}`}>{description}</p>
              ))}
          </FloatChild>
          <FloatChild>{renderedMedia}</FloatChild>
        </>
      ) : (
        <>
          <FloatChild>{renderedMedia}</FloatChild>
          <FloatChild>
            {title && <H1>{title}</H1>}
            {descriptions &&
              descriptions.map((description, index) => (
                <p key={`${title}-description-${index}`}>{description}</p>
              ))}
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
  background: #f3f0ed;
  color: #282828;
  overflow: hidden;

  p {
    color: #282828;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const FloatChild = styled.div`
  flex: 1;
  min-width: 0;
  margin: 0 1rem;
  padding: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const MediaPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(100%, ${({ size }) => `${size}px`});
  min-height: 10rem;
  aspect-ratio: 1;
  padding: 2rem;
  border: 0.2rem dashed #5bafb7;
  border-radius: 1rem;
  color: #282828;
  background: #d4d3d3;
  text-align: center;
`;

const H1 = styled.h1`
  color: black;
`;
