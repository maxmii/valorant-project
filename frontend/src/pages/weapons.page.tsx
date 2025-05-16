import {useWeapons} from '../hooks/useWeapons.hook';

const WeaponsPage = () => {
  const {weapons, loading, error, refetch} = useWeapons();
};

export default WeaponsPage;
