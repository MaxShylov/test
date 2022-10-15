import React from 'react';

import { ReactComponent as IconLogo } from 'assets/logo.svg';

import styles from './Logo.module.scss';

export const Logo = () => (
  <div className={styles.wrap}>
    <IconLogo />
  </div>
);
