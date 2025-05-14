import {Controller, Get, Param} from '@nestjs/common';
import {IAgent} from 'src/core/interfaces/agents.interface';
import {GetAgentsUseCase} from 'src/core/use-cases/get-agents.use-case';

@Controller({
  version: '1',
  path: 'agents',
})
export class AgentsController {
  constructor(private readonly getAgentsUseCase: GetAgentsUseCase) {}

  @Get()
  getAllAgents(): Promise<IAgent[]> {
    return this.getAgentsUseCase.execute();
  }

  @Get(':agentName')
  getAgentByName(@Param('agentName') agentName: string): Promise<IAgent> {
    return this.getAgentsUseCase.execute(agentName);
  }
}
