const Circles = () => (
	<>
		<div className="absolute hidden sm:block sm:-top-10 sm:right-10 w-32 h-32 border-[1px] rounded-full bg-black dark:border-white" />
		<div className="absolute hidden sm:block sm:-top-5 sm:right-12 w-16 h-16 rounded-full bg-white" />
		<div className="absolute hidden sm:block sm:top-8 sm:right-32 w-8 h-8 rounded-full bg-white" />
		<div className="absolute hidden sm:block sm:top-2 sm:right-32 w-32 h-6 border-[1px] border-dark bg-white transition ease-out duration-500 hover:transition-transform hover:ease-in hover:translate-x-10 hover:-translate-y-5 cursor-pointer" />
	</>
);

export default Circles;
