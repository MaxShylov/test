import React, { FC, useCallback, useState } from 'react';

import { notification } from 'antd';

import api from 'api';

import { Field, Form } from './form';
import styles from './FormAddTranslation.module.scss';

type FormValues = {
  key: string;
  translation: string;
};

type FormAddTranslationProps = {
  onSuccess?: () => void;
};

type NotificationType = 'success' | 'error';

export const FormAddTranslation: FC<FormAddTranslationProps> = ({ onSuccess }) => {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    (values: FormValues) => {
      setLoading(true);

      api.addTranslation(values, (err, data) => {
        const type: NotificationType = err ? 'error' : 'success';
        const message = err ? 'Error' : 'Success';
        const description = err || `Translation with key "${values.key}" was created`;

        notification[type]({ description, message });

        if (!err && onSuccess) {
          onSuccess();
        }

        setLoading(false);
      });
    },
    [onSuccess],
  );

  return (
    <Form buttonLabel="Add translation" isLoading={isLoading} onSubmit={handleSubmit}>
      <Field label="Key" name="key" patternName="translation-key" required />
      <Field label="Ukrainian translation" name="textUk" required type="textarea" />
      <Field label="English translation" name="textEn" required type="textarea" />
    </Form>
  );
};
