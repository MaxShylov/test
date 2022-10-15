import React, { FC, useMemo, useState, createElement } from 'react';

import { Layout, Spin } from 'antd';
import cn from 'classnames';
import { Navigate, Routes, Route } from 'react-router-dom';

import { ContentBody, ContentFooter, ContentHeader, LeftSider } from 'components';
import { useAuth } from 'hooks';
import { SignIn } from 'pages';
import routes from 'routes';

import styles from './App.module.scss';

export const App: FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isSmall, setSmall] = useState(false);

  const [user, isLoading] = useAuth();

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

  if (isLoading) {
    return (
      <div className={styles.spin}>
        <Spin size="large" />
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<Navigate to="/sign-in" />} path="*" />
      </Routes>
    );
  }

  return (
    <Layout>
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
    </Layout>
  );
};
