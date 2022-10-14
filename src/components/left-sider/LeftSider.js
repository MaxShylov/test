import React, { useCallback, useMemo, useState } from 'react';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

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
      <div className="logo" />
      <Menu
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            icon: React.createElement(icon),
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }),
        )}
        mode="inline"
        theme="dark"
      />
    </Sider>
  );
};
