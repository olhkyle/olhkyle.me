import Recoil from 'recoil';
import isSideNavOpenState from '../recoil/atom/isSideNavOpenState';

const useSideNavActive = () => {
  const [isActive, setActive] = Recoil.useRecoilState(isSideNavOpenState);

  const toggleActive = () => setActive((isActive: boolean) => !isActive);

  return [isActive, toggleActive];
};

export default useSideNavActive;
