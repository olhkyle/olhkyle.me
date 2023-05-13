import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Layout } from './components';
import { AboutMe, Blog, Home, Login, NotFound, Register, Resume } from './pages';

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
        path: '/blog',
        element: <Blog />,
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
