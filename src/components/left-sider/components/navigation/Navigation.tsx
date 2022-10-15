import React, { useMemo, createElement, useState, useEffect, FC } from 'react';

import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

import routes from 'routes';

const { Item } = Menu;

export const Navigation: FC = () => {
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  useEffect(() => {
    const currentRoute = routes.find(route => route.path === pathname);

    if (currentRoute) {
      setSelectedKeys([currentRoute.id]);
    }
  }, [pathname]);

  const renderItems = useMemo(
    () =>
      routes.map(({ icon, id, name, path }) => (
        <Item key={id} title={name}>
          <NavLink to={path}>
            {createElement(icon)}
            <span>{name}</span>
          </NavLink>
        </Item>
      )),
    [],
  );

  return (
    <Menu mode="inline" selectedKeys={selectedKeys} theme="dark">
      {renderItems}
    </Menu>
  );
};
