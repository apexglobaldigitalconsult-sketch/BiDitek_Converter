import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Search, 
  Repeat,
  Calculator,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  HeartPulse,
  Ruler,
  Wallet,
  Cake,
  FileText,
  DollarSign,
  Divide,
  Monitor
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../lib/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Converters', path: '/converters', icon: Repeat },
    { name: 'Calculators', path: '/calculators', icon: Calculator },
  ];

  const [isConvertersOpen, setIsConvertersOpen] = React.useState(true);
  const [isCalculatorsOpen, setIsCalculatorsOpen] = React.useState(true);

  const convertersItems = [
    { name: 'File Converter', path: '/converters' },
    { name: 'Unit Converter', path: '/converters' },
  ];

  const calculatorsCategories = [
    {
      name: 'Financial',
      items: [
        { name: 'Mortgage Calculator', path: '/calculators/mortgage' },
        { name: 'Loan Calculator', path: '/calculators/loan' },
        { name: 'Auto Loan Calculator', path: '/calculators/auto-loan' },
        { name: 'Interest Calculator', path: '/calculators/interest' },
        { name: 'Payment Calculator', path: '/calculators/payment' },
        { name: 'Retirement Calculator', path: '/calculators/retirement' },
        { name: 'Amortization Calculator', path: '/calculators/amortization' },
        { name: 'Investment Calculator', path: '/calculators/investment' },
        { name: 'Inflation Calculator', path: '/calculators/inflation' },
        { name: 'Finance Calculator', path: '/calculators/finance' },
        { name: 'Income Tax Calculator', path: '/calculators/income-tax' },
        { name: 'Compound Interest Calculator', path: '/calculators/compound-interest' },
        { name: 'Salary Calculator', path: '/calculators/salary' },
        { name: 'Interest Rate Calculator', path: '/calculators/interest-rate' },
        { name: 'Sales Tax Calculator', path: '/calculators/sales-tax' },
      ]
    },
    {
      name: 'Fitness & Health',
      items: [
        { name: 'BMI Calculator', path: '/calculators/bmi' },
        { name: 'Calorie Calculator', path: '/calculators/calorie' },
        { name: 'Body Fat Calculator', path: '/calculators/body-fat' },
        { name: 'BMR Calculator', path: '/calculators/bmr' },
        { name: 'Ideal Weight Calculator', path: '/calculators/ideal-weight' },
        { name: 'Pace Calculator', path: '/calculators/pace' },
        { name: 'Pregnancy Calculator', path: '/calculators/pregnancy' },
        { name: 'Pregnancy Conception', path: '/calculators/conception' },
        { name: 'Due Date Calculator', path: '/calculators/due-date' },
      ]
    },
    {
      name: 'Math',
      items: [
        { name: 'Scientific Calculator', path: '/calculators/scientific' },
        { name: 'Fraction Calculator', path: '/calculators/fraction' },
        { name: 'Percentage Calculator', path: '/calculators/percentage' },
        { name: 'Random Number Generator', path: '/calculators/random' },
        { name: 'Triangle Calculator', path: '/calculators/triangle' },
        { name: 'Standard Deviation', path: '/calculators/std-dev' },
      ]
    },
    {
      name: 'Other',
      items: [
        { name: 'Age Calculator', path: '/calculators/age' },
        { name: 'Date Calculator', path: '/calculators/date' },
        { name: 'Time Calculator', path: '/calculators/time' },
        { name: 'Hours Calculator', path: '/calculators/hours' },
        { name: 'GPA Calculator', path: '/calculators/gpa' },
        { name: 'Grade Calculator', path: '/calculators/grade' },
        { name: 'Concrete Calculator', path: '/calculators/concrete' },
        { name: 'Subnet Calculator', path: '/calculators/subnet' },
        { name: 'Password Generator', path: '/calculators/password' },
        { name: 'Conversion Calculator', path: '/calculators/conversion' },
      ]
    }
  ];

  const [openCategories, setOpenCategories] = React.useState<string[]>(['Financial', 'Fitness & Health', 'Math', 'Other']);

  const toggleCategory = (name: string) => {
    setOpenCategories(prev => 
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen flex flex-col max-w-[1920px] mx-auto bg-background text-primary transition-colors duration-300">
      {/* Top Navigation Bar */}
      <header className="w-full sticky top-0 z-50 bg-surface-container-low border-b border-outline-variant h-16 flex items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-secondary p-1.5 rounded-[1px]">
              <Repeat className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-headline font-extrabold tracking-tight text-primary">
              BiDitek <span className="text-secondary">Converter</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="w-full flex items-center bg-surface-container px-4 py-2 rounded-[1px] border border-transparent focus-within:bg-surface-container-low focus-within:border-outline-variant transition-all">
            <Search className="w-4 h-4 text-primary/40" />
            <input 
              type="text" 
              placeholder="Search converters & calculators..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full font-body placeholder:text-primary/40 ml-2 text-primary"
            />
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-surface-container-low border border-outline-variant rounded-[1px] text-[10px] font-bold text-primary/40">
              <span className="text-[12px]">⌘</span> K
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/converters" className="text-sm font-bold text-primary/60 hover:text-secondary transition-colors">Converters</NavLink>
            <NavLink to="/calculators" className="text-sm font-bold text-primary/60 hover:text-secondary transition-colors">Calculators</NavLink>
          </nav>
          <button 
            onClick={toggleTheme}
            className="p-2 text-primary/40 hover:text-secondary transition-colors"
          >
            {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col w-64 sticky top-16 h-[calc(100vh-4rem)] bg-surface-container-low border-r border-outline-variant py-6 overflow-y-auto">
          <div className="px-6 mb-6">
            <h4 className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em]">Tools</h4>
          </div>
          
          <nav className="flex-1 space-y-1">
            {/* Converters Section */}
            <div>
              <button 
                onClick={() => setIsConvertersOpen(!isConvertersOpen)}
                className="w-full flex items-center justify-between px-6 py-3 text-sm font-bold text-primary/80 hover:bg-surface-container transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-1 rounded-[1px]">
                    <Repeat className="w-3 h-3 text-white" />
                  </div>
                  <span>Converters</span>
                </div>
                {isConvertersOpen ? <ChevronUp className="w-4 h-4 text-primary/40" /> : <ChevronDown className="w-4 h-4 text-primary/40" />}
              </button>
              <AnimatePresence initial={false}>
                {isConvertersOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    {convertersItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center pl-14 py-2.5 text-xs font-medium transition-all relative",
                            isActive ? "text-secondary font-bold after:absolute after:left-12 after:w-1 after:h-1 after:bg-secondary after:rounded-full" : "text-primary/50 hover:text-secondary"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Calculators Section */}
            <div>
              <button 
                onClick={() => setIsCalculatorsOpen(!isCalculatorsOpen)}
                className="w-full flex items-center justify-between px-6 py-3 text-sm font-bold text-primary/80 hover:bg-surface-container transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-orange-600 p-1 rounded-[1px]">
                    <Calculator className="w-3 h-3 text-white" />
                  </div>
                  <span>Calculators</span>
                </div>
                {isCalculatorsOpen ? <ChevronUp className="w-4 h-4 text-primary/40" /> : <ChevronDown className="w-4 h-4 text-primary/40" />}
              </button>
              <AnimatePresence initial={false}>
                {isCalculatorsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    {calculatorsCategories.map((category) => (
                      <div key={category.name} className="mb-1">
                        <button 
                          onClick={() => toggleCategory(category.name)}
                          className="w-full flex items-center justify-between pl-14 pr-6 py-2 text-[11px] font-black uppercase tracking-widest text-primary/40 hover:text-primary transition-colors"
                        >
                          {category.name}
                          {openCategories.includes(category.name) ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                        <AnimatePresence initial={false}>
                          {openCategories.includes(category.name) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              {category.items.map((item) => (
                                <NavLink
                                  key={item.name}
                                  to={item.path}
                                  className={({ isActive }) =>
                                    cn(
                                      "flex items-center pl-16 py-1.5 text-[11px] font-medium transition-all relative",
                                      isActive ? "text-secondary font-bold after:absolute after:left-14 after:w-1 after:h-1 after:bg-secondary after:rounded-full" : "text-primary/50 hover:text-secondary"
                                    )
                                  }
                                >
                                  {item.name}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="px-6 mt-auto pt-6 border-t border-outline-variant/30 space-y-2">
            <button className="w-full bg-secondary text-white py-3 rounded-[1px] text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-secondary/10">
              Try Pro
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-primary/40 hover:text-primary transition-colors">
              <Monitor className="w-4 h-4" /> Settings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-primary/40 hover:text-primary transition-colors">
              <FileText className="w-4 h-4" /> Help Center
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
          
          {/* Footer */}
          <footer className="w-full py-12 px-8 lg:px-16 mt-24 border-t border-outline-variant/30 bg-surface-container-low">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-primary/40 font-label text-xs">© 2024 BiDitek Converter</p>
              <div className="flex gap-8">
                {['About', 'Privacy', 'Terms'].map((link) => (
                  <a key={link} href="#" className="text-primary/40 hover:text-secondary transition-colors font-label text-xs underline-offset-4 hover:underline">
                    {link}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4 text-primary/40">
                <span className="font-label text-xs font-bold">English (US)</span>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface-container-low pt-24 px-6 md:hidden"
          >
            <nav className="space-y-6">
              <Link
                to="/converters"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 text-2xl font-headline font-bold text-primary"
              >
                <Repeat className="w-8 h-8 text-blue-600" />
                Converters
              </Link>
              <Link
                to="/calculators"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 text-2xl font-headline font-bold text-primary"
              >
                <Calculator className="w-8 h-8 text-[#5D4037]" />
                Calculators
              </Link>
              <div className="pt-10 border-t border-outline-variant">
                <button 
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-4 text-xl font-headline font-bold text-primary/40"
                >
                  {theme === 'light' ? (
                    <><Moon className="w-6 h-6" /> Dark Mode</>
                  ) : (
                    <><Sun className="w-6 h-6" /> Light Mode</>
                  )}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
