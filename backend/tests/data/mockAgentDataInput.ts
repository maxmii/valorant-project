import {AgentDto} from '../../src/core/interfaces/dto/agents.dto';

export const mockAgentDataInput: AgentDto[] = [
  {
    uuid: '1234',
    displayName: 'Jett',
    description: 'Fast moving duelist',
    developerName: 'Jett',
    releaseDate: '',
    characterTags: null,
    displayIcon: '',
    displayIconSmall: '',
    bustPortrait: '',
    fullPortrait: 'https://media.valorant-api.com/agents/jett/portrait.png',
    fullPortraitV2: 'https://media.valorant-api.com/agents/jett/portraitv2.png',
    killfeedPortrait: '',
    background: '',
    backgroundGradientColors: [],
    assetPath: '',
    isFullPortraitRightFacing: false,
    isPlayableCharacter: true,
    isAvailableForTest: false,
    isBaseContent: false,
    role: {
      uuid: 'dbe8757e-9e92-4ed4-b39f-9dfc589691d4',
      displayName: 'Duelist',
      description:
        'Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.',
      displayIcon:
        'https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png',
      assetPath:
        'ShooterGame/Content/Characters/_Core/Roles/Assault_PrimaryDataAsset',
    },
    recruitmentData: null,
    abilities: [
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
        description: 'ACTIVATE to prepare a gust of wind for a limited time.',
        displayIcon:
          'https://media.valorant-api.com/abilities/tailwind-icon.png',
      },
    ],
    voiceLine: null,
  },
  {
    uuid: '5678',
    displayName: 'Sova',
    description: 'Sova tracks, finds, and eliminates enemies.',
    developerName: 'Sova',
    releaseDate: '',
    characterTags: null,
    displayIcon: '',
    displayIconSmall: '',
    bustPortrait: '',
    fullPortrait: 'https://media.valorant-api.com/agents/sova/portrait.png',
    fullPortraitV2: 'https://media.valorant-api.com/agents/sova/portraitv2.png',
    killfeedPortrait: '',
    background: '',
    backgroundGradientColors: [],
    assetPath: '',
    isFullPortraitRightFacing: false,
    isPlayableCharacter: true,
    isAvailableForTest: false,
    isBaseContent: false,
    role: {
      uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
      displayName: 'Initiator',
      description:
        'Initiators challenge angles by setting up their team to enter contested ground and push defenders away.',
      displayIcon:
        'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
      assetPath:
        'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset',
    },
    recruitmentData: null,
    abilities: [
      {
        slot: 'Ability1',
        displayName: 'Shock Bolt',
        description: 'EQUIP a bow with a shock bolt.',
        displayIcon:
          'https://media.valorant-api.com/abilities/shockbolt-icon.png',
      },
    ],
    voiceLine: null,
  },
  {
    uuid: '9012',
    displayName: 'Default Agent',
    description: '',
    developerName: 'Default',
    releaseDate: '',
    characterTags: null,
    displayIcon: '',
    displayIconSmall: '',
    bustPortrait: '',
    fullPortrait: '',
    fullPortraitV2: '',
    killfeedPortrait: '',
    background: '',
    backgroundGradientColors: [],
    assetPath: '',
    isFullPortraitRightFacing: false,
    isPlayableCharacter: false,
    isAvailableForTest: false,
    isBaseContent: false,
    role: {
      uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
      displayName: 'Unknown',
      description: 'Unknown',
      displayIcon:
        'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
      assetPath:
        'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset',
    },
    recruitmentData: null,
    abilities: [],
    voiceLine: null,
  },
];
