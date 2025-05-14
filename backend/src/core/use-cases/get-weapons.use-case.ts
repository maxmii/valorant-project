import {Injectable, Logger} from '@nestjs/common';
import axios from 'axios';
import {WeaponsMapper} from '../mappers';
import {IWeapon} from '../interfaces/weapons.interface';
import {IWeaponQueries} from '../interfaces/weapons.queries.interface';
@Injectable()
export class GetWeaponsUseCase {
  private readonly logger = new Logger(GetWeaponsUseCase.name);

  constructor(private readonly weaponsMapper: WeaponsMapper) {}

  public async execute({
    weaponName,
    weaponType,
  }: IWeaponQueries): Promise<IWeapon[]> {
    const apiUrl = process.env.API_URL;
    const resData = await axios
      .get(`${apiUrl}/weapons`)
      .then((res) => res.data.data);

    const filteredData = resData.filter((data) => data.displayName !== 'Melee');

    return this.weaponsMapper.mapWeapons(filteredData, weaponName, weaponType);
  }
}
