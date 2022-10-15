import React, { FC } from 'react';

import { Layout } from 'antd';

import styles from './ContentFooter.module.scss';

const { Footer } = Layout;

export const ContentFooter: FC = () => (
  <Footer className={styles.wrap}>
    Created by{' '}
    <a href="https://www.linkedin.com/in/max-shylov/" rel="noreferrer" target="_blank">
      Max Shylov
    </a>
  </Footer>
);
