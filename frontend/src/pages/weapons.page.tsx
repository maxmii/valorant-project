import {useWeapons} from '../hooks/useWeapons.hook';
import '../layout/PageLayout.css'
import '../components/buttons.css'

const WeaponsPage = () => {
  const {weapons, loading, error, refetch} = useWeapons();

  const loadingWeaponString = 'Loading Weapons'
  if (loading) {
    return (
      <div className='loading-container'>
        <h2>{`${loadingWeaponString}...`}</h2>
        <div className="loader"/>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>{`Error ${loadingWeaponString}`}</h2>
        <p>{error.message}</p>
        <button onClick={refetch} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }


  return (
    <div className=''></div>
  )
};

export default WeaponsPage;
