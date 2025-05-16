import {Injectable, Logger} from '@nestjs/common';
import {WeaponDto} from '../interfaces/dto/weapons.dto';
import type {IWeapon} from '@shared/interfaces/weapons.interface';

@Injectable()
export class WeaponsMapper {
  private readonly logger = new Logger(WeaponsMapper.name);

  public mapWeapons(
    resData: WeaponDto[],
    weaponName = null,
    weaponType = null,
  ): IWeapon[] {
    try {
      if (resData.length === 0) {
        const err = new Error('Weapons cannot be found sorry');
        this.logger.error(`Error: ${err.message}`);

        throw err;
      }
      const weapons = resData.filter(
        (data) =>
          !weaponName ||
          data.displayName.toLowerCase() === weaponName.toLowerCase(),
      );

      return weapons
        .map(
          ({
            displayName,
            category,
            displayIcon,
            killStreamIcon,
            weaponStats,
          }) => ({
            weaponName: displayName,
            weaponType: this.getCategory(category),
            displayIcon: displayIcon,
            killStreamIcon: killStreamIcon,
            weaponStats: weaponStats,
          }),
        )
        .filter(
          (weapon) =>
            !weaponType ||
            weapon.weaponType.toLowerCase() === weaponType.toLowerCase(),
        );
    } catch {
      const error = new Error(`Unable to retrieve weapon`);
      this.logger.error(`Error: ${error.message}`);
      throw error;
    }
  }

  private getCategory(category: string): string {
    return category.replace('EEquippableCategory::', '');
  }
}
