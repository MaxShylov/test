import React, { useCallback, useMemo, useState } from 'react';

import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';

import { Logo, Navigation } from './components';
import styles from './LeftSider.module.scss';

const { Sider } = Layout;

export const LeftSider = ({ onBreakpoint, onCollapse: handleCollapse }) => {
  const [isSmall, setSmall] = useState(false);
  const collapsedWidth = useMemo(() => (isSmall ? 0 : 80), [isSmall]);

  const handleBreakpoint = useCallback(
    broken => {
      setSmall(broken);
      onBreakpoint(broken);
    },
    [onBreakpoint],
  );

  return (
    <Sider
      breakpoint="lg"
      className={styles.wrap}
      collapsedWidth={collapsedWidth}
      collapsible
      onBreakpoint={handleBreakpoint}
      onCollapse={handleCollapse}
    >
      <NavLink to="/">
        <Logo />
      </NavLink>

      <Navigation />
    </Sider>
  );
};
