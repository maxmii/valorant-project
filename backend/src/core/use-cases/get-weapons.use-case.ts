import {Injectable, Logger} from '@nestjs/common';
import {fetchApiResource} from '../../infrastructure/services/fetch-api.service';
import {WeaponsMapper} from '../mappers';
import {IWeapon} from '@shared/interfaces';
import {IWeaponQueries} from '@shared/interfaces/queries';
import {WeaponDto} from '@shared/interfaces/dto/weapons.dto';
@Injectable()
export class GetWeaponsUseCase {
  private readonly logger = new Logger(GetWeaponsUseCase.name);

  constructor(private readonly weaponsMapper: WeaponsMapper) {}

  public async execute({
    weaponName,
    weaponType,
  }: IWeaponQueries): Promise<IWeapon[]> {
    const resData = await fetchApiResource<WeaponDto[]>('weapons');

    const filteredData = resData.filter((data) => data.displayName !== 'Melee');

    return this.weaponsMapper.mapWeapons(filteredData, weaponName, weaponType);
  }
}
