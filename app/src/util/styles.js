import styled from "styled-components";
// import { motion } from 'framer-motion';

/* 
   Styled Component 
   
*/
export const AboutStyle = styled.div`
  min-height: 90vh;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  overflow: hidden;
`;

export const DescriptionStyle = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
`;

export const HideStyle = styled.div`
  overflow: hidden;
`;

export const ImgStyle = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    /* -webkit-mask-image: radial-gradient(ellipse 63% 78% at 48% 50%, black 20%, transparent 65%); */
    mask-image: radial-gradient(
      ellipse 63% 78% at 48% 50%,
      black 35%,
      transparent 65%
    );
    /* z-index: 2; */
  }
`;

// styles for the timeline
