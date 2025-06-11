import {Controller, Get, Param, Query} from '@nestjs/common';
import {IWeapon} from '@shared/interfaces';
import {GetWeaponsUseCase} from '../../core/use-cases/get-weapons.use-case';

@Controller({
  version: '1',
  path: 'weapons',
})
export class WeaponsController {
  constructor(private readonly getWeaponsUseCase: GetWeaponsUseCase) {}

  @Get()
  getAllWeapons(@Query('weaponType') weaponType: string): Promise<IWeapon[]> {
    return this.getWeaponsUseCase.execute({weaponType});
  }

  @Get(':weaponName')
  getWeaponByName(@Param('weaponName') weaponName: string): Promise<IWeapon[]> {
    return this.getWeaponsUseCase.execute({weaponName});
  }
}
