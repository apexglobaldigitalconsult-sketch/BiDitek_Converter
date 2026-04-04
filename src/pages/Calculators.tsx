import React from 'react';
import { ArrowRight, Calculator, Percent, Dice5, Home, TrendingUp, Banknote, Scale, Flame, Globe, Hash } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const calculatorGroups = [
  {
    title: 'Basic & Math',
    subtitle: 'Foundational Computation',
    color: 'border-secondary-container',
    items: [
      { title: 'Scientific Calculator', desc: 'Advanced functions for complex mathematical operations and equations.', icon: Calculator, emoji: '🧮' },
      { title: 'Percentage Calculator', desc: 'Instantly calculate increases, decreases, and relative differences.', icon: Percent, emoji: '📉' },
      { title: 'Probability Tool', desc: 'Statistical analysis and random event probability distribution models.', icon: Dice5, emoji: '🎲' },
    ]
  },
  {
    title: 'Finance',
    subtitle: 'Capital & Investment',
    color: 'border-primary',
    items: [
      { title: 'Mortgage Calculator', desc: 'Plan your home purchase with detailed amortization schedules.', icon: Home, emoji: '🏠' },
      { title: 'Compound Interest', desc: 'Visualize long-term wealth growth and investment forecasting.', icon: TrendingUp, emoji: '📈' },
      { title: 'Salary After Tax', desc: 'Calculate take-home pay based on regional tax regulations.', icon: Banknote, emoji: '💸' },
    ]
  },
  {
    title: 'Health',
    subtitle: 'Biometric Analysis',
    color: 'border-blue-500',
    items: [
      { title: 'BMI Calculator', desc: 'Determine Body Mass Index and healthy weight ranges for adults.', icon: Scale, emoji: '⚖️', path: '/calculators/bmi' },
      { title: 'Calorie Deficit', desc: 'Estimate daily energy expenditure for weight management goals.', icon: Flame, emoji: '🔥' },
    ]
  },
  {
    title: 'Tech & Engineering',
    subtitle: 'System Logic',
    color: 'border-secondary',
    items: [
      { title: 'Subnet Calculator', desc: 'Comprehensive IPv4/IPv6 subnetting and mask generation tool.', icon: Globe, emoji: '🌐' },
      { title: 'Hash Generator', desc: 'Generate SHA-256, MD5, and other cryptographic hashes instantly.', icon: Hash, emoji: '⛓️' },
    ]
  }
];

export default function Calculators() {
  return (
    <div className="px-6 lg:px-16 py-12 lg:py-20">
      <header className="mb-24 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-headline font-extrabold text-primary mb-8 tracking-tighter leading-[0.9]"
        >
          Precision <br /><span className="text-secondary">Calculators.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl lg:text-2xl text-primary/50 font-body max-w-2xl leading-relaxed"
        >
          A curated collection of professional-grade tools for financial modeling, health metrics, and technical engineering. Engineered for clarity.
        </motion.p>
      </header>

      <div className="space-y-32">
        {calculatorGroups.map((group, gIdx) => (
          <section key={group.title}>
            <div className={cn("border-l-8 pl-8 mb-12", group.color)}>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary tracking-tight">{group.title}</h2>
              <p className="font-label text-sm text-primary/40 uppercase tracking-[0.3em] font-black mt-2">{group.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {group.items.map((item, iIdx) => {
                const CardWrapper = item.path ? Link : 'div';
                return (
                  <CardWrapper
                    key={item.title}
                    to={item.path || '#'}
                    className="group bg-surface-container-low rounded-[1px] p-10 hover:bg-white transition-all duration-500 hover:-translate-y-2 editorial-shadow cursor-pointer block"
                  >
                    <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{item.emoji}</div>
                    <h3 className="text-2xl font-headline font-bold mb-4 text-primary tracking-tight">{item.title}</h3>
                    <p className="text-primary/50 mb-10 font-body text-base leading-relaxed">{item.desc}</p>
                    <div className="font-label font-black text-secondary uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 group-hover:gap-4 transition-all">
                      Open Tool <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
