import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, MousePointerClick, Eye, Target } from 'lucide-react';

const mockChartData = [
  45, 60, 35, 80, 55, 90, 70, 85, 40, 65, 50, 75, 85, 95
];

const campaignsData = [
  {
    id: 1,
    name: 'Q3 Premium Web Dev Push',
    status: 'Active',
    spend: '$4,250',
    cpa: '$12.50',
    conversions: 340,
    image: '/images/image1.jpeg'
  },
  {
    id: 2,
    name: 'Digital Marketing Outreach',
    status: 'Active',
    spend: '$1,800',
    cpa: '$8.20',
    conversions: 219,
    image: '/images/image2.jpeg'
  },
  {
    id: 3,
    name: 'E-Comm Store Launch Promo',
    status: 'Paused',
    spend: '$8,400',
    cpa: '$15.00',
    conversions: 560,
    image: '/images/image3.jpeg'
  },
  {
    id: 4,
    name: 'Retargeting Node Alpha',
    status: 'Active',
    spend: '$950',
    cpa: '$5.40',
    conversions: 175,
    image: '/images/image4.jpeg'
  }
];

export default function DashboardHome() {
  return (
    <>
      {/* Metrics Grid */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-title">Total Ad Spend</div>
          <div className="metric-value">$15,400</div>
          <div className="metric-change change-pos">
            <TrendingUp size={14} /> +12.5% vs last month
          </div>
          <DollarSign size={80} style={{ position: 'absolute', right: '-10px', top: '10px', opacity: 0.05, color: '#f8fafc' }} />
        </div>
        
        <div className="metric-card">
          <div className="metric-title">Total Impressions</div>
          <div className="metric-value">2.4M</div>
          <div className="metric-change change-pos">
            <TrendingUp size={14} /> +8.2% vs last month
          </div>
          <Eye size={80} style={{ position: 'absolute', right: '-10px', top: '10px', opacity: 0.05, color: '#f8fafc' }} />
        </div>
        
        <div className="metric-card">
          <div className="metric-title">Avg. Click-Through Rate</div>
          <div className="metric-value">4.8%</div>
          <div className="metric-change change-neg">
            <TrendingDown size={14} /> -1.1% vs last month
          </div>
          <MousePointerClick size={80} style={{ position: 'absolute', right: '-10px', top: '10px', opacity: 0.05, color: '#f8fafc' }} />
        </div>
        
        <div className="metric-card">
          <div className="metric-title">Total Conversions</div>
          <div className="metric-value">1,294</div>
          <div className="metric-change change-pos">
            <TrendingUp size={14} /> +24.4% vs last month
          </div>
          <Target size={80} style={{ position: 'absolute', right: '-10px', top: '10px', opacity: 0.05, color: '#f8fafc' }} />
        </div>
      </div>

      {/* Main Dashboard Area */}
      <div className="dashboard-grid">
        {/* Main Chart */}
        <div className="glass-panel">
          <div className="panel-header">Performance Over Time</div>
          <div className="mock-chart">
            {mockChartData.map((val, idx) => (
              <div 
                key={idx} 
                className="chart-bar" 
                style={{ height: `${val}%` }}
                title={`Value: ${val}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Table Area */}
        <div className="glass-panel">
          <div className="panel-header">Recent Campaigns Overview</div>
          <table className="campaign-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Status</th>
                <th>Spend</th>
                <th>CPA</th>
              </tr>
            </thead>
            <tbody>
              {campaignsData.map((camp) => (
                <tr key={camp.id}>
                  <td>
                    <div className="campaign-cell">
                      <img src={camp.image} alt={camp.name} className="campaign-thumb" />
                      <span className="campaign-name">{camp.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge ${camp.status === 'Active' ? 'status-active' : 'status-paused'}`}>
                      {camp.status}
                    </span>
                  </td>
                  <td style={{ color: '#f8fafc', fontWeight: 600 }}>{camp.spend}</td>
                  <td>{camp.cpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
