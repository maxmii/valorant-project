import {Injectable, Logger} from '@nestjs/common';
import {AgentRole} from '../interfaces/agentRole.enum';
import {AgentDto} from '../interfaces/dto/agents.dto';
import {IAgent} from '../interfaces/agents.interface';

@Injectable()
export class AgentsMapper {
  private readonly logger = new Logger(AgentsMapper.name);
  private agentRoles = new Map();
  constructor() {
    const agentRolesData: [string, AgentRole][] = [
      ['Brimstone', AgentRole.CONTROLLER],
      ['Viper', AgentRole.CONTROLLER],
      ['Omen', AgentRole.CONTROLLER],
      ['Astra', AgentRole.CONTROLLER],
      ['Harbor', AgentRole.CONTROLLER],
      ['Clove', AgentRole.CONTROLLER],
      ['Phoenix', AgentRole.DUELIST],
      ['Jett', AgentRole.DUELIST],
      ['Reyna', AgentRole.DUELIST],
      ['Raze', AgentRole.DUELIST],
      ['Yoru', AgentRole.DUELIST],
      ['Neon', AgentRole.DUELIST],
      ['Iso', AgentRole.DUELIST],
      ['Waylay', AgentRole.DUELIST],
      ['Sova', AgentRole.INITIATOR],
      ['Breach', AgentRole.INITIATOR],
      ['Skye', AgentRole.INITIATOR],
      ['Tejo', AgentRole.INITIATOR],
      ['KAY/O', AgentRole.INITIATOR],
      ['Fade', AgentRole.INITIATOR],
      ['Gekko', AgentRole.INITIATOR],
      ['Killjoy', AgentRole.SENTINEL],
      ['Cypher', AgentRole.INITIATOR],
      ['Sage', AgentRole.INITIATOR],
      ['Chamber', AgentRole.INITIATOR],
      ['Deadlock', AgentRole.INITIATOR],
      ['Vyse', AgentRole.INITIATOR],
    ];

    agentRolesData.forEach(([agent, role]) => this.agentRoles.set(agent, role));
  }

  public mapAgents(agentData: AgentDto[], agentName: string | null): IAgent[] {
    try {
      const agent = agentData.filter((agent) =>
        agentName
          ? agent.displayName.toLowerCase() === agentName.toLowerCase() &&
            agent.isPlayableCharacter
          : agent.isPlayableCharacter,
      );

      if (agent.length === 0) {
        const err = new Error('Agent cannot be found sorry');
        this.logger.error(`Error: ${err.message}`);

        throw err;
      }

      return agent.map(
        ({
          displayName,
          description,
          abilities,
          fullPortrait,
          fullPortraitV2,
        }) => ({
          agentName: displayName,
          agentDescription: description,
          agentAbilities: abilities,
          agentPortrait: fullPortrait,
          agentPortraitV2: fullPortraitV2,
          agentRole: this.getAgentRole(displayName),
        }),
      );
    } catch {
      const error = new Error(`Unable to retrieve agent ${agentName}`);
      this.logger.error(`Error: ${error.message}`);
      throw error;
    }
  }

  private getAgentRole(agentName: string): string {
    return this.agentRoles.get(agentName);
  }
}
