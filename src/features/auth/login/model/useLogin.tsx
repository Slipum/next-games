import { useState } from 'react';

export function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Логин:', { email, password });
    // TODO: тут будет вызов API
  };

  return { email, setEmail, password, setPassword, handleSubmit };
}
