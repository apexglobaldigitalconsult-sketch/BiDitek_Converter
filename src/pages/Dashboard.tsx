import React from 'react';
import { Search, ArrowRight, Image as ImageIcon, FileText, File as FileIcon, HeartPulse, Wallet, Cake, Folder, Ruler, DollarSign, Apple, Divide, Monitor } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const popularTools = [
  {
    title: 'Image Converter',
    desc: 'Batch convert PNG, JPG, WEBP and more with lossless quality.',
    icon: ImageIcon,
    color: 'bg-blue-100 text-blue-600',
    meta: '24 Formats'
  },
  {
    title: 'File Converters',
    desc: 'Effortlessly transform documents, archives, and media files.',
    icon: FileIcon,
    color: 'bg-red-100 text-red-600',
    meta: 'Universal'
  },
  {
    title: 'PDF Tools',
    desc: 'Compress, merge, split, and edit PDF files online.',
    icon: FileText,
    color: 'bg-orange-100 text-orange-600',
    meta: 'Powerful'
  },
  {
    title: 'BMI Calculator',
    desc: 'Track your health metrics with our precise body mass index tool.',
    icon: HeartPulse,
    color: 'bg-green-100 text-green-600',
    meta: 'Health'
  },
  {
    title: 'Loan Calculator',
    desc: 'Calculate monthly payments and interest rates instantly.',
    icon: Wallet,
    color: 'bg-purple-100 text-purple-600',
    meta: 'Finance'
  },
  {
    title: 'Age Calculator',
    desc: 'Determine precise age in years, months, and days.',
    icon: Cake,
    color: 'bg-stone-200 text-stone-700',
    meta: 'Lifestyle'
  }
];

const categories = [
  { name: 'File Converter', icon: Folder, emoji: '📁' },
  { name: 'Unit Converters', icon: Ruler, emoji: '📏' },
  { name: 'Finance', icon: DollarSign, emoji: '💰' },
  { name: 'Health', icon: Apple, emoji: '🍎' },
  { name: 'Math', icon: Divide, emoji: '➗' },
  { name: 'Tech Calculators', icon: Monitor, emoji: '💻' },
];

export default function Dashboard() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 pt-16 lg:pt-24 text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 mb-8"
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-secondary font-label text-xs font-bold tracking-wide uppercase">200+ TOOLS AVAILABLE</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-headline text-primary leading-[0.9] mb-8 tracking-tighter"
        >
          All-in-One <br />
          Converter & <span className="text-secondary">Calculator</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-primary/50 font-body max-w-2xl mx-auto mb-12"
        >
          Fast, simple tools that work directly in your browser. No installs, no friction, just pure Swiss precision.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="flex p-2 bg-surface-container-low rounded-[1px] editorial-shadow focus-within:bg-white focus-within:ring-4 focus-within:ring-secondary/5 transition-all">
            <div className="flex-1 flex items-center px-4">
              <Search className="w-6 h-6 text-primary/20 mr-4" />
              <input 
                type="text" 
                placeholder="What would you like to convert today?"
                className="w-full bg-transparent border-none focus:ring-0 py-4 text-lg font-body placeholder:text-primary/20"
              />
            </div>
            <button className="bg-secondary text-white px-8 py-4 rounded-[1px] font-headline font-bold hover:bg-primary transition-all flex items-center gap-2">
              Search
            </button>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-16 font-label text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-primary/30">
          <div className="flex items-center gap-3">
            <span className="text-primary font-black text-lg lg:text-xl">200+</span> TOOLS
          </div>
          <div className="flex items-center gap-3">
            <span className="text-primary font-black text-lg lg:text-xl">10+</span> CATEGORIES
          </div>
          <div className="flex items-center gap-3">
            <span className="text-primary font-black text-lg lg:text-xl">100%</span> FREE
          </div>
        </div>
      </section>

      {/* Recently Used */}
      <section className="px-6 lg:px-12">
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/30 mb-6">Recently Used</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {[
            { name: 'PNG to JPG', icon: ImageIcon },
            { name: 'PDF Merger', icon: FileText },
            { name: 'BMI Calc', icon: HeartPulse },
            { name: 'USD to EUR', icon: Wallet },
          ].map((tool) => (
            <button 
              key={tool.name}
              className="flex-none bg-white px-6 py-4 rounded-[1px] flex items-center gap-3 editorial-shadow border border-transparent hover:border-secondary transition-all group"
            >
              <tool.icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm text-primary">{tool.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Popular Tools Grid */}
      <section className="px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-headline font-extrabold mb-12 tracking-tight">Popular Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTools.map((tool, idx) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-surface-container-low p-8 rounded-[1px] hover:-translate-y-2 transition-all duration-500 hover:bg-white editorial-shadow cursor-pointer"
            >
              <div className={cn("w-14 h-14 rounded-[1px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", tool.color)}>
                <tool.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-headline font-bold mb-2">{tool.title}</h4>
              <p className="text-primary/50 font-body text-sm leading-relaxed mb-8">{tool.desc}</p>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary">
                <span>{tool.meta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-secondary" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 lg:px-12">
        <div className="bg-surface-container-low rounded-[1px] p-12 lg:p-20">
          <h2 className="text-4xl lg:text-5xl font-headline font-extrabold mb-16 text-center tracking-tight">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <a 
                key={cat.name}
                href="#" 
                className="group flex items-center justify-between p-8 bg-white rounded-[1px] hover:bg-secondary transition-all duration-500 editorial-shadow"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
                  <span className="font-headline font-bold text-lg group-hover:text-white transition-colors">{cat.name}</span>
                </div>
                <ArrowRight className="w-6 h-6 text-primary/10 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tool CTA */}
      <section className="px-6 lg:px-12">
        <div className="relative overflow-hidden bg-primary text-white rounded-[1px] p-12 lg:p-24">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-headline font-extrabold mb-8 leading-[0.9] tracking-tighter">
              Need a custom <br /> conversion tool?
            </h2>
            <p className="text-white/40 text-lg lg:text-xl mb-12 font-body">
              Our engineers are constantly building new tools. Suggest a feature or unit and we'll build it in 48 hours.
            </p>
            <button className="bg-secondary text-white px-10 py-5 rounded-[1px] font-headline font-bold text-lg hover:bg-white hover:text-black transition-all">
              Submit a Request
            </button>
          </div>
          
          {/* Abstract background element */}
          <div className="absolute top-0 right-0 h-full w-1/2 opacity-20 pointer-events-none">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
