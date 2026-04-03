import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Activity, 
  Target,
  CreditCard, 
  Settings, 
  Calendar,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Campaigns', path: '/campaigns', icon: Target },
  { name: 'Analytics', path: '/analytics', icon: Activity },
  { name: 'Billing', path: '/billing', icon: CreditCard },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">A</div>
          <div className="brand-text">Ad Flow Pro</div>
        </div>
        
        <nav className="nav-menu">
          {navItems.map((item, idx) => (
            <NavLink 
              key={idx} 
              to={item.path} 
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              end={item.path === '/'}
            >
              <item.icon size={20} />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="page-title">Executive Overview</div>
          <div className="top-actions">
            <button className="btn-daterange">
              <Calendar size={16} />
              Last 30 Days
            </button>
            <div className="avatar"></div>
          </div>
        </header>

        {/* Dynamic Route Rendering */}
        <Outlet />
      </main>
    </div>
  );
}
