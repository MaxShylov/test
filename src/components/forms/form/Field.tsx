import React, { FC, useMemo, ReactNode } from 'react';

import { Input, Form } from 'antd';

type FieldTypes = 'text' | 'password';

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  type?: FieldTypes;
};

const ruleRequired = { message: 'Field is required!', required: true };

const mapItemsByType: Record<FieldTypes, ReactNode> = {
  password: <Input.Password />,
  text: <Input />,
};

export const Field: FC<FieldProps> = ({ label, name, required, type = 'text' }) => {
  const rules = useMemo(() => (required ? [ruleRequired] : undefined), [required]);

  return (
    <Form.Item label={label} name={name} required={required} rules={rules}>
      {mapItemsByType[type]}
    </Form.Item>
  );
};
