import React from 'react';

import styles from './Footer.module.css';
import styled from 'styled-components';


/* .wrapper {
  padding: 32px 16px 64px;
  max-width: 500px;
  margin: 32px auto;
  text-align: center;
}

.wrapper p {
  font-size: 0.875rem;
  color: hsl(230deg 75% 88%);
}

.wrapper p a {
  font-weight: 700;
  text-decoration: none;
  color: hsl(230deg 90% 95%);
}
.wrapper p a:hover {
  text-decoration: underline;
}
.wrapper p:not(:last-of-type) {
  margin-bottom: 1em;
}
 */

const CustomWrapper = styled.footer`
  padding: 32px 16px 64px;
  max-width: 500px;
  margin: 32px auto;
  text-align: center;

  p {
    font-size: 0.875rem;
    color: hsl(230deg 75% 88%);
  }

  p a {
    font-weight: 700;
    text-decoration: none;
    color: hsl(230deg 90% 95%);
  }
  p a:hover {
    text-decoration: underline;
  }
  p:not(:last-of-type) {
    margin-bottom: 1em;
  }
`;


function Footer() {
  return (
    <CustomWrapper>
      <p>
        This project is from{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://joyofreact.com">
          The Joy of React
        </a>
        , a comprehensive React.js course.
      </p>
      <p>© 2022-present Joshua Comeau. All rights reserved.</p>
    </CustomWrapper>
  );
}

export default Footer;
