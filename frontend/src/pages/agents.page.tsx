import {useAgents} from '../hooks/useAgents.hook';
import {useState} from 'react';
import '../styles/pages/index.css';
import '../styles/layout/pageLayout.css';
import '../styles/components/buttons.css';
import {RoleButtons} from '../components/filterButton';

const AgentPage = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const {agents, loading, error, refetch} = useAgents(selectedRole);
  const loadingAgentsString = 'Loading Agents';
  const roles = [
    {name: 'Duelists', value: 'duelist'},
    {name: 'Sentinels', value: 'sentinel'},
    {name: 'Initiators', value: 'initiator'},
    {name: 'Controllers', value: 'controller'},
  ];

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

      <div className='button-containers'>
        <button onClick={refetch} className="refresh-button">
          Refresh Agents
        </button>

        <RoleButtons
          selectedFilter={selectedRole}
          setSelectedFilter={setSelectedRole}
          filter={roles}
        />
      </div>

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
