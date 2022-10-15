import React, { FC, ReactNode } from 'react';

import { Button, Form as AntForm } from 'antd';

type FormProps = {
  onSubmit?: (values: object) => void;
  buttonLabel?: string;
  children: ReactNode;
};

export const Form: FC<FormProps> = ({ buttonLabel, children, onSubmit: handleSubmit }) => (
  <AntForm layout="vertical" onFinish={handleSubmit} requiredMark="optional">
    {children}

    <AntForm.Item>
      <Button htmlType="submit" type="primary">
        {buttonLabel}
      </Button>
    </AntForm.Item>
  </AntForm>
);

Form.defaultProps = {
  buttonLabel: 'Submit',
  onSubmit: () => null,
};
