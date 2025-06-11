import type {IAgent} from '@shared/interfaces/agents.interface';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const AgentsService = {
  async getAllAgents(selectedRole: string = ''): Promise<IAgent[]> {
    try {
      const res = await fetch(`${API_URL}/v1/agents?agentRole=${selectedRole}`);

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const agentData = await res.json();

      return agentData.sort((a: IAgent, b: IAgent) =>
        a.agentName.localeCompare(b.agentName)
      );
    } catch (error) {
      console.error(`Error fetching agents: ${error}`);
      throw error;
    }
  },
};
