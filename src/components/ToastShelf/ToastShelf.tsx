import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import styled, { keyframes } from 'styled-components';


/* @keyframes toast {
  from {
    transform: translateX(calc(100% + 64px));
  }
}

.wrapper {
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  list-style-type: none;
}

.toastWrapper {
  animation: toast 800ms cubic-bezier(0, 0.46, 0, 1.04) both;
  will-change: transform;
}
 */

// Define the keyframes for the toast animation
const toastAnimation = keyframes`
  from {
    transform: translateX(calc(100% + 64px));
  }
`;

// Styled component for the wrapper
const Wrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  list-style-type: none;
`;

// Styled component for the toast wrapper
const ToastWrapper = styled.div`
  animation: ${toastAnimation} 800ms cubic-bezier(0, 0.46, 0, 1.04) both;
  will-change: transform;
`;


function ToastShelf(): React.ReactElement {
  return (
    <Wrapper>
      <ToastWrapper>
        <Toast variant="notice">Example notice toast</Toast>
      </ToastWrapper>
      <ToastWrapper>
        <Toast variant="error">Example error toast</Toast>
      </ToastWrapper>
    </Wrapper>
  );
}

export default ToastShelf;
