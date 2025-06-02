import {useState, useEffect} from 'react';
import {WeaponsService} from '../services/weapons.service';
import type {IWeapon} from '@shared/interfaces';

export const useWeapons = () => {
  const [weapons, setWeapons] = useState<IWeapon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const data = await WeaponsService.getAllWeapons();
        setWeapons(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred')
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      const data = await WeaponsService.getAllWeapons();
      setWeapons(data);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('An unknown error occurred')
      );
    } finally {
      setLoading(false);
    }
  };

  return {weapons, loading, error, refetch};
};
