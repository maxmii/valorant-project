import './App.css';
import MainLayout from './layout/MainLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AgentPage from './pages/agents.page';
import WeaponsPage from './pages/weapons';

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
