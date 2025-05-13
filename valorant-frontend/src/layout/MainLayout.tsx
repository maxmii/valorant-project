import { ReactNode } from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <header className="header">
        <div className="logo">
          <h1>Valorant Project</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/agents">Agents</a></li>
            <li><a href="/weapons">Weapons</a></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        {children}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Valorant Project</p>
      </footer>
    </div>
  );
};

export default MainLayout;
