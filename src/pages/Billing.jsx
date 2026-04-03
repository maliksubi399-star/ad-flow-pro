import React from 'react';
import { CreditCard, ShieldCheck, Clock, CheckCircle2, MoreVertical } from 'lucide-react';

const invoiceHistory = [
  { id: 'INV-00124', date: 'Oct 12, 2026', amount: '$420.00', status: 'Paid', method: 'Visa **** 4242' },
  { id: 'INV-00123', date: 'Sep 12, 2026', amount: '$420.00', status: 'Paid', method: 'Visa **** 4242' },
  { id: 'INV-00122', date: 'Aug 12, 2026', amount: '$420.00', status: 'Paid', method: 'Visa **** 4242' },
  { id: 'INV-00121', date: 'Jul 12, 2026', amount: '$420.00', status: 'Paid', method: 'Visa **** 4242' },
];

export default function Billing() {
  return (
    <div className="billing-container">
      <div className="panel-header" style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '20px', fontWeight: '700' }}>Billing & Subscriptions</div>
      </div>

      <div className="metrics-grid" style={{ marginBottom: '3rem' }}>
        <div className="metric-card" style={{ border: '1px solid var(--accent-cyan)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div className="metric-title" style={{ color: 'var(--accent-cyan)' }}>Current Plan</div>
            <ShieldCheck size={20} color="var(--accent-cyan)" />
          </div>
          <div className="metric-value">Premium</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Renews on Nov 12, 2026</div>
          <button className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', fontSize: '13px' }}>Change Plan</button>
        </div>

        <div className="metric-card">
          <div className="metric-title">Next Invoice Amount</div>
          <div className="metric-value">$420.00</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Due on Nov 12, 2026</div>
          <button className="btn-outline" style={{ marginTop: '1.5rem', width: '100%', fontSize: '13px' }}>View Details</button>
        </div>

        <div className="metric-card">
          <div className="metric-title">Payment Method</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '1rem 0' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px' }}>
              <CreditCard size={24} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>Visa ending in 4242</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Expires 12/28</div>
            </div>
          </div>
          <button className="btn-outline" style={{ width: '100%', fontSize: '13px' }}>Edit Method</button>
        </div>
      </div>

      <div className="glass-panel">
        <div className="panel-header">Recent Invoices</div>
        <table className="campaign-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoiceHistory.map((inv) => (
              <tr key={inv.id}>
                <td><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{inv.id}</span></td>
                <td>{inv.date}</td>
                <td style={{ fontWeight: '600' }}>{inv.amount}</td>
                <td>
                  <span className="status-badge status-active">
                   <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><CheckCircle2 size={12} /> {inv.status}</div>
                  </span>
                </td>
                <td>{inv.method}</td>
                <td><button className="btn-icon"><MoreVertical size={14} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
