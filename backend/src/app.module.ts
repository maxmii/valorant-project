import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {
  AgentsController,
  WeaponsController,
} from './infrastructure/controllers';
import {GetAgentsUseCase, GetWeaponsUseCase} from './core/use-cases';
import {AgentsMapper, WeaponsMapper} from './core/mappers';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AgentsController, WeaponsController],
  providers: [
    AppService,
    GetAgentsUseCase,
    GetWeaponsUseCase,
    AgentsMapper,
    WeaponsMapper,
  ],
})
export class AppModule {}
