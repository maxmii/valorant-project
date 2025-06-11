import {useAgents} from '../hooks/useAgents.hook';
import '../styles/pages/index.css';
import '../styles/layout/pageLayout.css';
import '../styles/components/buttons.css';

const AgentPage = () => {
  const {agents, loading, error, refetch} = useAgents();
  const loadingAgentsString = 'Loading Agents'

  if (loading) {
    return (
      <div className="loading-container">
        <h2>{`${loadingAgentsString}...`}</h2>
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>{`Error ${loadingAgentsString}`}</h2>
        <p>{error.message}</p>
        <button onClick={refetch} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Valorant Agents</h2>
      <button onClick={refetch} className="refresh-button">
        Refresh Agents
      </button>

      <div className="grid">
        {agents.map((agent) => (
          <div key={agent.agentName} className="card">
            <div className="agent-portrait">
              <img src={agent.agentPortrait} alt={agent.agentName} />
            </div>
            <div className="agent-info">
              <h3>{agent.agentName}</h3>
              <p className="agent-role">Role: {agent.agentRole}</p>
              <p className="agent-description">{agent.agentDescription}</p>

              <div className="agent-abilities">
                <h4>Abilities</h4>
                <ul>
                  {agent.agentAbilities.map((ability) => (
                    <li key={ability.slot}>
                      <strong>{ability.displayName}</strong>:{' '}
                      {ability.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentPage;
