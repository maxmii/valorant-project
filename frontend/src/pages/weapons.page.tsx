import {useWeapons} from '../hooks/useWeapons.hook';
import '../styles/pages.css';
import '../styles/layout/pageLayout.css';
import '../styles/components/buttons.css';

const WeaponsPage = () => {
  const {weapons, loading, error, refetch} = useWeapons();

  const loadingWeaponString = 'Loading Weapons';
  if (loading) {
    return (
      <div className="loading-container">
        <h2>{`${loadingWeaponString}...`}</h2>
        <div className="loader" />
      </div>
    );
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
    <div className="container">
      <h2>Valorant Weapons</h2>
      <button onClick={refetch} className="refresh-button">
        Refresh Weapons
      </button>

      <div className="grid">
        {weapons.map((weapon) => (
          <div key={weapon.weaponName} className="card">
            <div className="portrait-weapon">
              <img src={weapon.displayIcon} alt={weapon.weaponName} />
            </div>
            <div className="weapon-info">
              <h3>{weapon.weaponName}</h3>
              <p className="weapon-type">Type: {weapon.weaponType}</p>
              
              {weapon.weaponStats && (
                <div className="weapon-stats">
                  <h4>Weapon Stats</h4>
                  <ul>
                    <li>Fire Rate: {weapon.weaponStats.fireRate}</li>
                    <li>Magazine Size: {weapon.weaponStats.magazineSize}</li>
                    <li>Wall Penetration: {weapon.weaponStats.wallPenetration}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaponsPage;
