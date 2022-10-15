import React, { FC, ReactNode } from 'react';

import { Layout } from 'antd';

import styles from './ContentBody.module.scss';

const { Content } = Layout;

type ContentBodyProps = {
  children: ReactNode;
};

export const ContentBody: FC<ContentBodyProps> = ({ children }) => (
  <Content className={styles.wrap}>
    <div className={styles.content}>{children}</div>
  </Content>
);
