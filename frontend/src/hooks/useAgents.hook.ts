/**
 * Custom hook for fetching and managing agent data
 */

import {useState, useEffect} from 'react';
import type {IAgent} from '@shared/interfaces';
import {AgentsService} from '../services/agents.service';

export const useAgents = (selectedRole: string) => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const agents = await AgentsService.getAllAgents(selectedRole);
        setAgents(agents);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred')
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, [selectedRole]);

  const refetch = async () => {
    try {
      setLoading(true);
      const data = await AgentsService.getAllAgents();
      setAgents(data);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('An unknown error occurred')
      );
    } finally {
      setLoading(false);
    }
  };

  return {agents, loading, error, refetch};
};
