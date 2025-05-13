import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {
  AgentsController,
  WeaponsController,
} from './infrastructure/controllers';
import {GetAgentsUseCase} from './core/use-cases';
import {AgentsMapper, WeaponsMapper} from './core/mappers';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AgentsController, WeaponsController],
  providers: [AppService, GetAgentsUseCase, AgentsMapper, WeaponsMapper],
})
export class AppModule {}
