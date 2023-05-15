import { Circles, RedirectButton } from '../components';
import links from '../constants/links';

const Home = () => {
  return (
    <div className="relative flex flex-col mt-10 h-[600px]">
      <h1>
        <div className="text-9xl text-white font-outline-2 dark:text-dark dark:dark-outline-2">Welcome</div>
        <div className="ml-2 text-6xl text-white font-outline-1 dark:text-dark dark:dark-outline-1">To My Space 🔭</div>
      </h1>
      <p className="ml-2 mt-10 text-lg text-gray-400">
        💿
        <code className="mx-2 py-4 px-2 bg-gray-100 text-dark border-r-[3px] border-l-[3px] border-dark rounded-xl">
          <b>$OLHKYLE</b> = 'Ordered List Human Kyle'
        </code>{' '}
        <span className="text-xl"> 's space, which is quite neat and decent.</span>
      </p>
      <Circles />
      <div className="absolute -bottom-20 flex gap-6">
        {links.map(link => (
          <RedirectButton key={link} path={link.toLowerCase()}>
            {link}
          </RedirectButton>
        ))}
      </div>
    </div>
  );
};

export default Home;
