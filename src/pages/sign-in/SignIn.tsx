import React, { FC } from 'react';

import { Typography } from 'antd';

import { FormSignIn } from 'components/forms';
import { Logo } from 'components/logo';

import styles from './SignIn.module.scss';

const { Title } = Typography;

export const SignIn: FC = () => (
  <div className={styles.wrap}>
    <div className={styles.content}>
      <Logo className={styles.logo} dark />

      <Title>Sign In</Title>
      <FormSignIn />
    </div>
  </div>
);
