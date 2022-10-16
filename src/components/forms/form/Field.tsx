import React, { FC, useMemo, ReactNode } from 'react';

import { Input, Form, Checkbox } from 'antd';

type FieldTypes = 'text' | 'password' | 'textarea';
type FieldPatternNames = 'translation-key';

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  type?: FieldTypes | 'checkbox';
  patternName?: FieldPatternNames;
};

const { Password, TextArea } = Input;

const ruleRequired = { message: 'Field is required!', required: true };
const mapPatternRulesByName = {
  'translation-key': {
    message: 'Use only lowercase and underscore (ex: block_description_p1)',
    pattern: /^[a-z0-9_]*$/,
  },
};

const mapItemsByType: Record<FieldTypes, ReactNode> = {
  password: <Password />,
  text: <Input />,
  textarea: <TextArea rows={1} />,
};

export const Field: FC<FieldProps> = ({ label, name, patternName, required, type = 'text' }) => {
  const rules = useMemo(() => {
    const rulesArr = [];

    if (required) rulesArr.push(ruleRequired);
    if (patternName) rulesArr.push(mapPatternRulesByName[patternName]);

    return rulesArr;
  }, [patternName, required]);
  const renderLabel = useMemo(() => (type === 'checkbox' ? null : label), [label, type]);

  return (
    <Form.Item label={renderLabel} name={name} required={required} rules={rules}>
      {type === 'checkbox' ? <Checkbox>{label}</Checkbox> : mapItemsByType[type]}
    </Form.Item>
  );
};
