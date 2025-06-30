import {Test, TestingModule} from '@nestjs/testing';
import {AgentsMapper} from '../../../src/core/mappers/agents.mapper';
import {mockAgentDto} from 'tests/data/mockAgentData';
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
      const result = mapper.mapAgents(mockAgentDto, null, null);

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        agentName: 'Jett',
        agentDescription:
          "Representing her home country of South Korea, Jett'\s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
        agentAbilities: [
          {
            slot: 'Ability1',
            displayName: 'Updraft',
            description: 'INSTANTLY propel Jett high into the air.',
            displayIcon:
              'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png',
          },
          {
            slot: 'Ability2',
            displayName: 'Tailwind',
            description:
              'ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.',
            displayIcon:
              'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png',
          },
          {
            slot: 'Grenade',
            displayName: 'Cloudburst',
            description:
              'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
            displayIcon:
              'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png',
          },
          {
            slot: 'Ultimate',
            displayName: 'Blade Storm',
            description:
              'EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.',
            displayIcon:
              'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png',
          },
          {
            slot: 'Passive',
            displayName: 'Drift',
            description:
              'Holding the jump button while falling allows you to glide through the air.',
            displayIcon:
              'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png',
          },
        ],
        agentPortrait:
          'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png',
        agentPortraitV2:
          'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png',
        agentRole: 'Duelist',
      });
    });

    it('should filter agents by name when provided', () => {
      const result = mapper.mapAgents(mockAgentDto, 'Jett', null);

      expect(result).toHaveLength(1);
      expect(result[0].agentName).toBe('Jett');
    });

    it('should filter agents by role when provided', () => {
      const result = mapper.mapAgents(mockAgentDto, null, 'Initiator');

      expect(result).toHaveLength(1);
      expect(result[0].agentName).toBe('Gekko');
      expect(result[0].agentRole).toBe('Initiator');
    });

    it('should handle case insensitive filtering', () => {
      const result = mapper.mapAgents(mockAgentDto, 'jett', null);

      expect(result).toHaveLength(1);
      expect(result[0].agentName).toBe('Jett');
    });

    it('should throw error when no agents match filters', () => {
      expect(() =>
        mapper.mapAgents(mockAgentDto, 'NonExistentAgent', null),
      ).toThrow('Agent cannot be found sorry');
    });

    it('should throw error when input data is empty', () => {
      expect(() => mapper.mapAgents([], null, null)).toThrow(
        'Agent cannot be found sorry',
      );
    });
  });
});
