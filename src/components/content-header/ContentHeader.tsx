import React, { FC } from 'react';

import { Layout, Typography } from 'antd';

import { useCurrentRoute } from 'hooks';

import styles from './ContentHeader.module.scss';

import { Logout } from '../logout';

const { Header } = Layout;
const { Title } = Typography;

export const ContentHeader: FC = () => {
  const route = useCurrentRoute();

  return (
    <Header className={styles.wrap}>
      <Title level={3}>{route?.name}</Title>

      <Logout className={styles.logout} />
    </Header>
  );
};
