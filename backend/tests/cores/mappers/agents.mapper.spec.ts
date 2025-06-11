import {Test, TestingModule} from '@nestjs/testing';
import {AgentsMapper} from '../../../src/core/mappers/agents.mapper';
import {mockAgentDataInput} from 'tests/data/mockAgentDataInput';
describe('AgentsMapper', () => {
  let mapper: AgentsMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentsMapper],
    }).compile();

    mapper = module.get<AgentsMapper>(AgentsMapper);
  });

  describe('mapAgents', () => {
    it('should map agent data correctly', () => {
      const result = mapper.mapAgents(mockAgentDataInput, null, null);

      expect(result).toHaveLength(2); // Should filter out non-playable characters

      // Check first agent
      expect(result[0]).toEqual({
        agentName: 'Jett',
        agentDescription: 'Fast moving duelist',
        agentAbilities: [
          {
            slot: 'Ability1',
            displayName: 'Updraft',
            description: 'INSTANTLY propel Jett high into the air.',
            displayIcon:
              'https://media.valorant-api.com/abilities/updraft-icon.png',
          },
          {
            slot: 'Ability2',
            displayName: 'Tailwind',
            description:
              'ACTIVATE to prepare a gust of wind for a limited time.',
            displayIcon:
              'https://media.valorant-api.com/abilities/tailwind-icon.png',
          },
        ],
        agentPortrait:
          'https://media.valorant-api.com/agents/jett/portrait.png',
        agentPortraitV2:
          'https://media.valorant-api.com/agents/jett/portraitv2.png',
        agentRole: 'Duelist',
      });
    });

    it('should filter agents by name when provided', () => {
      const result = mapper.mapAgents(mockAgentDataInput, 'Jett', null);

      expect(result).toHaveLength(1);
      expect(result[0].agentName).toBe('Jett');
    });

    it('should filter agents by role when provided', () => {
      const result = mapper.mapAgents(mockAgentDataInput, null, 'Initiator');

      expect(result).toHaveLength(1);
      expect(result[0].agentName).toBe('Sova');
      expect(result[0].agentRole).toBe('Initiator');
    });

    it('should handle case insensitive filtering', () => {
      const result = mapper.mapAgents(mockAgentDataInput, 'jett', null);

      expect(result).toHaveLength(1);
      expect(result[0].agentName).toBe('Jett');
    });

    it('should throw error when no agents match filters', () => {
      expect(() =>
        mapper.mapAgents(mockAgentDataInput, 'NonExistentAgent', null),
      ).toThrow('Agent cannot be found sorry');
    });

    it('should throw error when input data is empty', () => {
      expect(() => mapper.mapAgents([], null, null)).toThrow(
        'Agent cannot be found sorry',
      );
    });
  });
});
