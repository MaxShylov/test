import React, { FC, ReactNode } from 'react';

import { Button, Form as AntForm } from 'antd';

type FormProps = {
  onSubmit?: (values: any) => void;
  buttonLabel?: string;
  children: ReactNode;
  actions?: ReactNode | ReactNode[];
  isLoading?: boolean;
};

export const Form: FC<FormProps> = ({
  actions,
  buttonLabel,
  children,
  isLoading,
  onSubmit: handleSubmit,
}) => (
  <AntForm layout="vertical" onFinish={handleSubmit} requiredMark="optional">
    {children}

    <AntForm.Item>
      <Button disabled={isLoading} htmlType="submit" loading={isLoading} type="primary">
        {buttonLabel}
      </Button>
      {actions}
    </AntForm.Item>
  </AntForm>
);

Form.defaultProps = {
  buttonLabel: 'Submit',
  onSubmit: () => null,
};
