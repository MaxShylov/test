import React, { FC, useState, useCallback, useEffect } from 'react';

import { Alert } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'firebase-config';

import { Form, Field } from '../form';

type FormValues = {
  email: string;
  password: string;
  remember: string;
};

let timeoutId: NodeJS.Timeout;

export const FormSignIn: FC = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = useCallback(({ email, password }: FormValues) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (isError) {
      timeoutId = setTimeout(() => setError(false), 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isError]);

  return (
    <>
      <Form buttonLabel="Sign In" isLoading={isLoading} onSubmit={handleSubmit}>
        <Field label="Email" name="email" required />
        <Field label="Password" name="password" required type="password" />
      </Form>
      {isError && (
        <Alert
          description="Email or password is not a valid"
          message="Error"
          showIcon
          type="error"
        />
      )}
    </>
  );
};
