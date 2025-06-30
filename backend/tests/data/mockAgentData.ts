import {IAgent} from '@shared/interfaces';

export const mockAgentDto = [
  {
    uuid: 'add6443a-41bd-e414-f6ad-e58d267f4e95',
    displayName: 'Jett',
    description:
      "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
    developerName: 'Wushu',
    releaseDate: '1970-01-01T00:00:00Z',
    characterTags: ['Evasion', 'Mobility'],
    displayIcon:
      'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png',
    displayIconSmall:
      'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png',
    bustPortrait:
      'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png',
    fullPortrait:
      'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png',
    fullPortraitV2:
      'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png',
    killfeedPortrait:
      'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/killfeedportrait.png',
    background:
      'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/background.png',
    backgroundGradientColors: ['90e3fdff', '557f8cff', '2b4e7cff', '1e3344ff'],
    assetPath: 'ShooterGame/Content/Characters/Wushu/Wushu_PrimaryAsset',
    isFullPortraitRightFacing: false,
    isPlayableCharacter: true,
    isAvailableForTest: true,
    isBaseContent: true,
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
    voiceLine: null,
  },
  {
    uuid: 'e370fa57-4757-3604-3648-499e1f642d3f',
    displayName: 'Gekko',
    description:
      'Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.',
    developerName: 'Aggrobot',
    releaseDate: '1970-01-01T00:00:00Z',
    characterTags: null,
    displayIcon:
      'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png',
    displayIconSmall:
      'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png',
    bustPortrait:
      'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png',
    fullPortrait:
      'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png',
    fullPortraitV2:
      'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png',
    killfeedPortrait:
      'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/killfeedportrait.png',
    background:
      'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png',
    backgroundGradientColors: ['c7f458ff', 'd56324ff', '3a2656ff', '3a7233ff'],
    assetPath: 'ShooterGame/Content/Characters/AggroBot/AggroBot_PrimaryAsset',
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
        displayName: 'Wingman',
        description:
          'EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule. INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown.',
        displayIcon:
          'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png',
      },
      {
        slot: 'Ability2',
        displayName: 'Dizzy',
        description:
          'EQUIP Dizzy. FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are Blinded. When Dizzy expires she reverts into a dormant globule. INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown.',
        displayIcon:
          'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability2/displayicon.png',
      },
      {
        slot: 'Grenade',
        displayName: 'Mosh Pit',
        description:
          'EQUIP Mosh. FIRE to throw Mosh like a grenade. ALT FIRE to lob. Upon landing Mosh duplicates across a large area that deals a small amount of damage over time then after a short delay explodes.',
        displayIcon:
          'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/grenade/displayicon.png',
      },
      {
        slot: 'Ultimate',
        displayName: 'Thrash',
        description:
          'EQUIP Thrash. FIRE to link with Thrash’s mind and steer her through enemy territory. ACTIVATE to lunge forward and explode, Detaining any players in a small radius. When Thrash expires she reverts into a dormant globule. INTERACT to reclaim the globule and gain another Thrash charge after a short cooldown. Thrash can be reclaimed once.',
        displayIcon:
          'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png',
      },
    ],
    voiceLine: null,
  },
];

export const mockMappedAgents: IAgent[] = [
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
    agentPortrait: 'https://media.valorant-api.com/agents/phoenix/portrait.png',
    agentPortraitV2:
      'https://media.valorant-api.com/agents/phoenix/portraitv2.png',
    agentRole: 'Duelist',
  },
];
