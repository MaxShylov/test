import React, { useState } from 'react';

import { Layout } from 'antd';
import cn from 'classnames';

import { ContentBody, ContentFooter, ContentHeader, LeftSider } from 'components';

import styles from './App.module.scss';

const App = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isSmall, setSmall] = useState(false);

  const classesContentLayout = cn(styles.wrap, {
    [styles.collapsed]: isCollapsed,
    [styles.small]: isSmall,
  });

  return (
    <Layout>
      <LeftSider onBreakpoint={setSmall} onCollapse={setCollapsed} />
      <Layout className={classesContentLayout}>
        <ContentHeader />
        <ContentBody />
        <ContentFooter />
      </Layout>
    </Layout>
  );
};

export default App;
