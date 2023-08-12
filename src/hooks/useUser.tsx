'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

import {AppwriteException, ID, Models} from 'appwrite';
import {useRouter} from 'next/navigation';

import {account} from '@/api/appwrite';

export interface UserState {
	user: Models.User<Models.Preferences> | null;
	loading: boolean;
	error: string | null;
	logout: () => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string, name: string) => Promise<void>;
}

const defaultState: UserState = {
	user: null,
	loading: true,
	error: null,
	logout: async () => {},
	register: async () => {},
	login: async () => {},
};

const userContext = createContext<UserState>(defaultState);

export const UserProvider = ({children}: {children: ReactNode}) => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const router = useRouter();

	const loadAccount = async () => {
		try {
			const loadedAccount = await account.get();
			setUser(loadedAccount);
      setError('');
		} catch (error) {
			console.error(error);
			setError('No user logged in...');
		} finally {
			setLoading(false);
		}
	};

	const login = async (email: string, password: string) => {
		try {
			await account.createEmailSession(email, password);
			await loadAccount();
			router.push('/');
		} catch (error: any) {
			const appwriteException = error as AppwriteException;
			console.error(appwriteException.message);
		}
	};

	const register = async (email: string, password: string, name: string) => {
		try {
			const session = await account.create(ID.unique(), email, password, name);
			setUser(session);
			await login(email, password);
			router.push('/');
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		await account.deleteSession('current');
		setUser(null);
		router.push('/');
	};

	useEffect(() => {
		void loadAccount();
	}, []);

	return (
		<userContext.Provider
			value={{user, loading, error, logout, login, register}}
		>
			{children}
		</userContext.Provider>
	);
};

export const UseUser = () => {
	return useContext<UserState>(userContext);
};