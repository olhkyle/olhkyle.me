import Recoil from 'recoil';

interface LanguageSelectProps {
	currentLang: Lang;
	setCurrentLang: Recoil.SetterOrUpdater<Lang>;
}

const langs: Lang[] = ['ENG', 'KOR'];

const LanguageSelect = ({ currentLang, setCurrentLang }: LanguageSelectProps) => {
	return (
		<ul className="flex gap-2 h-[42px] mt-5">
			{langs.map((lang, idx) => (
				<li
					key={idx}
					className={`${
						currentLang === lang ? 'font-bold toggle-dark' : 'font-normal'
					} px-4 py-2 rounded-lg cursor-pointer border-[1px] dark:border-gray-200`}
					onClick={() => setCurrentLang(lang as Lang)}>
					{lang}
				</li>
			))}
		</ul>
	);
};

export default LanguageSelect;
