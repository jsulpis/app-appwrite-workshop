'use client';

import {forwardRef, useState} from 'react';

import {Module, useFinishedModule} from '@/hooks/useFinishedModule';
import {useScopedI18n} from '@/locales/client';

interface CheckModalProps {
	module: Module;
}

export const CheckModal = forwardRef<HTMLDialogElement, CheckModalProps>(
	({module}, ref) => {
		const {finishedModule} = useFinishedModule();
		const [isClicked, setIsClicked] = useState<number | null>(null);
		const t = useScopedI18n('validation');

		const seeClue = () => {
			if (ref) {
				(ref as any)?.current?.showModal();
			}
		};

		const onAnswerClick = (index: 0 | 1 | 2) => {
			navigator.clipboard.writeText(t(`answer.${module}.${index}`));
			setIsClicked(index);
		};

		return (
			<>
				<button
					onClick={seeClue}
					className={`button ${finishedModule[module] ? '' : 'u-none'}`}
				>
					{t('seeClue')}
				</button>
				<dialog className="modal is-big u-position-absolute" ref={ref}>
					<form className="modal-form" method="dialog">
						<header className="modal-header">
							<div className="u-flex u-main-space-between u-cross-center">
								<h4 className="modal-title heading-level-5">
									{t(`title.${module}`)}
								</h4>
								<button
									className="button is-text is-small is-only-icon"
									aria-label="Close modal"
								>
									<span className="icon-x" aria-hidden="true"></span>
								</button>
							</div>
						</header>
						<div className="modal-content">
							<p>{t('content')}</p>
							<p className="u-bold">{t(`question.${module}`)}</p>
							<ul className="u-flex u-main-space-between u-width-full-line">
								{([0, 1, 2] as const).map((index) => (
									<li key={index} className="u-bold">
										<span
											className="button is-secondary"
											onClick={() => onAnswerClick(index)}
										>
											{isClicked === index
												? t('copied')
												: t(`answer.${module}.${index}`)}
										</span>
									</li>
								))}
							</ul>
						</div>
						<div className="modal-footer">
							<div className="u-flex u-main-end">
								<a
									className="button"
									href="appventure-compass.vercel.app"
									target="_blank"
								>
									{t('button')}
								</a>
							</div>
						</div>
					</form>
				</dialog>
			</>
		);
	}
);

CheckModal.displayName = 'CheckModal';
