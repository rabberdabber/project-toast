import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styled from 'styled-components';
import { ToastVariant } from '../../types';


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const CustomToast = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  color: black;
  color-scheme: light;
  background: white;
  max-width: 100%;
  width: 350px;
  box-shadow: var(--shadow-elevation-medium);
`;

const Content = styled.div`
  flex: 1;
  padding: 12px 0px;
  font-weight: 600;
`;

const IconContainer = styled.div`
  flex-shrink: 0;
  padding: 16px;
  padding-right: 0px;

  svg {
    display: block;
  }
`;

const CloseButton = styled.button`
  flex-shrink: 0;
  border: none;
  background: transparent;
  padding: 16px;
  cursor: pointer;
`;

const Notice = styled(CustomToast)`
  background: var(--color-notice-bg);

  ${IconContainer} {
    color: var(--color-notice);
  }
`;

const Warning = styled(CustomToast)`
  background: var(--color-warning-bg);

  ${IconContainer} {
    color: var(--color-warning);
  }
`;

const Success = styled(CustomToast)`
  background: var(--color-success-bg);

  ${IconContainer} {
    color: var(--color-success);
  }
`;

const Error = styled(CustomToast)`
  background: var(--color-error-bg);

  ${IconContainer} {
    color: var(--color-error);
  }
`;

function Toast(props: React.PropsWithChildren & { message: string, variant: ToastVariant, setToggleToast: React.Dispatch<React.SetStateAction<boolean>> }): React.ReactElement {
  const toastMap: Record<ToastVariant, React.FC<React.PropsWithChildren>> = {
    notice: Notice,
    warning: Warning,
    success: Success,
    error: Error,
  };

  const Toast = toastMap[props.variant];
  const Icon = ICONS_BY_VARIANT[props.variant];

  return (
    <Toast>
      <>
        <IconContainer>
          <Icon size={24} />
        </IconContainer>
        <Content>
            {props.message}
        </Content>
        <CloseButton onClick={() => props.setToggleToast(false)}>
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </CloseButton>
        </>
    </Toast>
  );
}

export default Toast;
