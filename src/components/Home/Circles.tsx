const Circles = () => (
  <div className="relative flex mt-20 right-0 transition ease-out duration-500 hover:transition-transform hover:ease-in hover:translate-x-10 hover:translate-y-5">
    <div className="absolute left-0 w-[180px] h-[180px] bg-white dark:bg-black border-[1px] border-black dark:border-white rounded-full" />
    <div className="absolute left-24 w-[180px] h-[180px] bg-gray-100 dark:bg-gray-400 border-[1px] border-black rounded-full" />
    <div className="absolute left-48 w-[180px] h-[180px] bg-gray-300 border-[1px] border-black rounded-full" />
    <div className="absolute left-72 w-[180px] h-[180px] bg-gray-400 dark:bg-gray-100 border-[1px] border-black rounded-full" />
    <div className="absolute left-96 w-[180px] h-[180px] bg-black dark:bg-white border-[1px] border-black rounded-full" />
  </div>
);

export default Circles;
