import type {ReactNode} from 'react';
import './MainLayout.css';
import {Outlet, Link} from 'react-router-dom';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <header className="header">
        <div className="logo">
          <h1>Valorant Project</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/agents">Agents</Link>
            </li>
            <li>
              <Link to="/weapons">Weapons</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        {children}
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Valorant Project</p>
      </footer>
    </div>
  );
};

export default MainLayout;
