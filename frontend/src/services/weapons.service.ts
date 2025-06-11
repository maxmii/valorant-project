import type {IWeapon} from '@shared/interfaces/weapons.interface';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const WeaponsService = {
  async getAllWeapons(weaponType: string = ''): Promise<IWeapon[]> {
    try {
      const res = await fetch(`${API_URL}/v1/weapons?weaponType=${weaponType}`);

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const weaponsData = await res.json();

      return weaponsData.sort((a: IWeapon, b: IWeapon) =>
        a.weaponName.localeCompare(b.weaponName),
      );
    } catch (error) {
      console.error(`Error fetching weapons: ${error}`);
      throw error;
    }
  },
};
