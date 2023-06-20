import { Circles, RedirectButton } from '../components';
import links from '../constants/links';

const Home = () => {
	return (
		<div className="flex flex-col justify-center h-[720px]">
			<h1 className="relative">
				<div className="text-8xl md:text-9xl">Welcome</div>
				<div className="ml-2 text-5xl text-white font-outline-1 dark:text-dark dark:dark-outline-1 md:text-6xl">
					To My Space 🔭
				</div>
				<Circles />
			</h1>
			<p className="mt-10 h-[80px] text-base text-gray-400 sm:text-xl">
				<code className="mx-2 py-[10px] px-2 text-base bg-gray-100 text-dark border-r-[3px] border-l-[3px] border-dark rounded-2xl sm:text-xl">
					<b>$OLHKYLE</b> === <span>Ordered-List-Human Kyle</span>
				</code>
			</p>
			<div className="flex flex-wrap gap-6 ml-2 sm:ml-0">
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
