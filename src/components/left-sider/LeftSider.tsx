import React, { useCallback, useMemo, useState, FC } from 'react';

import { Layout } from 'antd';
import { SiderProps } from 'antd/lib/layout/Sider';
import { NavLink } from 'react-router-dom';

import { Logo } from 'components/logo';

import { Navigation } from './components';
import styles from './LeftSider.module.scss';

const { Sider } = Layout;

type LeftSiderProps = Pick<SiderProps, 'onBreakpoint' | 'onCollapse'>;

export const LeftSider: FC<LeftSiderProps> = ({ onBreakpoint, onCollapse: handleCollapse }) => {
  const [isSmall, setSmall] = useState(false);
  const collapsedWidth = useMemo(() => (isSmall ? 0 : 80), [isSmall]);

  const handleBreakpoint = useCallback(
    (broken: boolean) => {
      setSmall(broken);

      if (onBreakpoint) {
        onBreakpoint(broken);
      }
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
