import React from 'react';
import clsx from 'clsx';
import { FiSun, FiMoon } from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';
import { ToggleTheme } from '../../hooks/useTheme';

interface ThemeButtonProps {
	position: 'in' | 'out';
}

const ThemeButton = ({ position }: ThemeButtonProps) => {
	const [theme, toggleTheme] = useTheme();

	const positionClass = position === 'in' ? 'ml-2' : 'absolute bottom-[120px] right-5';

	return (
		<button
			className={clsx(
				`${positionClass} p-2 w-[42px] h-[42px] rounded-lg border-[1px] border-gray-200 bg-white dark:bg-dark z-50`,
				{ 'hover:bg-gray-100': theme === 'light' },
				{ 'hover:bg-gray-900': theme === 'dark' },
			)}
			onClick={toggleTheme as ToggleTheme}>
			{theme === 'light' ? <FiMoon size="24" /> : <FiSun size="24" />}
		</button>
	);
};

export default ThemeButton;
