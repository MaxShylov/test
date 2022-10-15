import React from 'react';

import { Layout } from 'antd';

const { Content } = Layout;

// import styles from './ContentBody.module.scss';

export const ContentBody = ({ children }) => (
  <Content
    style={{
      margin: '24px 16px 0',
    }}
  >
    <div
      className="site-layout-background"
      style={{
        minHeight: 360,
        padding: 24,
      }}
    >
      {children}
    </div>
  </Content>
);
