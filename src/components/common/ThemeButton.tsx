import React from 'react';
import clsx from 'clsx';
import { FiSun, FiMoon } from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';
import { ToggleTheme } from '../../hooks/useTheme';

const ThemeButton = () => {
	const [theme, toggleTheme] = useTheme();

	return (
		<button
			className={clsx(
				`absolute bottom-[77px] right-2.5 p-2 rounded-lg border-[1px] border-gray-200 bg-white dark:bg-dark z-50`,
				{ 'hover:bg-gray-100': theme === 'light' },
				{ 'hover:bg-gray-900': theme === 'dark' },
			)}
			onClick={toggleTheme as ToggleTheme}>
			{theme === 'light' ? <FiMoon size="24" /> : <FiSun size="24" />}
		</button>
	);
};

export default ThemeButton;
