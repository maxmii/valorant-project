import type {IAgent} from '../types/agents.interface';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const AgentsService = {
  async getAllAgents(): Promise<IAgent[]> {
    try {
      const res = await fetch(`${API_URL}/v1/agents`);

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
      }

      return res.json()
    } catch (error) {
      console.error(`Error fetching agents: ${error}`);
      throw error;
    }
  },
};
