import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Layout, _Project } from './components';
import { AboutMe, Portfolio, Home, Login, NotFound, Register, Resume, ProjectContent } from './pages';

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
				path: 'portfolio',
				element: <Portfolio />,
			},
			{
				path: 'project',
				element: <ProjectContent />,
				children: [
					{
						path: ':title',
						element: <_Project />,
					},
				],
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
	return (
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	);
};

export default App;
