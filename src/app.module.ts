import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {AgentsController} from './infrastructure/controllers';
import {GetAgentsUseCase} from './core/use-cases';
import {AgentsMapper} from './core/mappers';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AgentsController],
  providers: [AppService, GetAgentsUseCase, AgentsMapper],
})
export class AppModule {}
