import styled from "styled-components";

export default function BaselinePlaceholder({ title, message }) {
  return (
    <Wrapper aria-labelledby="baseline-placeholder-title">
      <h1 id="baseline-placeholder-title">{title}</h1>
      <p>{message}</p>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  min-height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 10rem;
  background: #1b1b1b;
  color: white;
  text-align: center;

  p {
    max-width: 42rem;
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;
