import React, { FC, useCallback } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';

import api from 'api';

type RemoveTranslationProps = {
  id: string;
};

export const RemoveTranslation: FC<RemoveTranslationProps> = ({ id }) => {
  const handleClick = useCallback(() => {
    api.deleteTranslation(id);

    notification.success({
      description: 'Translation was deleted',
      message: 'Success',
    });
  }, [id]);

  return <Button danger icon={<DeleteOutlined />} onClick={handleClick} shape="circle" />;
};
