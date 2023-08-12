'use client';

import {FormEvent, useState} from 'react';

import {LoginForm} from '@/components/app/login/LoginForm';
import {UseUser} from '@/hooks/useUser';

export default function Login() {
  const {login} = UseUser();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

    await login(email, password);
	};

	return (
		<LoginForm
			onSubmit={handleSignIn}
			setEmail={setEmail}
			setPassword={setPassword}
			email={email}
			password={password}
		/>
	);
}