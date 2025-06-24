import {Logger, Injectable} from '@nestjs/common';
import {IMapQueries} from '@shared/interfaces/maps.queries.interface';
import {fetchApiResource} from '../../infrastructure/services/fetch-api.service';
import {ValorantMapsMapper} from '../mappers/valorantMaps.mapper';
import {MapDto} from '@shared/interfaces/dto/map.dto';

@Injectable()
export class GetMapsUseCase {
  private readonly logger = new Logger(GetMapsUseCase.name);

  constructor(private readonly valMapMapper: ValorantMapsMapper) {}

  public async execute({siteCount}: IMapQueries): Promise<void> {
    const data = await fetchApiResource<MapDto[]>('maps');

    return this.valMapMapper.mapValorantMaps({siteCount}, data);
  }
}
