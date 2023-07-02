import Recoil from 'recoil';

interface LanguageSelectProps {
	currentLang: Lang;
	setCurrentLang: Recoil.SetterOrUpdater<Lang>;
}

const langs: Lang[] = ['ENG', 'KOR'];

const LanguageSelect = ({ currentLang, setCurrentLang }: LanguageSelectProps) => {
	return (
		<ul className="flex gap-2 py-5 sm:py-10">
			{langs.map((lang, idx) => (
				<li
					key={idx}
					className={`${
						currentLang === lang ? 'font-bold toggle-dark' : 'font-normal'
					} px-2 py-1 rounded-lg cursor-pointer border-[1px] dark:border-gray-200 sm:px-4 sm:py-2`}
					onClick={() => setCurrentLang(lang)}>
					{lang}
				</li>
			))}
		</ul>
	);
};

export default LanguageSelect;
