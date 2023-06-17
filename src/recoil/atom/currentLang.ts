import { atom } from 'recoil';

const currentLangState = atom({
	key: 'currentLangState',
	default: 'ENG' as Lang,
});

export default currentLangState;
