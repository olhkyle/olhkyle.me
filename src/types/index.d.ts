declare type Lang = 'KOR' | 'ENG';
declare type Theme = 'dark' | 'light';
declare type Project = {
	title: string;
	subtitle: string;
	team: boolean;
	composition: string;
	links: Array<{
		title: string;
		href: string;
		icon: React.ReactNode;
	}>;
	overview: string;
	myTasks: string[];
	improvement: string[];
	techStacks: string[];
};
