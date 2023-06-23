import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { BiMovie } from 'react-icons/bi';
import { ESC_DEMO, ESC_GITHUB, FINEAPPLE_DEPLOY, FINEAPPLE_GITHUB, FINEAPPLE_RETROSPECT } from '../constants/url';

const projects: Project[] = [
	{
		title: 'FineApple',
		subtitle: '',
		team: true,
		composition: '∙ 3 FE',
		links: [
			{ title: 'Github', href: FINEAPPLE_GITHUB, icon: <AiOutlineGithub size="22" /> },
			{
				title: 'Deployed Link',
				href: FINEAPPLE_DEPLOY,
				icon: <AiOutlineLink size="22" />,
			},
			{
				title: 'Retrospect',
				href: FINEAPPLE_RETROSPECT,
				icon: <AiOutlineLink size="22" />,
			},
		],
		callout: `If you want to try to use Deployed Service, you have to register because of Firebase's security rule.`,
		overview: 'Community Web Application related to Computer / IT and Game topics',
		myTasks: [
			'Created UI guidelines for colors, font styles, component styling, and layout',
			'Designed CRUD for question list & details using Firebase API and React Query',
			'Developed AutoComplete UI Component based on keyword search for titles of selected topics and questions in the Select component',
			'Implemented Infinite Scroll to fetch a page unit list of topic-related questions',
			'Implemented custom styling of Mantine Core components with Emotion',
			'Deployed Frontend with Firebase and Github Actions',
		],
		improvement: [
			'Controlled Routing based on user info and login status, using Higher Order Component(HOC) , such as AuthenticationGuard Component',
			`Improved code to proactively fetch Data from the Server and quickly show User a UI with server status, using Loader in React-Router-Dom`,
			'Improved unnecessary Refetch by introducing React Query to manage server state and cache',
			`Introduced Firebase's Auth, Firestore, Storage and refactored it to enable actual service operation and deployment, after implementing mock server using Node.js and Express.js`,
		],
		techStacks: [
			'React',
			'JavaScript',
			'Recoil',
			'React Query',
			'Vite',
			'Yarn',
			'Emotion',
			'Mantine',
			'Zod',
			'React-Hook-Form',
			'Firebase',
			'Github Actions',
		],
	},
	{
		title: 'ESC',
		subtitle: '(Easy Sports Club)',
		team: true,
		composition: '∙ 2 FE & 3 BE',
		links: [
			{
				title: 'Github',
				href: ESC_GITHUB,
				icon: <AiOutlineGithub size="22" />,
			},
			{
				title: 'Demo Video',
				href: ESC_DEMO,
				icon: <BiMovie size="22" />,
			},
		],
		callout: '',
		overview: 'Web Application of location-based gym search, booking, and goods rental',
		myTasks: [
			`Designed wireframe for a consistent UI`,
			`Determined Client Side Routing structure with React Router Dom`,
			`Developed User Authentication-related features and UI, such as Login, Signup, Forget-Password, and Member Detail pages`,
			`Implemented Social Login with JWT and OAuth 2.0`,
			`Developed a gym booking page using conditional rendering by steps`,
			`Implemented gym bookmark, reservation, and notification history pages with Server State and Cache Management using RTK Query`,
		],
		improvement: [
			`Enhanced collaborative productivity by designing highly reusable UI elements like button and input as Atom(Recoil Global State)`,
			`Refactored by declaring TypeScript Interface type with redundant properties and extending it to reduce unnecessary type declaration code`,
			`Defined type and palette constants related to team members and styles, then writed code to implement consistent UI`,
		],
		techStacks: [
			'React',
			'TypeScript',
			'Redux Toolkit',
			'RTK Query',
			'Vite',
			'Yarn',
			'Emotion',
			'Github Actions',
			'AWS Cloudfront/S3',
		],
	},
];

export default projects;
