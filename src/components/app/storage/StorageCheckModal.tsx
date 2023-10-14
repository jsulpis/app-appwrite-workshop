'use client';

import {useEffect, useRef} from 'react';

import {RealtimeResponseEvent} from 'appwrite';

import {CheckModal} from '@/components/common/modal/CheckModal';
import {useFinishedModule} from '@/hooks/useFinishedModule';
import {EventType, getEventType} from '@/utils/realtime.utils';
import {AppwriteClient} from '@/workshop/api/config/client.config';
import {EnvConfig} from '@/workshop/api/config/env.config';

const STORAGE_SOLUTION = 'Capture d’écran 2023-10-08 à 15.34.04.png';

export const StorageCheckModal = () => {
	const {finishedModule, setFinishedModule} = useFinishedModule();
	const dialogRef = useRef<HTMLDialogElement>(null);
	const bucket = `buckets.${EnvConfig.storageBucketId}.files`;

	useEffect(() => {
		const unsubscribe = AppwriteClient.subscribe(
			bucket,
			(response: RealtimeResponseEvent<File>) => {
				const eventType = getEventType({events: response.events});

				if (
					eventType === EventType.CREATE &&
					response.payload.name === STORAGE_SOLUTION &&
					!finishedModule.storage
				) {
					setFinishedModule((oldFinishedModule) => ({
						...oldFinishedModule,
						storage: true,
					}));
					dialogRef.current?.showModal();
				}
			}
		);

		return () => {
			unsubscribe();
		};
	}, [bucket]);

	return <CheckModal module="storage" ref={dialogRef} />;
};
