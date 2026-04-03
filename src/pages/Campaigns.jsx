import React, { useState } from 'react';
import { Plus, X, Edit2, Trash2, Check, AlertCircle } from 'lucide-react';

const initialCampaigns = [
  {
    id: 1,
    name: 'Q3 Premium Web Dev Push',
    status: 'Active',
    spend: '$4,250',
    cpa: '$12.50',
    conversions: 340,
    image: '/images/image1.jpeg',
    type: 'Premium'
  },
  {
    id: 2,
    name: 'Digital Marketing Outreach',
    status: 'Under Review',
    spend: '$0',
    cpa: '-',
    conversions: 0,
    image: '/images/image2.jpeg',
    type: 'Standard'
  },
  {
    id: 3,
    name: 'E-Comm Store Launch Promo',
    status: 'Paused',
    spend: '$8,400',
    cpa: '$15.00',
    conversions: 560,
    image: '/images/image3.jpeg',
    type: 'Premium'
  },
  {
    id: 4,
    name: 'Retargeting Node Alpha',
    status: 'Draft',
    spend: '$0',
    cpa: '-',
    conversions: 0,
    image: '/images/image4.jpeg',
    type: 'Basic'
  }
];

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAd, setNewAd] = useState({ name: '', type: 'Basic', budget: '' });

  const handleCreateAd = (e) => {
    e.preventDefault();
    const ad = {
      id: campaigns.length + 1,
      name: newAd.name,
      status: 'Draft',
      spend: '$0',
      cpa: '-',
      conversions: 0,
      image: '/images/image1.jpeg', // Placeholder
      type: newAd.type
    };
    setCampaigns([...campaigns, ad]);
    setIsModalOpen(false);
    setNewAd({ name: '', type: 'Basic', budget: '' });
  };

  return (
    <div className="campaigns-container">
      <div className="panel-header" style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '20px', fontWeight: '700' }}>Campaign Management</div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} />
          Create New Ad
        </button>
      </div>

      <div className="glass-panel">
        <table className="campaign-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Total Spend</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((camp) => (
              <tr key={camp.id}>
                <td>
                  <div className="campaign-cell">
                    <img src={camp.image} alt="" className="campaign-thumb" />
                    <span className="campaign-name">{camp.name}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${
                    camp.status === 'Active' ? 'status-active' : 
                    camp.status === 'Under Review' ? 'status-paused' : 'status-outline'
                  }`}>
                    {camp.status}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)' }}>
                    {camp.type}
                  </span>
                </td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{camp.spend}</td>
                <td>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn-icon" title="Edit"><Edit2 size={14} /></button>
                    {camp.status === 'Under Review' && (
                      <button className="btn-icon btn-approve" title="Approve" onClick={() => {
                        setCampaigns(campaigns.map(c => c.id === camp.id ? {...c, status: 'Active'} : c))
                      }}><Check size={14} /></button>
                    )}
                    <button className="btn-icon btn-reject" title="Delete"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Ad Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <X className="close-btn" size={20} onClick={() => setIsModalOpen(false)} />
            <h2 style={{ marginBottom: '1.5rem', fontSize: '20px' }}>Create New Ad Campaign</h2>
            <form onSubmit={handleCreateAd}>
              <div className="form-group">
                <label>Campaign Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter campaign name..." 
                  required
                  value={newAd.name}
                  onChange={(e) => setNewAd({...newAd, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Package Type</label>
                <select 
                  className="form-control"
                  value={newAd.type}
                  onChange={(e) => setNewAd({...newAd, type: e.target.value})}
                >
                  <option value="Basic">Basic (7 Days)</option>
                  <option value="Standard">Standard (15 Days)</option>
                  <option value="Premium">Premium (30 Days)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Initial Budget ($)</label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="e.g. 1000" 
                  value={newAd.budget}
                  onChange={(e) => setNewAd({...newAd, budget: e.target.value})}
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Initialize Campaign</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
