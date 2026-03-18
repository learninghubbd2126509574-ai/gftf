/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Clock, Users, ShieldCheck, Zap } from 'lucide-react';

const Particle = ({ delay }: { delay: number; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 0, x: 0 }}
    animate={{
      opacity: [0, 0.3, 0],
      y: [-20, -120],
      x: Math.random() * 40 - 20,
    }}
    transition={{
      duration: 4 + Math.random() * 4,
      repeat: Infinity,
      delay: delay,
      ease: "linear"
    }}
    className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
    style={{
      left: `${Math.random() * 100}%`,
      bottom: '10%'
    }}
  />
);

const TechElement = () => (
  <motion.div
    animate={{
      rotate: 360,
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
    className="absolute -top-20 -right-20 w-64 h-64 border border-blue-500/10 rounded-full flex items-center justify-center"
  >
    <div className="w-48 h-48 border border-blue-400/5 rounded-full border-dashed" />
  </motion.div>
);

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4 font-sans selection:bg-blue-500/30">
      {/* 1:1 Aspect Ratio Container */}
      <div className="relative w-full max-w-[800px] aspect-square bg-[#0f1117] rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-between p-12">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />
          
          {/* Moving Particles */}
          {[...Array(20)].map((_, i) => (
            <Particle key={i} delay={i * 0.5} />
          ))}

          <TechElement />
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center space-y-3"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-blue-400 font-black tracking-[0.3em] text-[10px] uppercase">Official Waiting Room</span>
          </div>
          <h1 id="main-title" className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
            Unity Earning <br />
            <span className="text-blue-500">E-learning</span> Platform
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
          <p className="text-blue-200/80 font-bold tracking-[0.4em] uppercase text-xs">
            Live Counselling Meeting
          </p>
        </motion.div>

        {/* Center Welcome Section */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"
              />
              <Globe className="w-20 h-20 text-blue-500 relative z-10" />
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Welcome to Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Live Counselling Session
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-4 px-8 py-4 bg-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
              <span className="text-white font-bold text-2xl">
                Starts at <span className="text-blue-400">07:00 PM</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer / Clock Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 w-full grid grid-cols-3 gap-4 items-end"
        >
          {/* Stats */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white/40">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider">Waiting Room Active</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider">Secure Connection</span>
            </div>
          </div>

          {/* Digital Clock */}
          <div className="flex flex-col items-center justify-center bg-blue-600/10 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-md shadow-2xl min-w-[240px]">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Real-Time Clock</span>
            </div>
            <div className="text-4xl font-mono font-bold text-white tracking-tighter tabular-nums drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              {formatTime(time)}
            </div>
            <div className="text-[10px] text-blue-300/40 font-bold uppercase tracking-[0.2em] mt-2 border-t border-white/5 pt-2 w-full text-center">
              {formatDate(time)}
            </div>
          </div>

          {/* Branding/Logo Placeholder */}
          <div className="flex flex-col items-end justify-end text-right">
            <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Official Platform</div>
            <div className="text-white/80 font-black text-xl tracking-tighter">
              UNITY<span className="text-blue-500">EARN</span>
            </div>
            <div className="text-blue-500/40 text-[9px] font-bold uppercase tracking-widest mt-1">E-Learning Solutions</div>
          </div>
        </motion.div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-blue-500/20 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-blue-500/20 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-blue-500/20 rounded-br-3xl" />
      </div>
    </div>
  );
}
