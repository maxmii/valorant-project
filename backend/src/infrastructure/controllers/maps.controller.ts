import {Controller, Get, Param, Query} from '@nestjs/common';
import {GetMapsUseCase} from '../../core/use-cases/get-maps.use-case';
import { IMap } from '@shared/interfaces';

@Controller({
  version: '1',
  path: 'maps',
})
export class MapsController {
  constructor(private readonly getMapsUseCase: GetMapsUseCase) {}

  @Get()
  getAllMaps(@Query('sites') sites: string): Promise<IMap[]> {
    try {
      const siteCount = sites ? parseInt(sites, 10) : null;
      return this.getMapsUseCase.execute({siteCount});
    } catch (error) {
      console.error(error?.message || error);
      throw error;
    }
  }
}
