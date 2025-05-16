import {Injectable, Logger} from '@nestjs/common';
import {AgentRole} from '../interfaces/agentRole.enum';
import {AgentDto} from '../interfaces/dto/agents.dto';
import {IAgent} from '../interfaces/agents.interface';

@Injectable()
export class AgentsMapper {
  private readonly logger = new Logger(AgentsMapper.name);
  constructor() {}

  public mapAgents(
    agentData: AgentDto[],
    agentName: string | null,
    agentRole: string | null,
  ): IAgent[] {
    try {
      const agents = agentData.filter((agent) =>
        agentName
          ? agent.displayName.toLowerCase() === agentName.toLowerCase()
          : true,
      );

      if (agents.length === 0) {
        const err = new Error('Agent cannot be found sorry');
        this.logger.error(`Error: ${err.message}`);

        throw err;
      }

      return agents
        .map(
          ({
            displayName,
            description,
            abilities,
            fullPortrait,
            fullPortraitV2,
            role,
          }) => ({
            agentName: displayName,
            agentDescription: description,
            agentAbilities: abilities,
            agentPortrait: fullPortrait,
            agentPortraitV2: fullPortraitV2,
            agentRole: role.displayName
          }),
        )
        .filter((agent) => !agentRole || agent.agentRole === agentRole);
    } catch (error) {
      this.logger.error(`Error: ${error.message}`);
      throw error;
    }
  }
}
