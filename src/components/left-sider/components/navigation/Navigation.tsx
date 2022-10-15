import React, { useMemo, createElement, FC } from 'react';

import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import { useCurrentRoute } from 'hooks';
import routes from 'routes';

const { Item } = Menu;

export const Navigation: FC = () => {
  const route = useCurrentRoute();
  const selectedKeys = useMemo(() => route && [route.id], [route]);

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
