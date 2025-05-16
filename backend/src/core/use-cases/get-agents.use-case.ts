import {Injectable, Logger} from '@nestjs/common';
import axios from 'axios';
import {AgentsMapper} from '../mappers/agents.mapper';
import {IAgent} from '../interfaces/agents.interface';
import {IAgentQueries} from '../interfaces/agent.queries.interface';
@Injectable()
export class GetAgentsUseCase {
  private readonly logger = new Logger(GetAgentsUseCase.name);

  constructor(private readonly agentsMapper: AgentsMapper) {}

  public async execute({
    agentName,
    agentRole,
  }: IAgentQueries): Promise<IAgent[]> {
    const apiUrl = process.env.API_URL;
    const resData = await axios
      .get(`${apiUrl}/agents?isPlayableCharacter=true`)
      .then((res) => res.data.data);

    return this.agentsMapper.mapAgents(resData, agentName, agentRole);
  }
}
