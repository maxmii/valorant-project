import {Injectable, Logger} from '@nestjs/common';
import {AgentsMapper} from '../mappers/agents.mapper';
import {IAgent, IAgentQueries} from '@shared/interfaces';
import {fetchApiResource} from '../../infrastructure/services/fetch-api.service';
import {AgentDto} from '@shared/interfaces/dto/agents.dto';

@Injectable()
export class GetAgentsUseCase {
  private readonly logger = new Logger(GetAgentsUseCase.name);

  constructor(private readonly agentsMapper: AgentsMapper) {}

  public async execute({
    agentName,
    agentRole,
  }: IAgentQueries): Promise<IAgent[]> {
    const resData = await fetchApiResource<AgentDto[]>('agents?isPlayableCharacter=true');

    return this.agentsMapper.mapAgents(resData, agentName, agentRole);
  }
}
