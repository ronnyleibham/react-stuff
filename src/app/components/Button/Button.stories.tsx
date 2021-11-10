import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Login = (): JSX.Element => <Button>Einloggen</Button>;
export const Register = (): JSX.Element => <Button>Register</Button>;
