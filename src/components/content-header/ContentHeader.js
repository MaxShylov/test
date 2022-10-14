import React from 'react';

import { Layout } from 'antd';

const { Header } = Layout;

// import styles from './ContentHeader.module.scss';

export const ContentHeader = () => (
  <Header
    className="site-layout-sub-header-background"
    style={{
      padding: 0,
    }}
  />
);
