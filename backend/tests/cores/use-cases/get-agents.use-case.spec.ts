import {Test, TestingModule} from '@nestjs/testing';
import {GetAgentsUseCase} from '../../../src/core/use-cases/get-agents.use-case';
import {AgentsMapper} from '../../../src/core/mappers/agents.mapper';
import {IAgent} from '@shared/interfaces/agents.interface';
import {fetchApiResource} from 'src/infrastructure/services/fetch-api.service';

jest.mock('src/infrastructure/services/fetch-api.service');
const mockedFetchApiResource = fetchApiResource as jest.Mock;

describe('GetAgentsUseCase', () => {
  let useCase: GetAgentsUseCase;
  let agentsMapper: AgentsMapper;

  const mockAgentApiResponse = [
    {
      abilities: [
        {
          description: 'INSTANTLY propel Jett high into the air.',
          displayIcon:
            'https://media.valorant-api.com/abilities/updraft-icon.png',
          displayName: 'Updraft',
          slot: 'Ability1',
        },
      ],
      description: 'Fast moving duelist',
      displayName: 'Jett',
      fullPortrait: 'https://media.valorant-api.com/agents/jett/portrait.png',
      fullPortraitV2:
        'https://media.valorant-api.com/agents/jett/portraitv2.png',
      role: {displayName: 'Duelist'},
      uuid: '1234',
    },
    {
      abilities: [
        {
          description: 'EQUIP a fireball. FIRE to throw a fireball.',
          displayIcon:
            'https://media.valorant-api.com/abilities/hot-hands-icon.png',
          displayName: 'Hot Hands',
          slot: 'Ability1',
        },
      ],
      description: 'Fire-wielding duelist',
      displayName: 'Phoenix',
      fullPortrait:
        'https://media.valorant-api.com/agents/phoenix/portrait.png',
      fullPortraitV2:
        'https://media.valorant-api.com/agents/phoenix/portraitv2.png',
      role: {displayName: 'Duelist'},
      uuid: '5678',
    },
  ];

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

    agentsMapper = module.get<AgentsMapper>(AgentsMapper);

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
      mockedFetchApiResource.mockResolvedValue(mockAgentApiResponse);
      (agentsMapper.mapAgents as jest.Mock).mockReturnValue(mockMappedAgents);

      const result = await useCase.execute({});

      expect(mockedFetchApiResource).toHaveBeenCalledWith(
        'agents?isPlayableCharacter=true',
      );
      expect(agentsMapper.mapAgents).toHaveBeenCalledWith(
        mockAgentApiResponse,
        undefined,
        undefined,
      );
      expect(result).toEqual(mockMappedAgents);
    });

    it('should pass agent name to mapper when provided', async () => {
      mockedFetchApiResource.mockResolvedValue(mockAgentApiResponse);
      (agentsMapper.mapAgents as jest.Mock).mockReturnValue([mockMappedAgents[0]]);

      const result = await useCase.execute({agentName: 'Jett'});

      expect(agentsMapper.mapAgents).toHaveBeenCalledWith(
        mockAgentApiResponse,
        'Jett',
        undefined,
      );
      expect(result).toEqual([mockMappedAgents[0]]);
    });

    it('should pass agent role to mapper when provided', async () => {
      mockedFetchApiResource.mockResolvedValue(mockAgentApiResponse);
      (agentsMapper.mapAgents as jest.Mock).mockReturnValue(mockMappedAgents);

      const result = await useCase.execute({agentRole: 'Duelist'});

      expect(agentsMapper.mapAgents).toHaveBeenCalledWith(
        mockAgentApiResponse,
        undefined,
        'Duelist',
      );
      expect(result).toEqual(mockMappedAgents);
    });

    it('should handle API errors gracefully', async () => {
      const error = new Error('API Error');
      mockedFetchApiResource.mockRejectedValue(error);

      await expect(useCase.execute({})).rejects.toThrow('API Error');
    });
  });
});
