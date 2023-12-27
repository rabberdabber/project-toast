import React from 'react';

import styled from 'styled-components';

const CustomButton = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(
    to top,
    hsl(245deg 50% 30%),
    hsl(280deg 60% 44%)
  );
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  cursor: pointer;
  outline-offset: 4px;
`;

function Button({ className = '', ...delegated }: React.ComponentProps<"button">): React.ReactElement {
  return (
    <CustomButton
      className={`${className}`}
      {...delegated}
    />
  );
}

export default Button;
