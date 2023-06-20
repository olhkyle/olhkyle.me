import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Layout } from './components';
import { AboutMe, Portfolio, Home, Login, NotFound, Register, Resume } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/about',
				element: <AboutMe />,
			},
			{
				path: '/portfolio',
				element: <Portfolio />,
			},
			{
				path: '/resume',
				element: <Resume />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

const App = () => {
	const setScreenSize = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	};

	window.addEventListener('resize', setScreenSize);

	return (
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	);
};

export default App;
