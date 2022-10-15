import React, { FC } from 'react';

import { ReactComponent as IconLogo } from 'assets/logo.svg';

import styles from './Logo.module.scss';

export const Logo: FC = () => (
  <div className={styles.wrap}>
    <IconLogo />
  </div>
);
