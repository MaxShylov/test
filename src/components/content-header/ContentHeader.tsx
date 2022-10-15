import React, { FC } from 'react';

import { Layout, Typography } from 'antd';

import { useCurrentRoute } from 'utils/hooks';

import styles from './ContentHeader.module.scss';

const { Header } = Layout;
const { Title } = Typography;

export const ContentHeader: FC = () => {
  const route = useCurrentRoute();

  return (
    <Header className={styles.wrap}>
      <Title level={3}>{route?.name}</Title>
    </Header>
  );
};
