import React, { useState } from 'react';
import { Terminal, Lock, DollarSign, PlusCircle, Activity, Play, Code, CheckCircle, AlertTriangle, ArrowRight, RotateCcw, BarChart3, TrendingUp, Layers, CheckCircle2, ExternalLink, Calculator, GraduationCap, Laptop } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects = ({ playSound }) => {
  const [activeTab, setActiveTab] = useState('sim'); // 'sim' | 'code'
  
  // ATM Simulator State
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [balance, setBalance] = useState(25000.00);
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts] = useState(3);
  const [pendingAction, setPendingAction] = useState(null); // 'withdraw' | 'deposit' | null
  const [amountInput, setAmountInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'info', text: '[SYSTEM] Mini ATM C++ Kernel Loaded.' },
    { type: 'info', text: '[VALIDATION] Strict input sanitation & memory safety initialized.' },
    { type: 'prompt', text: '[PROMPT] Enter 4-digit PIN (Demo PIN: 1234):' }
  ]);

  // Web Dev Project 1: Sales Dashboard interactive filter state
  const [salesFilter, setSalesFilter] = useState('all');
  const [salesMetric, setSalesMetric] = useState({ revenue: '₹ 4,82,500', orders: 1240, avgOrder: '₹ 389' });

  // Web Dev Project 2: Attendance Calculator interactive state
  const [totalClasses, setTotalClasses] = useState(48);
  const [attendedClasses, setAttendedClasses] = useState(40);

  const attendancePercent = totalClasses > 0 ? Math.round((attendedClasses / totalClasses) * 100) : 0;
  const isAttendanceSafe = attendancePercent >= 75;

  const addLog = (text, type = 'normal') => {
    setTerminalLogs(prev => [...prev, { text, type }]);
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (attempts >= maxAttempts) {
      playSound?.(220, 'square', 0.2);
      addLog('[SECURITY LOCKOUT] Account locked due to failed attempts. Click [RESET] to restore.', 'error');
      return;
    }

    if (pin.trim() === '1234') {
      playSound?.(800, 'sine', 0.15);
      setIsAuthenticated(true);
      setAttempts(0);
      addLog('[AUTH SUCCESS] PIN Verified. Welcome, Shubham Rajpoot!', 'success');
      addLog('[MENU] Ready. Select: Check Balance | Withdraw | Deposit | Logout', 'info');
    } else {
      playSound?.(250, 'sawtooth', 0.2);
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      const remaining = maxAttempts - newAttempts;
      if (remaining <= 0) {
        addLog('[SECURITY LOCKOUT] Maximum authentication limit exceeded.', 'error');
      } else {
        addLog(`[VALIDATION FAILED] Incorrect PIN. Attempts remaining: ${remaining}`, 'error');
      }
    }
    setPin('');
  };

  const handleAction = (action) => {
    playSound?.(600, 'sine', 0.08);
    if (action === 'balance') {
      addLog(`[LEDGER INQUIRY] Current Balance: ₹ ${balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 'success');
    } else if (action === 'exit') {
      setIsAuthenticated(false);
      setPendingAction(null);
      addLog('[SESSION TERMINATED] User logged out securely.', 'info');
    }
  };

  const handleTransactionConfirm = (e) => {
    e.preventDefault();
    const amt = parseFloat(amountInput);

    if (isNaN(amt) || amt <= 0) {
      playSound?.(220, 'square', 0.2);
      addLog('[DATA VALIDATION ERROR] Input must be a positive non-zero numeric value.', 'error');
      return;
    }

    if (pendingAction === 'withdraw') {
      if (amt > balance) {
        playSound?.(220, 'square', 0.2);
        addLog(`[TRANSACTION DECLINED] Insufficient balance! Requested: ₹${amt.toLocaleString()}, Available: ₹${balance.toLocaleString()}`, 'error');
      } else {
        playSound?.(850, 'sine', 0.2);
        setBalance(prev => prev - amt);
        addLog(`[SUCCESS] Dispensed ₹${amt.toLocaleString()}. Updated Balance: ₹${(balance - amt).toLocaleString()}`, 'success');
      }
    } else if (pendingAction === 'deposit') {
      playSound?.(900, 'sine', 0.2);
      setBalance(prev => prev + amt);
      addLog(`[SUCCESS] Deposited ₹${amt.toLocaleString()}. Updated Balance: ₹${(balance + amt).toLocaleString()}`, 'success');
    }

    setAmountInput('');
    setPendingAction(null);
  };

  const resetAtm = () => {
    playSound?.(500, 'sine', 0.08);
    setIsAuthenticated(false);
    setAttempts(0);
    setBalance(25000.00);
    setPendingAction(null);
    setAmountInput('');
    setTerminalLogs([
      { type: 'info', text: '[SYSTEM] Mini ATM C++ Kernel Reset.' },
      { type: 'info', text: '[VALIDATION] Strict input sanitation initialized.' },
      { type: 'prompt', text: '[PROMPT] Enter 4-digit PIN (Demo PIN: 1234):' }
    ]);
  };

  const atmProject = projects[0];
  const salesProject = projects[1];
  const studentProject = projects[2];

  return (
    <section id="projects" className="space-y-12 pt-6">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-sm text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.25)]">
            03
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Engineering & Web Projects
            </h2>
            <p className="font-mono text-xs text-slate-400">
              C++ Systems Architecture & Responsive Web Development Applications
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 font-semibold">
            3 PROJECTS DOCUMENTED
          </span>
        </div>
      </div>

      {/* PROJECT 1: FEATURED C++ MINI ATM */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border-2 border-indigo-500/30 hover:border-indigo-500/60 shadow-[0_0_35px_rgba(99,102,241,0.2)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Overview */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-indigo-400" /> {atmProject.subtitle}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
                  FEATURED SYSTEM
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {atmProject.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {atmProject.description}
            </p>

            {/* Feature Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {atmProject.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> {feat.title}
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              {atmProject.tags.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300">
                  #{t}
                </span>
              ))}
            </div>

            {/* Actions: Tab Switcher & GitHub Button */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => {
                  playSound(500, 'sine', 0.05);
                  setActiveTab('sim');
                }}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold flex items-center gap-2 transition-all ${
                  activeTab === 'sim'
                    ? 'btn-indigo-glow'
                    : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-indigo-500'
                }`}
              >
                <Play className="w-3.5 h-3.5" /> LIVE SIMULATOR
              </button>

              <button
                onClick={() => {
                  playSound(500, 'sine', 0.05);
                  setActiveTab('code');
                }}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold flex items-center gap-2 transition-all ${
                  activeTab === 'code'
                    ? 'btn-indigo-glow'
                    : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-cyan-500'
                }`}
              >
                <Code className="w-3.5 h-3.5" /> C++ CODE
              </button>

              <a
                href={atmProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound(600, 'sine', 0.08)}
                className="px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 font-mono text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GITHUB REPO</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Simulator / Code Viewer */}
          <div className="lg:col-span-6 w-full">
            
            {activeTab === 'sim' ? (
              <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 shadow-[0_0_30px_rgba(99,102,241,0.2)] overflow-hidden scanline">
                
                {/* Simulator Header */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-indigo-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-white font-bold">ATM ENGINE (C++17)</span>
                  </div>
                  <span className="font-mono text-[10px] text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded bg-indigo-500/10 font-semibold">
                    SESSION ACTIVE
                  </span>
                </div>

                {/* Status Bar */}
                <div className="p-4 bg-slate-900/40 border-b border-slate-800 flex justify-between items-center text-xs font-mono">
                  <div>
                    <span className="text-slate-400">STATE: </span>
                    <span className={isAuthenticated ? "text-cyan-400 font-bold" : "text-amber-400 font-bold"}>
                      {isAuthenticated ? "AUTHENTICATED" : "LOCKED (AWAITING PIN)"}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400">BALANCE: </span>
                    <span className="text-white font-bold">₹ {balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                {/* Terminal Console Logs */}
                <div className="p-4 h-40 overflow-y-auto font-mono text-xs space-y-1.5 terminal-scroll bg-slate-950/80">
                  {terminalLogs.map((log, lIdx) => (
                    <p 
                      key={lIdx}
                      className={
                        log.type === 'error' ? 'text-rose-400 font-semibold' :
                        log.type === 'success' ? 'text-cyan-300 font-semibold' :
                        log.type === 'prompt' ? 'text-indigo-400' :
                        'text-slate-300'
                      }
                    >
                      {log.text}
                    </p>
                  ))}
                </div>

                {/* Interactive Controls */}
                <div className="p-4 bg-slate-900/60 border-t border-slate-800">
                  {!isAuthenticated ? (
                    <form onSubmit={handlePinSubmit} className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="password"
                          maxLength={4}
                          value={pin}
                          onChange={(e) => setPin(e.target.value)}
                          placeholder="Enter PIN (Demo: 1234)"
                          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="btn-indigo-glow px-4 py-2 rounded-xl font-mono text-xs font-bold"
                        >
                          AUTHENTICATE
                        </button>
                      </div>
                      <p className="text-[10px] font-mono text-slate-400">
                        * Preloaded demo PIN: <span className="text-cyan-400 font-bold">1234</span>
                      </p>
                    </form>
                  ) : (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                        <button
                          onClick={() => handleAction('balance')}
                          className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/40 hover:bg-indigo-500 hover:text-white text-indigo-300 font-semibold transition-all"
                        >
                          Balance
                        </button>
                        <button
                          onClick={() => {
                            playSound(550, 'sine', 0.05);
                            setPendingAction('withdraw');
                          }}
                          className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black text-cyan-300 font-semibold transition-all"
                        >
                          Withdraw
                        </button>
                        <button
                          onClick={() => {
                            playSound(550, 'sine', 0.05);
                            setPendingAction('deposit');
                          }}
                          className="p-2 rounded-lg bg-violet-950/40 border border-violet-500/40 hover:bg-violet-500 hover:text-white text-violet-300 font-semibold transition-all"
                        >
                          Deposit
                        </button>
                        <button
                          onClick={() => handleAction('exit')}
                          className="p-2 rounded-lg bg-rose-950/40 border border-rose-500/40 hover:bg-rose-500 hover:text-white text-rose-300 font-semibold transition-all"
                        >
                          Exit
                        </button>
                      </div>

                      {/* Transaction Input Row */}
                      {pendingAction && (
                        <form onSubmit={handleTransactionConfirm} className="pt-2 border-t border-slate-800 flex gap-2">
                          <input
                            type="number"
                            value={amountInput}
                            onChange={(e) => setAmountInput(e.target.value)}
                            placeholder={`Enter ${pendingAction} amount in ₹`}
                            className="flex-1 bg-slate-950 border border-cyan-500/40 rounded-xl px-3 py-1.5 text-white font-mono text-xs focus:outline-none"
                            autoFocus
                          />
                          <button
                            type="submit"
                            className="btn-indigo-glow px-4 py-1.5 rounded-xl font-mono text-xs font-bold"
                          >
                            CONFIRM
                          </button>
                          <button
                            type="button"
                            onClick={() => setPendingAction(null)}
                            className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-mono text-xs"
                          >
                            CANCEL
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer Reset Action */}
                <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Data Validation Active</span>
                  <button
                    onClick={resetAtm}
                    className="text-cyan-400 hover:text-white flex items-center gap-1 font-semibold transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset Demo
                  </button>
                </div>

              </div>
            ) : (
              <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-4 font-mono text-xs text-slate-300 max-h-[360px] overflow-y-auto terminal-scroll">
                <pre className="leading-relaxed"><code>{`#include <iostream>
#include <iomanip>

class MiniATM {
private:
    int storedPIN = 1234;
    double accountBalance = 25000.00;
    int failedAttempts = 0;
    const int MAX_ATTEMPTS = 3;

public:
    bool authenticate(int inputPIN) {
        if (failedAttempts >= MAX_ATTEMPTS) {
            std::cout << "[LOCKED] Security lockout active.\n";
            return false;
        }
        if (inputPIN == storedPIN) {
            failedAttempts = 0;
            return true;
        }
        failedAttempts++;
        std::cout << "[ERROR] Invalid PIN! Remaining: " 
                  << (MAX_ATTEMPTS - failedAttempts) << "\n";
        return false;
    }

    bool withdraw(double amount) {
        // Strict Data Validation
        if (amount <= 0) {
            std::cout << "[ERROR] Amount must be positive.\n";
            return false;
        }
        if (amount > accountBalance) {
            std::cout << "[DECLINED] Insufficient funds.\n";
            return false;
        }
        accountBalance -= amount;
        return true;
    }

    void deposit(double amount) {
        if (amount > 0) {
            accountBalance += amount;
        }
    }
};`}</code></pre>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* WEB DEVELOPMENT PROJECTS GRID (2 NEW PROJECTS) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Laptop className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xl font-bold text-white font-sans">
            Web Development & Analytical Applications
          </h3>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            Frontend & JavaScript
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Web Project 1: Sales & Analytics Dashboard */}
          <div className="glass-card-cyan rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 border border-cyan-500/25 hover:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold uppercase">
                  {salesProject.type}
                </span>
                <span className="font-mono text-xs text-slate-400">HTML5 / JS / CSS3</span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {salesProject.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {salesProject.subtitle} • Data Insights & Visual Reporting
                </p>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {salesProject.description}
              </p>

              {/* Interactive KPI Demonstration Widget */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 space-y-3 font-mono">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 flex items-center gap-1">
                    <BarChart3 className="w-3.5 h-3.5 text-cyan-400" /> LIVE KPI SUMMARY
                  </span>
                  <div className="flex gap-1">
                    {['all', 'monthly', 'quarterly'].map((f) => (
                      <button
                        key={f}
                        onClick={() => {
                          playSound(550, 'sine', 0.05);
                          setSalesFilter(f);
                          if (f === 'monthly') setSalesMetric({ revenue: '₹ 1,42,000', orders: 380, avgOrder: '₹ 373' });
                          else if (f === 'quarterly') setSalesMetric({ revenue: '₹ 4,82,500', orders: 1240, avgOrder: '₹ 389' });
                          else setSalesMetric({ revenue: '₹ 18,94,000', orders: 4950, avgOrder: '₹ 382' });
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                          salesFilter === f
                            ? 'bg-cyan-500 text-black'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Revenue</div>
                    <div className="text-xs sm:text-sm font-bold text-cyan-300">{salesMetric.revenue}</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Orders</div>
                    <div className="text-xs sm:text-sm font-bold text-white">{salesMetric.orders}</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Avg Value</div>
                    <div className="text-xs sm:text-sm font-bold text-indigo-400">{salesMetric.avgOrder}</div>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Performance Target</span>
                    <span className="text-cyan-400 font-bold">88%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-[88%] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {salesProject.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
                    #{t}
                  </span>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">Built with HTML5 & JS</span>
              <a
                href={salesProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound(600, 'sine', 0.05)}
                className="text-cyan-400 hover:text-white font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>Code Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Web Project 2: Student Academic & Attendance Tracker */}
          <div className="glass-card-violet rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 border border-violet-500/25 hover:border-violet-400/60 shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 font-bold uppercase">
                  {studentProject.type}
                </span>
                <span className="font-mono text-xs text-slate-400">HTML5 / Form Validation</span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {studentProject.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {studentProject.subtitle} • Academic Integrity & Utilities
                </p>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {studentProject.description}
              </p>

              {/* Interactive Attendance Calculator Widget */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-violet-500/20 space-y-3 font-mono">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calculator className="w-3.5 h-3.5 text-violet-400" /> LIVE ATTENDANCE CALCULATOR
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isAttendanceSafe ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}`}>
                    {isAttendanceSafe ? '✓ SAFE (>=75%)' : '⚠ WARNING (<75%)'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Attended Lectures</label>
                    <input
                      type="number"
                      min={0}
                      max={totalClasses}
                      value={attendedClasses}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setAttendedClasses(Math.min(val, totalClasses));
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono text-xs focus:border-violet-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Total Lectures</label>
                    <input
                      type="number"
                      min={1}
                      value={totalClasses}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 1;
                        setTotalClasses(Math.max(val, 1));
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono text-xs focus:border-violet-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Live Calculated Metric Meter */}
                <div className="pt-1">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Current Percentage:</span>
                    <span className={`font-bold ${isAttendanceSafe ? 'text-cyan-400' : 'text-rose-400'}`}>
                      {attendancePercent}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${isAttendanceSafe ? 'bg-gradient-to-r from-indigo-500 to-cyan-400' : 'bg-rose-500'}`}
                      style={{ width: `${Math.min(attendancePercent, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {studentProject.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-violet-950/40 text-violet-300 border border-violet-500/20">
                    #{t}
                  </span>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">Client-Side Validation</span>
              <a
                href={studentProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound(600, 'sine', 0.05)}
                className="text-violet-400 hover:text-white font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>Code Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
