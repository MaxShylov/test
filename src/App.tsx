import React, { FC, useMemo, useState, createElement } from 'react';

import { Layout } from 'antd';
import cn from 'classnames';
import { Route, BrowserRouter as Router, Navigate, Routes } from 'react-router-dom';

import { ContentBody, ContentFooter, ContentHeader, LeftSider } from 'components';

import styles from './App.module.scss';
import routes from './routes';

export const App: FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isSmall, setSmall] = useState(false);

  const classesContentLayout = cn(styles.wrap, {
    [styles.collapsed]: isCollapsed,
    [styles.small]: isSmall,
  });

  const renderRoutes = useMemo(
    () =>
      routes.map(({ element, id, path }) => (
        <Route key={id} element={createElement(element)} path={path} />
      )),
    [],
  );

  return (
    <Layout>
      <Router>
        <>
          <LeftSider onBreakpoint={setSmall} onCollapse={setCollapsed} />

          <Layout className={classesContentLayout}>
            <ContentHeader />
            <ContentBody>
              <Routes>
                {renderRoutes}
                <Route element={<Navigate to="/translations" />} path="/" />
                <Route element={<Navigate to="/" />} path="*" />
              </Routes>
            </ContentBody>
            <ContentFooter />
          </Layout>
        </>
      </Router>
    </Layout>
  );
};
