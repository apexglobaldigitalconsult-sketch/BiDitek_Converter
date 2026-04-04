import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Settings, 
  UserCircle, 
  ArrowRight, 
  Search, 
  HelpCircle,
  Repeat,
  Calculator,
  Menu,
  X,
  Sun,
  Moon
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

  return (
    <div className="min-h-screen flex flex-col max-w-[1920px] mx-auto bg-background">
      {/* Top Navigation Bar */}
      <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-surface-container-highest/50 h-20 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-headline font-extrabold tracking-tight text-primary">
            BiDitek Converter
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "font-headline font-bold text-lg transition-all relative py-1",
                    isActive 
                      ? "text-secondary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary" 
                      : "text-primary/40 hover:text-secondary"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden sm:flex items-center bg-surface-container-low px-4 py-2 rounded-[1px] border border-surface-container-highest/30">
            <Search className="w-4 h-4 text-primary/30" />
            <input 
              type="text" 
              placeholder="Search tools..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 font-label placeholder:text-primary/20"
            />
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 text-primary/40 hover:text-secondary transition-colors"
          >
            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>
          <button className="p-2 text-primary/40 hover:text-secondary transition-colors">
            <Settings className="w-6 h-6" />
          </button>
          <button className="p-2 text-primary/40 hover:text-secondary transition-colors">
            <UserCircle className="w-6 h-6" />
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
        <aside className="hidden lg:flex flex-col w-72 sticky top-20 h-[calc(100vh-5rem)] bg-surface-container-low border-r border-surface-container-highest/30 py-10">
          <div className="px-8 mb-10">
            <h4 className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-1">Navigation</h4>
            <p className="text-[10px] text-primary/40 font-label">Swiss Precision Tools</p>
          </div>
          
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 pl-8 py-4 text-sm font-label font-bold uppercase tracking-widest transition-all relative group",
                    isActive 
                      ? "bg-white text-secondary rounded-r-[1px] shadow-sm" 
                      : "text-primary/60 hover:bg-surface-container-high hover:text-primary"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={cn("w-5 h-5", isActive ? "text-secondary" : "text-primary/40 group-hover:text-primary")} />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeNav"
                        className="absolute left-0 w-1 h-6 bg-secondary rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="px-6 mb-10">
            <button className="w-full bg-primary text-white py-4 rounded-[1px] font-headline font-bold tracking-widest hover:bg-secondary transition-all group flex items-center justify-center gap-2">
              TRY PRO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="px-8 pt-8 border-t border-surface-container-highest/50 space-y-4">
            <button className="flex items-center gap-3 text-primary/40 hover:text-primary transition-colors text-sm font-label uppercase tracking-widest font-bold">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
            <button className="flex items-center gap-3 text-primary/40 hover:text-primary transition-colors text-sm font-label uppercase tracking-widest font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Help</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
          
          {/* Footer */}
          <footer className="w-full py-12 px-8 lg:px-16 mt-24 border-t border-surface-container-highest/50 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-primary/40 font-label text-xs">© 2024 BiDitek Converter</p>
              <div className="flex gap-8">
                {['About', 'Privacy', 'Terms'].map((link) => (
                  <a key={link} href="#" className="text-primary/40 hover:text-primary transition-colors font-label text-xs underline-offset-4 hover:underline">
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
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <nav className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-headline font-bold text-primary"
                >
                  <item.icon className="w-8 h-8 text-secondary" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-10 space-y-4">
                <button className="w-full bg-primary text-white py-5 rounded-[1px] font-headline font-bold text-xl">
                  TRY PRO
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 p-4 bg-surface-container-low rounded-[1px] text-primary/60 font-bold">
                    <Settings className="w-5 h-5" /> Settings
                  </button>
                  <button className="flex items-center justify-center gap-2 p-4 bg-surface-container-low rounded-[1px] text-primary/60 font-bold">
                    <HelpCircle className="w-5 h-5" /> Help
                  </button>
                  <button 
                    onClick={toggleTheme}
                    className="col-span-2 flex items-center justify-center gap-2 p-4 bg-surface-container-low rounded-[1px] text-primary/60 font-bold"
                  >
                    {theme === 'light' ? (
                      <><Moon className="w-5 h-5" /> Dark Mode</>
                    ) : (
                      <><Sun className="w-5 h-5" /> Light Mode</>
                    )}
                  </button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
