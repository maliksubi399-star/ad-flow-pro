import React, { useState } from 'react';
import { User, Bell, Mail, Shield, Smartphone } from 'lucide-react';

const Toggle = ({ on, onClick }) => (
  <div className={`toggle-switch ${on ? 'on' : ''}`} onClick={onClick}>
    <div className="toggle-circle"></div>
  </div>
);

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    mobilePush: false,
    autoValidateAds: true,
    twoFactorAuth: false,
    publicProfile: true,
  });

  const toggleSetting = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="settings-container">
      <div className="panel-header" style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--accent-red)' }}>Platform & User Settings</div>
      </div>

      <div className="dashboard-grid" style={{ gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        {/* Profile and Account Info */}
        <div className="glass-panel" style={{ height: 'fit-content' }}>
          <div className="panel-header" style={{ fontSize: '16px' }}>Account Information</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div className="form-group">
                <label>Display Name</label>
                <input type="text" className="form-control" defaultValue="AdFlow Admin" />
            </div>
            <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" defaultValue="admin@adflowpro.com" />
            </div>
            <button className="btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '13px' }}>Update Profile</button>
          </div>
        </div>

        {/* Preferences and Toggles */}
        <div className="glass-panel">
          <div className="panel-header" style={{ fontSize: '16px' }}>Organization Preferences</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(0, 240, 255, 0.1)', padding: '10px', borderRadius: '8px' }}>
                  <Bell size={20} color="var(--accent-cyan)" />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Email Notifications</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Send alerts for ad approvals and expirations.</div>
                </div>
              </div>
              <Toggle on={settings.emailNotifications} onClick={() => toggleSetting('emailNotifications')} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(181, 96, 255, 0.1)', padding: '10px', borderRadius: '8px' }}>
                  <Shield size={20} color="var(--accent-purple)" />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Two-Factor Auth</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Secure your account using 2FA codes.</div>
                </div>
              </div>
              <Toggle on={settings.twoFactorAuth} onClick={() => toggleSetting('twoFactorAuth')} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(0, 255, 157, 0.1)', padding: '10px', borderRadius: '8px' }}>
                  <CheckCircle size={20} color="var(--accent-green)" />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Auto-Validate Ads</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Instantly approve ads from trusted sellers.</div>
                </div>
              </div>
              <Toggle on={settings.autoValidateAds} onClick={() => toggleSetting('autoValidateAds')} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '10px', borderRadius: '8px' }}>
                  <Smartphone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Mobile Push Alerts</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Get notifications on your mobile device.</div>
                </div>
              </div>
              <Toggle on={settings.mobilePush} onClick={() => toggleSetting('mobilePush')} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

const CheckCircle = ({ size, color }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
