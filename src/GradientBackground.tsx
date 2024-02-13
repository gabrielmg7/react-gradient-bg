import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const AnimatedGrid = styled(Grid)`
  top: 100%;
  left: 100%;
  right: 100%;
  bottom: 100%;
  height: 100%;
  width: 100%;
  background-size: 200% 200%;
  background-image: linear-gradient(45deg, rgba(0, 215, 223, 0.6), rgba(0, 109, 240, 0.6), rgba(187, 208, 255, 0.6));
  animation: ${gradientAnimation} 10s ease infinite;
`;

interface GradientBackgroundProps {
    children: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
    return <AnimatedGrid>{children}</AnimatedGrid>;
};

export default GradientBackground;