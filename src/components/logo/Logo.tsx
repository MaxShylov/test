import React, { FC } from 'react';

import cn from 'classnames';

import { ReactComponent as IconLogo } from 'assets/logo.svg';

import styles from './Logo.module.scss';

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className, dark }) => {
  const classesWrap = cn(styles.wrap, className, { [styles.dark]: dark });

  return (
    <div className={classesWrap}>
      <IconLogo />
    </div>
  );
};
