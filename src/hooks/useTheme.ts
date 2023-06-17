import React from 'react';

type ToggleTheme = () => void;

const THEME = 'theme';

const useTheme = () => {
	const initializeTheme: () => Theme | string = () =>
		localStorage.getItem(THEME) ?? (window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light');

	const [theme, setTheme] = React.useState(initializeTheme);

	React.useEffect(() => {
		document.body.dataset.theme = theme;
		localStorage.setItem(THEME, theme);
	}, [theme]);

	const toggleTheme = () => setTheme(theme => (theme === 'light' ? 'dark' : 'light'));

	return [theme, toggleTheme];
};

export type { ToggleTheme };
export default useTheme;
