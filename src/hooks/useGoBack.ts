import { useNavigate } from 'react-router-dom';

const useGoBack = () => {
	const navigate = useNavigate();

	return () => navigate(-1);
};

export default useGoBack;
