import type { IWeapon } from '@shared/interfaces/weapons.interface';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const WeaponsService = {
  async getAllWeapons(): Promise<IWeapon[]> {
    try {
      const res = await fetch(`${API_URL}/v1/weapons`);

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      return res.json();
    } catch (error) {
      console.error(`Error fetching weapons: ${error}`);
      throw error;
    }
  },
};