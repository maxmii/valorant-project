import {Injectable, Logger} from '@nestjs/common';
import axios from 'axios';
import {AgentsMapper} from '../mappers/agent.mapper';

@Injectable()
export class GetAgentsUseCase {
  private readonly logger = new Logger(GetAgentsUseCase.name);

  constructor(private readonly agentsMapper: AgentsMapper) {}

  public async execute(agentName: string | null = null): Promise<any> {
    const apiUrl = process.env.API_URL;
    this.logger.log(apiUrl);
    const resData = await axios
      .get(`${apiUrl}/agents`)
      .then((res) => res.data.data);

    return this.agentsMapper.mapAgents(resData, agentName);
  }
}
