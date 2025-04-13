import {HttpException, Injectable, Logger} from '@nestjs/common';
import {IAgent} from '../interfaces/agents.interface';

@Injectable()
export class AgentsMapper {
  private readonly logger = new Logger(AgentsMapper.name);

  constructor() {}

  public mapAgents(agentData: IAgent[], agentName: string | null): any[] {
    let data = agentData;

    try {
      if (agentName) {
        const agent = agentData.filter(
          (agent) =>
            agent.displayName.toLowerCase() === agentName.toLowerCase(),
        );

        if (agent.length === 0) {
          const err = new Error('Agent cannot be found sorry');
          this.logger.error(`Error: ${err.message}`);

          throw err;
        }

        data = agent;
      }

      return data.map(
        ({
          displayName,
          description,
          abilities,
          isPlayableCharacter,
          fullPortrait,
          fullPortraitV2,
        }) => ({
          agentName: displayName,
          agentDescription: description,
          agentAbilities: abilities,
          playable: isPlayableCharacter,
          agentPortrait: fullPortrait,
          agentPortraitV2: fullPortraitV2,
        }),
      );
    } catch (err: unknown) {
      throw err;
    }
  }
}
