import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Converters from './pages/Converters';
import Calculators from './pages/Calculators';
import BMICalculator from './pages/BMICalculator';
import MortgageCalculator from './pages/MortgageCalculator';
import LoanCalculator from './pages/LoanCalculator';
import AutoLoanCalculator from './pages/AutoLoanCalculator';
import InterestCalculator from './pages/InterestCalculator';
import PaymentCalculator from './pages/PaymentCalculator';
import RetirementCalculator from './pages/RetirementCalculator';
import AmortizationCalculator from './pages/AmortizationCalculator';
import InvestmentCalculator from './pages/InvestmentCalculator';
import InflationCalculator from './pages/InflationCalculator';
import FinanceCalculator from './pages/FinanceCalculator';
import IncomeTaxCalculator from './pages/IncomeTaxCalculator';
import CompoundInterestCalculator from './pages/CompoundInterestCalculator';
import SalaryCalculator from './pages/SalaryCalculator';
import InterestRateCalculator from './pages/InterestRateCalculator';
import SalesTaxCalculator from './pages/SalesTaxCalculator';
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
            <Route path="/calculators/mortgage" element={<MortgageCalculator />} />
            <Route path="/calculators/loan" element={<LoanCalculator />} />
            <Route path="/calculators/auto-loan" element={<AutoLoanCalculator />} />
            <Route path="/calculators/interest" element={<InterestCalculator />} />
            <Route path="/calculators/payment" element={<PaymentCalculator />} />
            <Route path="/calculators/retirement" element={<RetirementCalculator />} />
            <Route path="/calculators/amortization" element={<AmortizationCalculator />} />
            <Route path="/calculators/investment" element={<InvestmentCalculator />} />
            <Route path="/calculators/inflation" element={<InflationCalculator />} />
            <Route path="/calculators/finance" element={<FinanceCalculator />} />
            <Route path="/calculators/income-tax" element={<IncomeTaxCalculator />} />
            <Route path="/calculators/compound-interest" element={<CompoundInterestCalculator />} />
            <Route path="/calculators/salary" element={<SalaryCalculator />} />
            <Route path="/calculators/interest-rate" element={<InterestRateCalculator />} />
            <Route path="/calculators/sales-tax" element={<SalesTaxCalculator />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
