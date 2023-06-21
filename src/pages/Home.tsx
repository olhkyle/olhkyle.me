import { Description, RedirectButton, Title } from '../components';
import links from '../constants/links';

const Home = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-[720px]">
			<Title />
			<Description />
			<div className="flex flex-col flex-wrap gap-6 ml-2 mt-2 sm:ml-0 sm:flex-row">
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
