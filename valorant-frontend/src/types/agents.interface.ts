// Agent-related interfaces
export interface IAgentRole {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

export interface IAgentAbility {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface IAgent {
  agentName: string;
  agentDescription: string;
  agentAbilities: IAgentAbility[];
  agentPortrait: string;
  agentPortraitV2: string;
  agentRole: string;
}
