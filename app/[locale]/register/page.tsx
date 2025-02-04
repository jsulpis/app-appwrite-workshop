'use client';

import {FormEvent, useState} from 'react';

import {RegisterForm} from '@/components/app/authentication/RegisterForm';
import {UseAccount} from '@/hooks/useAccount';
import {I18nProviderClient} from '@/locales/client';

export default function Register() {
	const {register} = UseAccount();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignup = async (e: FormEvent<EventTarget>) => {
		e.preventDefault();

		await register(email, password, name);
	};

	return (
		<I18nProviderClient>
			<RegisterForm
				onSubmit={handleSignup}
				setName={setName}
				setEmail={setEmail}
				setPassword={setPassword}
				name={name}
				email={email}
				password={password}
			/>
		</I18nProviderClient>
	);
}
