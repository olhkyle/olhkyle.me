const getAssetPath = (value: string) => {
	return process.env.NODE_ENV === 'development' ? '/' : `/about/${value}`;
};

export default getAssetPath;
