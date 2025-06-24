import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {
  AgentsController,
  WeaponsController,
  MapsController,
} from './infrastructure/controllers';
import {
  GetAgentsUseCase,
  GetWeaponsUseCase,
  GetMapsUseCase,
} from './core/use-cases';
import {AgentsMapper, WeaponsMapper, ValorantMapsMapper} from './core/mappers';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    AgentsController,
    WeaponsController,
    MapsController,
  ],
  providers: [
    AppService,
    GetAgentsUseCase,
    GetWeaponsUseCase,
    GetMapsUseCase,
    AgentsMapper,
    WeaponsMapper,
    ValorantMapsMapper,
  ],
})
export class AppModule {}
