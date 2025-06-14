import type {IAgentAbility, IAgentRole} from '@shared/interfaces';

export class AgentDto {
  uuid!: string;
  displayName!: string;
  description!: string;
  developerName!: string;
  releaseDate!: string;
  characterTags!: string[] | null;
  displayIcon!: string;
  displayIconSmall!: string;
  bustPortrait!: string;
  fullPortrait!: string;
  fullPortraitV2!: string;
  killfeedPortrait!: string;
  background!: string;
  backgroundGradientColors!: string[];
  assetPath!: string;
  isFullPortraitRightFacing!: boolean;
  isPlayableCharacter!: boolean;
  isAvailableForTest!: boolean;
  isBaseContent!: boolean;
  role!: IAgentRole;
  recruitmentData!: any | null;
  abilities!: IAgentAbility[];
  voiceLine!: any | null;
}
