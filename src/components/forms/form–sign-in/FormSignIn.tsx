import React, { FC, useState, useCallback, useEffect } from 'react';

import { Alert, Checkbox, Form as AntForm } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useAppDispatch } from 'hooks/redux';

import { setUser } from '../../../store/userSlice';
import { Form, Field } from '../form';

type FormValues = {
  email: string;
  password: string;
  remember: string;
};

let timeoutId: NodeJS.Timeout;

export const FormSignIn: FC = () => {
  const dispatch = useAppDispatch();
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isRemember, setRemember] = useState(false);

  const handleChangeRemember = useCallback(
    (e: CheckboxChangeEvent) => setRemember(e.target.checked),
    [],
  );

  const handleSubmit = useCallback(
    ({ email, password, remember }: FormValues) => {
      setLoading(true);

      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          const token = await user.getIdToken();

          dispatch(setUser({ token }));

          if (isRemember) {
            localStorage.setItem('token', token);
          }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    },
    [dispatch, isRemember],
  );

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
        <AntForm.Item>
          <Checkbox onChange={handleChangeRemember}>Remember me</Checkbox>
        </AntForm.Item>
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
