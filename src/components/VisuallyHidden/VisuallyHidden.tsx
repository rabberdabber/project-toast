import React from 'react';
import styled from 'styled-components';

const ShowWrapperSpan = styled.span`
  font-size: 0.5rem;
`;

const WrapperSpan = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const VisuallyHidden = ({
  children,
  className = '',
  ...delegated
}: React.ComponentProps<"div">) => {
  const [forceShow, setForceShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent ): void => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return (
      <ShowWrapperSpan>
        {children}
      </ShowWrapperSpan>
    );
  }

  return (
    <WrapperSpan className={className} {...delegated}>
      {children}
    </WrapperSpan>
  );
};

export default VisuallyHidden;
