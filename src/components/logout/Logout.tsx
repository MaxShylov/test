import React, { FC, useCallback, useState } from 'react';

import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { signOut } from 'firebase/auth';

import { auth } from 'firebase-config';

type LogoutProps = {
  className?: string;
};

export const Logout: FC<LogoutProps> = ({ className }) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    setLoading(true);
    const logout = async () => {
      await signOut(auth);
    };

    logout().finally(() => setLoading(false));
  }, []);

  return (
    <Button
      className={className}
      danger
      icon={<LogoutOutlined />}
      loading={isLoading}
      onClick={handleClick}
    >
      Logout
    </Button>
  );
};
