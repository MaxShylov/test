import React, { FC } from 'react';

import { Form, Field } from '../form';

export const FormSignIn: FC = () => {
  const handleSubmit = (values: object) => {
    console.log('Success:', values);
  };

  return (
    <Form buttonLabel="Sign In" onSubmit={handleSubmit}>
      <Field label="Login" name="login" required />
      <Field label="Password" name="password" required type="password" />
    </Form>
  );
};
