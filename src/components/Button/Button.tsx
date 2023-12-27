import React from 'react';

import styles from './Button.module.css';

function Button({ className = '', ...delegated }: React.ComponentProps<"button">): React.ReactElement {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
