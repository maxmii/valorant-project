import {Controller, Get} from '@nestjs/common';

@Controller({
  version: '1',
  path: 'weapons',
})
export class WeaponsController {
  constructor() {}


  @Get()
  getAllWeapons(): any {
    
  }
}
