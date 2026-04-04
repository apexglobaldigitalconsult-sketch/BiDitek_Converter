import React from 'react';
import { Search, ArrowRight, Image as ImageIcon, FileText, File as FileIcon, HeartPulse, Wallet, Cake, Folder, Ruler, DollarSign, Apple, Divide, Monitor, Check, Repeat } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

import ScientificCalculator from '../components/ScientificCalculator';

const popularTools = [
  {
    title: 'Image Converter',
    desc: 'Convert between JPG, PNG, WebP and more',
    icon: ImageIcon,
    color: 'bg-surface-container text-primary/60',
    popular: true
  },
  {
    title: 'File Converter',
    desc: 'Transform any file format instantly',
    icon: FileIcon,
    color: 'bg-surface-container text-primary/60',
    popular: true
  },
  {
    title: 'PDF Converter',
    desc: 'PDF to Word, Excel, and more',
    icon: FileText,
    color: 'bg-surface-container text-primary/60',
    popular: false
  },
  {
    title: 'BMI Calculator',
    desc: 'Check your body mass index',
    icon: HeartPulse,
    color: 'bg-surface-container text-primary/60',
    popular: true
  },
  {
    title: 'Loan Calculator',
    desc: 'Calculate monthly payments and interest',
    icon: Wallet,
    color: 'bg-surface-container text-primary/60',
    popular: false
  },
  {
    title: 'Age Calculator',
    desc: 'Find out your exact age in years, months, days',
    icon: Cake,
    color: 'bg-surface-container text-primary/60',
    popular: false
  }
];

const categories = [
  { name: 'File Converter', desc: 'Convert images, PDFs, documents and more', icon: Repeat, color: 'bg-blue-600' },
  { name: 'Unit Converter', desc: 'Length, weight, temperature, speed and more', icon: Ruler, color: 'bg-yellow-500' },
  { name: 'Finance Calculators', desc: 'Loans, mortgage, investment tools', icon: DollarSign, color: 'bg-yellow-600' },
  { name: 'Health Calculators', desc: 'BMI, BMR, calorie and body tools', icon: HeartPulse, color: 'bg-orange-500' },
  { name: 'Math Calculators', desc: 'Scientific, fraction, percentage tools', icon: Divide, color: 'bg-blue-500' },
  { name: 'Tech Calculators', desc: 'Subnet, password, conversion tools', icon: Monitor, color: 'bg-slate-600' },
];

export default function Dashboard() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 pt-12 lg:pt-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant mb-8 shadow-sm"
            >
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span className="text-primary/60 font-label text-[10px] font-black tracking-wide uppercase">200+ Tools Available</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold text-primary leading-[1.1] mb-8 tracking-tighter"
            >
              All-in-One Converter <br />
              & <span className="text-secondary">Calculator</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary/50 font-body max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              Fast, simple tools that work directly in your browser. No ads, no tracking, just pure utility.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-3xl mx-auto lg:mx-0"
            >
              <div className="flex p-1.5 bg-surface-container-low rounded-full border border-outline-variant shadow-sm focus-within:ring-4 focus-within:ring-secondary/5 transition-all">
                <div className="flex-1 flex items-center px-6">
                  <Search className="w-5 h-5 text-primary/40 mr-4" />
                  <input 
                    type="text" 
                    placeholder="Search for any tool..."
                    className="w-full bg-transparent border-none focus:ring-0 py-3 text-lg font-body placeholder:text-primary/40 text-primary"
                  />
                </div>
                <button className="bg-secondary text-white px-10 py-3 rounded-full font-headline font-bold hover:opacity-90 transition-all">
                  Search
                </button>
              </div>
            </motion.div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 mt-12 font-label text-[10px] lg:text-xs font-bold text-primary/40">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" /> 200+ Tools
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" /> 10+ Categories
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" /> 100% Free
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/2 w-full"
          >
            <div className="mb-4 flex items-center justify-between px-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary/40">Quick Scientific Calc</h3>
              <Link to="/calculators/scientific" className="text-[10px] font-bold text-secondary hover:underline">Full Screen</Link>
            </div>
            <ScientificCalculator />
          </motion.div>
        </div>
      </section>

      {/* Recently Used */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 mb-6">Recently Used</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'Image Converter', icon: ImageIcon },
            { name: 'Unit Converter', icon: Ruler },
            { name: 'BMI Calc', icon: HeartPulse },
            { name: 'Loan Calc', icon: Wallet },
            { name: 'Age Calc', icon: Cake },
            { name: 'Temp Converter', icon: Ruler },
          ].map((tool) => (
            <button 
              key={tool.name}
              className="bg-surface-container-low px-5 py-2.5 rounded-full flex items-center gap-3 border border-outline-variant hover:border-secondary transition-all group shadow-sm"
            >
              <tool.icon className="w-4 h-4 text-primary/40 group-hover:text-secondary transition-colors" />
              <span className="font-bold text-[11px] text-primary/70">{tool.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Popular Tools Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-extrabold tracking-tight">Popular Tools</h2>
          <Link to="/converters" className="flex items-center gap-2 text-sm font-bold text-secondary hover:underline">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool, idx) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-surface-container-low p-8 rounded-[1px] border border-outline-variant/30 hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-md cursor-pointer relative"
            >
              {tool.popular && (
                <div className="absolute top-6 right-6 bg-secondary text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-[1px]">
                  Popular
                </div>
              )}
              <div className={cn("w-12 h-12 rounded-[1px] flex items-center justify-center mb-6", tool.color)}>
                <tool.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-headline font-bold mb-2">{tool.title}</h4>
              <p className="text-primary/50 font-body text-sm leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl lg:text-4xl font-headline font-extrabold mb-12 tracking-tight">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a 
              key={cat.name}
              href="#" 
              className="group flex items-center gap-6 p-6 bg-surface-container-low rounded-[1px] border border-outline-variant/30 hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-md"
            >
              <div className={cn("w-12 h-12 flex items-center justify-center rounded-[1px] shrink-0", cat.color)}>
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg text-primary">{cat.name}</h4>
                <p className="text-xs text-primary/50 font-body">{cat.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
