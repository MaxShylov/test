import React, { FC, useMemo, ReactNode } from 'react';

import { Input, Form, Checkbox } from 'antd';

type FieldTypes = 'text' | 'password';

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  type?: FieldTypes | 'checkbox';
};

const ruleRequired = { message: 'Field is required!', required: true };

const mapItemsByType: Record<FieldTypes, ReactNode> = {
  password: <Input.Password />,
  text: <Input />,
};

export const Field: FC<FieldProps> = ({ label, name, required, type = 'text' }) => {
  const rules = useMemo(() => (required ? [ruleRequired] : undefined), [required]);
  const renderLabel = useMemo(() => (type === 'checkbox' ? null : label), [label, type]);

  return (
    <Form.Item label={renderLabel} name={name} required={required} rules={rules}>
      {type === 'checkbox' ? <Checkbox>{label}</Checkbox> : mapItemsByType[type]}
    </Form.Item>
  );
};
