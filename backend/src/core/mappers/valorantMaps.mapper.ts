import {Injectable, Logger} from '@nestjs/common';
// import {IMapQueries} from '@shared/interfaces/maps.queries.interface';
import {MapDto} from '@shared/interfaces/dto/map.dto';
import {IMap} from '../../../../shared/interfaces/map.interface';

@Injectable()
export class ValorantMapsMapper {
  private readonly logger = new Logger(ValorantMapsMapper.name);
  constructor() {}

  public mapValorantMaps({siteCount}, mapData: MapDto[]) {
    try {
      let filteredData = mapData;

      if (siteCount) {
        filteredData = mapData.filter(
          (item: MapDto) =>
            siteCount === this.getSiteCount(item.tacticalDescription),
        );
      }

      return filteredData.map(
        ({
          displayName,
          displayIcon,
          listViewIcon,
          listViewIconTall,
          splash,
          tacticalDescription,
          stylizedBackgroundImage,
          premierBackgroundImage,
        }): IMap => ({
          mapName: displayName,
          mapDisplayIcon: displayIcon,
          mapListViewIcon: listViewIcon,
          mapListViewIconTall: listViewIconTall,
          mapSplash: splash,
          mapStylizedBackgroundImage: stylizedBackgroundImage,
          mapPremierBackgroundImage: premierBackgroundImage,
          siteCount: this.getSiteCount(tacticalDescription),
        }),
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(error.message);
        throw error;
      }
    }
  }

  private getSiteCount(tacticalDescription: string): number {
    if (typeof tacticalDescription !== 'string') {
      return 0;
    }

    return tacticalDescription.replace(' Sites', '').split('/').length;
  }
}
