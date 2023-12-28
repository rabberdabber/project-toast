import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import styled, { keyframes } from 'styled-components';
import { ToastType } from '../../types';


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


function ToastShelf({ toasts, setToasts}: { toasts: ToastType[], setToasts: React.Dispatch<React.SetStateAction<ToastType[]>> }): React.ReactElement {

  const deleteToast = (idx: number) => {
    setToasts((prevToasts) => {
      const newToasts = [...prevToasts];
      newToasts.splice(idx, 1);
      return newToasts;
    });
  }
  return (
    <Wrapper>
      {
        toasts.map((toast, idx) => (
          <ToastWrapper key={toast.id}>
            <Toast variant={toast.variant} setToggleToast={() => deleteToast(idx)}>{toast.message}</Toast>
          </ToastWrapper>
        ))
      }  
    </Wrapper>
  );
}

export default ToastShelf;
