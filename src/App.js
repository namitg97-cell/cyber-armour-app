// src/App.js
import React, { useState } from 'react';

// === ICONS (simple inline SVGs, so you don't need external libraries for this demo) ===
const LockIcon = () => (
  <svg className="w-6 h-6 text-cyberLightPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);
const UserIcon = () => (
  <svg className="w-6 h-6 text-cyberLightPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const ZapIcon = () => (
  <svg className="w-12 h-12 text-cyberPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

// === APP COMPONENT ===
function App() {
  // --- STATE MANAGEMENT ---
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulates login state
  const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'
  const [showSignup, setShowSignup] = useState(false); // Toggles between Login/Signup on the single page

  // --- MOCK LOGIN FUNCTION ---
  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  // --- SUB-COMPONENT: UNIFIED LOGIN/SIGNUP PAGE ---
  const AuthPage = () => (
    <div className="min-h-screen bg-cyberBlack text-gray-100 flex flex-col font-sans">
      {/* Header (Inspired by your image) */}
      <header className="flex items-center justify-between p-6 border-b border-cyberPurple/20">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyberDarkGray border-2 border-cyberPurple rounded-full shadow-lg shadow-cyberPurple/30">
            <LockIcon />
          </div>
          <div className="text-xl font-extrabold tracking-tighter">
            <span className="text-cyberLightPurple">Cyber</span>Armour<span className="text-xs text-gray-500 font-normal">.io</span>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {['Core Tech', 'Platform', 'API', 'Pricing'].map(item => (
            <a href="#" key={item} className="text-gray-400 hover:text-cyberLightPurple transition-colors">{item}</a>
          ))}
          <button className="bg-cyberPurple px-5 py-2 rounded-full text-white text-xs font-bold hover:bg-cyberLightPurple transition-colors">REQUEST DEMO</button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl items-center">
          
          {/* Left Column: Dynamic Captions & Buttons */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyberPurple/10 border border-cyberPurple/30 text-cyberLightPurple text-sm font-semibold tracking-wide">
              WELCOME TO THE FRONTLINE
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight">
              Instantiate Your<br />
              <span className="text-cyberPurple">Digital Bastion.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              From sophisticated SQL injections to distributed botnets, the digital threats of tomorrow require the proactive armor of today. CyberArmour provides 360° visibility and AI-driven defense, transforming chaotic data into actionable intelligence. Secure your applications, your data, and your reputation.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setShowSignup(true)} className="flex items-center gap-2 px-8 py-3 bg-cyberPurple text-white font-bold rounded-lg hover:bg-cyberLightPurple transition-colors">
                <ZapIcon /> GET STARTED FREE
              </button>
              <button className="px-8 py-3 bg-cyberDarkGray border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-cyberPurple transition-colors">LEARN MORE</button>
            </div>
          </div>

          {/* Right Column: Dynamic Login/Signup Form */}
          <div className="p-10 bg-cyberDarkGray border border-cyberPurple/20 rounded-2xl shadow-2xl shadow-cyberPurple/10">
            <div className="flex gap-6 mb-10 border-b border-gray-800 pb-2">
              <button onClick={() => setShowSignup(false)} className={`text-xl font-bold pb-2 ${!showSignup ? 'text-cyberPurple border-b-2 border-cyberPurple' : 'text-gray-500'}`}>Sign In</button>
              <button onClick={() => setShowSignup(true)} className={`text-xl font-bold pb-2 ${showSignup ? 'text-cyberPurple border-b-2 border-cyberPurple' : 'text-gray-500'}`}>Sign Up</button>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin('user'); }}>
              {showSignup && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full p-3.5 bg-cyberBlack border border-gray-800 rounded-lg text-white focus:border-cyberPurple focus:ring-1 focus:ring-cyberPurple" />
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Organization Email</label>
                <input type="email" placeholder="admin@mycorp.com" className="w-full p-3.5 bg-cyberBlack border border-gray-800 rounded-lg text-white focus:border-cyberPurple focus:ring-1 focus:ring-cyberPurple" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-medium text-gray-400">Secure Access Token</label>
                  {!showSignup && <a href="#" className="text-xs text-cyberLightPurple hover:underline">Forgot?</a>}
                </div>
                <input type="password" placeholder="••••••••" className="w-full p-3.5 bg-cyberBlack border border-gray-800 rounded-lg text-white focus:border-cyberPurple focus:ring-1 focus:ring-cyberPurple" />
              </div>
              
              <div className="pt-6">
                <button type="submit" className="w-full py-4 bg-cyberPurple text-white font-extrabold rounded-lg text-lg hover:bg-cyberLightPurple transition-colors shadow-lg shadow-cyberPurple/20">
                  {showSignup ? "ACTIVATE SECURITY ARMOUR" : "INITIATE SESSION"}
                </button>
              </div>

              {/* DEMO BUTTONS for testing */}
              <div className="text-center pt-8 border-t border-gray-800 space-y-3">
                <div className="text-xs text-gray-600">-- For Demo Purposes --</div>
                <div className="flex gap-3 justify-center">
                  <button type="button" onClick={() => handleLogin('user')} className="text-xs bg-gray-800 p-2 rounded">Quick Login (User)</button>
                  <button type="button" onClick={() => handleLogin('admin')} className="text-xs bg-gray-800 p-2 rounded">Quick Login (Admin)</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );

  // --- SUB-COMPONENT: HOMEPAGE / DASHBOARD (AFTER LOGIN) ---
  const DashboardPage = () => (
    <div className="min-h-screen bg-cyberBlack text-gray-100 flex font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-cyberDarkGray border-r border-cyberPurple/10 p-6 space-y-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyberPurple/10 border border-cyberPurple rounded-full shadow shadow-cyberPurple/20">
            <LockIcon />
          </div>
          <div className="text-lg font-bold tracking-tighter">
            <span className="text-cyberLightPurple">Cyber</span>Armour
          </div>
        </div>
        <nav className="space-y-3">
          {['Main Cockpit', 'Threat Matrix', 'Live Attacks', 'App Security', 'Configurations', 'Audit Logs'].map((item, index) => (
            <a href="#" key={item} className={`block p-3 rounded-lg text-sm ${index === 0 ? 'bg-cyberPurple/10 text-cyberPurple font-bold' : 'text-gray-400 hover:bg-gray-800'}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-6 w-52 space-y-4">
          <div className="p-4 bg-cyberPurple/10 border border-cyberPurple rounded-xl text-center">
            <p className="text-cyberLightPurple text-xs font-bold mb-1">PROTECTION ACTIVE</p>
            <p className="text-xs text-gray-400">All modules are nominal.</p>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="w-full text-xs text-gray-500 hover:text-red-400">TERMINATE SESSION (Logout)</button>
        </div>
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-grow p-10 space-y-10">
        <header className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-cyberLightPurple tracking-wider">COMMAND CENTER: APP-CLUSTER-04</div>
            <h1 className="text-3xl font-extrabold tracking-tight">Main Security Cockpit</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">SESSION ID: CA-893-XJ9</span>
            <div className="relative">
              <img src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${userRole === 'admin' ? 'Aria' : 'Felix'}`} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-cyberPurple p-0.5 bg-cyberDarkGray" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-cyberBlack"></div>
            </div>
            <div className="text-sm">
              <div className="font-bold">{userRole === 'admin' ? 'Aria Vance' : 'Felix Novak'}</div>
              <div className="text-cyberLightPurple text-xs">{userRole === 'admin' ? 'Security Architect' : 'SOC Analyst'}</div>
            </div>
          </div>
        </header>

        {/* The Grid / Cockpit (Grafana-like widgets) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Admin Feature example */}
          {userRole === 'admin' && (
            <div className="md:col-span-2 p-6 bg-cyberDarkGray border-l-4 border-cyberPurple rounded-xl">
              <div className="text-xs font-bold text-cyberLightPurple mb-2">SYSTEM ADVISORY</div>
              <h2 className="text-xl font-bold mb-2">Critical Core Update Available</h2>
              <p className="text-sm text-gray-400 mb-4">A major security patch for the WAF rules is pending deployment. It addresses zero-day threats.</p>
              <button className="bg-cyberPurple px-5 py-2 rounded text-white text-xs font-bold hover:bg-cyberLightPurple">DEPLOY UPDATE</button>
            </div>
          )}

          {/* Core Metrics: Grafana-like Panels */}
          {[
            { title: 'TOTAL THREATS DETECTED (24H)', value: '1,294', change: '+12%', icon: ZapIcon, color: 'cyberPurple' },
            { title: 'SQL INJECTION ATTEMPTS', value: '417', change: '+24%', icon: LockIcon, color: 'cyberLightPurple' },
            { title: 'UNIQUE ATTACKER IPs', value: '88', change: '-4%', icon: UserIcon, color: 'cyberLightPurple' },
          ].map(metric => (
            <div key={metric.title} className="p-6 bg-cyberDarkGray rounded-xl border border-cyberPurple/10 space-y-4">
              <div className="flex items-center justify-between text-gray-500">
                <span className="text-xs font-medium tracking-wider">{metric.title}</span>
                <metric.icon />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-extrabold tracking-tight">{metric.value}</span>
                <span className={`text-xs ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{metric.change} vs. prev. 24h</span>
              </div>
              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className={`h-full bg-${metric.color}`} style={{width: '65%'}}></div>
              </div>
            </div>
          ))}

          {/* Placeholder for dynamic features: Real-time attack feed */}
          <div className="xl:col-span-2 p-8 bg-cyberDarkGray rounded-2xl border border-cyberPurple/10 min-h-80">
            <h3 className="text-xl font-bold mb-6">Real-Time Threat Vector Feed</h3>
            <p className="text-gray-500 text-sm">Waiting for incoming data stream... <span className="text-cyberPurple animate-pulse">(Simulated connection)</span></p>
          </div>

          <div className="p-8 bg-cyberDarkGray rounded-2xl border border-cyberPurple/10 min-h-80">
            <h3 className="text-xl font-bold mb-6">Application Protection Status</h3>
            <p className="text-gray-500 text-sm">Connection: SECURE. 0 open critical vulnerabilities.</p>
          </div>

        </div>
      </main>
    </div>
  );

  // --- MAIN RENDER LOGIC ---
  return (
    <div>
      {isLoggedIn ? <DashboardPage /> : <AuthPage />}
    </div>
  );
}

export default App;