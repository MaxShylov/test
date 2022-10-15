import React, { FC, useCallback } from 'react';

import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { useAppDispatch } from 'hooks';

import { removeUser } from '../../store/userSlice';

type LogoutProps = {
  className?: string;
};

export const Logout: FC<LogoutProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(removeUser());
    localStorage.removeItem('token');
  }, [dispatch]);

  return (
    <Button className={className} danger icon={<LogoutOutlined />} onClick={handleClick}>
      Logout
    </Button>
  );
};
