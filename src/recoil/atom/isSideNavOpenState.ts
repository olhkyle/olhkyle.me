import { atom } from 'recoil';

const KEY = 'isSideNavOpen';

const localStorageEffect = ({ onSet }: any) => {
	onSet((newState: string) => localStorage.setItem(KEY, newState));
};

const isSideNavOpenState = atom({
	key: 'isSideNavOpenState',
	default: JSON.parse(localStorage.getItem(KEY) as string) ?? true,
	effects: [localStorageEffect],
});

export default isSideNavOpenState;
