import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Converters from './pages/Converters';
import Calculators from './pages/Calculators';
import BMICalculator from './pages/BMICalculator';
import { ThemeProvider } from './lib/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/converters" element={<Converters />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/calculators/bmi" element={<BMICalculator />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
