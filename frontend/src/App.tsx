import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AgentPage from './pages/agents.page';
import MainLayout from './layout/MainLayout';
import WeaponsPage from './pages/weapons.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div>Welcome to the Valorant Project</div>} />
          <Route path="agents" element={<AgentPage />} />
          <Route path="weapons" element={<WeaponsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
