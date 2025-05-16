import {Test, TestingModule} from '@nestjs/testing';
import {GetAgentsUseCase} from '../../../src/core/use-cases/get-agents.use-case';
import {AgentsMapper} from '../../../src/core/mappers/agents.mapper';
import {IAgent} from '../../../src/core/interfaces/agents.interface';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('GetAgentsUseCase', () => {
  let useCase: GetAgentsUseCase;
  let agentsMapper: AgentsMapper;

  const mockAgentApiResponse = {
    data: {
      data: [
        {
          uuid: '1234',
          displayName: 'Jett',
          description: 'Fast moving duelist',
          abilities: [
            {
              slot: 'Ability1',
              displayName: 'Updraft',
              description: 'INSTANTLY propel Jett high into the air.',
              displayIcon:
                'https://media.valorant-api.com/abilities/updraft-icon.png',
            },
          ],
          fullPortrait:
            'https://media.valorant-api.com/agents/jett/portrait.png',
          fullPortraitV2:
            'https://media.valorant-api.com/agents/jett/portraitv2.png',
          role: {
            displayName: 'Duelist',
          },
        },
        {
          uuid: '5678',
          displayName: 'Phoenix',
          description: 'Fire-wielding duelist',
          abilities: [
            {
              slot: 'Ability1',
              displayName: 'Hot Hands',
              description: 'EQUIP a fireball. FIRE to throw a fireball.',
              displayIcon:
                'https://media.valorant-api.com/abilities/hot-hands-icon.png',
            },
          ],
          fullPortrait:
            'https://media.valorant-api.com/agents/phoenix/portrait.png',
          fullPortraitV2:
            'https://media.valorant-api.com/agents/phoenix/portraitv2.png',
          role: {
            displayName: 'Duelist',
          },
        },
      ],
    },
  };

  const mockMappedAgents: IAgent[] = [
    {
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
      ],
      agentPortrait: 'https://media.valorant-api.com/agents/jett/portrait.png',
      agentPortraitV2:
        'https://media.valorant-api.com/agents/jett/portraitv2.png',
      agentRole: 'Duelist',
    },
    {
      agentName: 'Phoenix',
      agentDescription: 'Fire-wielding duelist',
      agentAbilities: [
        {
          slot: 'Ability1',
          displayName: 'Hot Hands',
          description: 'EQUIP a fireball. FIRE to throw a fireball.',
          displayIcon:
            'https://media.valorant-api.com/abilities/hot-hands-icon.png',
        },
      ],
      agentPortrait:
        'https://media.valorant-api.com/agents/phoenix/portrait.png',
      agentPortraitV2:
        'https://media.valorant-api.com/agents/phoenix/portraitv2.png',
      agentRole: 'Duelist',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAgentsUseCase,
        {
          provide: AgentsMapper,
          useValue: {
            mapAgents: jest.fn(),
          },
        },
      ],
    }).compile();

    useCase = module.get<GetAgentsUseCase>(GetAgentsUseCase);
    agentsMapper = module.get<AgentsMapper>(AgentsMapper);

    // Set environment variable for tests
    process.env.API_URL = 'https://valorant-api.com';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should fetch agents and map them correctly', async () => {
      mockedAxios.get.mockResolvedValue(mockAgentApiResponse);
      jest.spyOn(agentsMapper, 'mapAgents').mockReturnValue(mockMappedAgents);

      const result = await useCase.execute({});

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://valorant-api.com/agents?isPlayableCharacter=true',
      );
      expect(agentsMapper.mapAgents).toHaveBeenCalledWith(
        mockAgentApiResponse.data.data,
        undefined,
        undefined,
      );
      expect(result).toEqual(mockMappedAgents);
    });

    it('should pass agent name to mapper when provided', async () => {
      mockedAxios.get.mockResolvedValue(mockAgentApiResponse);
      jest
        .spyOn(agentsMapper, 'mapAgents')
        .mockReturnValue([mockMappedAgents[0]]);

      const result = await useCase.execute({agentName: 'Jett'});

      expect(agentsMapper.mapAgents).toHaveBeenCalledWith(
        mockAgentApiResponse.data.data,
        'Jett',
        undefined,
      );
      expect(result).toEqual([mockMappedAgents[0]]);
    });

    it('should pass agent role to mapper when provided', async () => {
      mockedAxios.get.mockResolvedValue(mockAgentApiResponse);
      jest.spyOn(agentsMapper, 'mapAgents').mockReturnValue(mockMappedAgents);

      const result = await useCase.execute({agentRole: 'Duelist'});

      expect(agentsMapper.mapAgents).toHaveBeenCalledWith(
        mockAgentApiResponse.data.data,
        undefined,
        'Duelist',
      );
      expect(result).toEqual(mockMappedAgents);
    });

    it('should handle API errors gracefully', async () => {
      const error = new Error('API Error');
      mockedAxios.get.mockRejectedValue(error);

      await expect(useCase.execute({})).rejects.toThrow('API Error');
    });
  });
});
