import {Controller, Get, Param} from '@nestjs/common';
import {GetAgentsUseCase} from 'src/core/use-cases/get-agents.use-case';

@Controller({
  version: '1',
  path: 'agents',
})
export class AgentsController {
  constructor(private readonly getAgentsUseCase: GetAgentsUseCase) {}

  @Get()
  getAllAgents(): any {
    return this.getAgentsUseCase.execute();
  }

  @Get(':agentName')
  getAgentByName(@Param('agentName') agentName: string): any {
    return this.getAgentsUseCase.execute(agentName);
  }
}
