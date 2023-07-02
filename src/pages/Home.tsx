import { Description, RedirectButton, Title } from '../components';
import links from '../constants/links';

const Home = () => {
	return (
		<div className="flex flex-col justify-center items-center my-8 w-full">
			<Title />
			<Description />
			<div className="flex flex-col flex-wrap gap-6 mx-auto justify-center mt-5 sm:flex-row sm:mt-12 ">
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
