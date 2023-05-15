import React, { SetStateAction } from 'react';

interface LanguageSelectProps {
	currentLang: string;
	setCurrentLang: React.Dispatch<SetStateAction<Lang>>;
}

const langs: string[] = ['ENG', 'KOR'];

const LanguageSelect = ({ currentLang, setCurrentLang }: LanguageSelectProps) => {
	return (
		<ul className="flex gap-2">
			{langs.map((lang, idx) => (
				<li
					key={idx}
					className={`${
						currentLang === lang ? 'font-bold bg-black text-white dark:bg-white dark:text-black' : 'font-normal'
					} px-4 py-2 rounded-lg cursor-pointer border-[1px] dark:border-gray-200`}
					onClick={() => setCurrentLang(lang as Lang)}>
					{lang}
				</li>
			))}
		</ul>
	);
};

export default LanguageSelect;
