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
import GenericCalculator from './pages/GenericCalculator';
import Sitemap from './pages/Sitemap';
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
            
            {/* Financial Calculators */}
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

            {/* Fitness & Health Calculators */}
            <Route path="/calculators/bmi" element={<BMICalculator />} />
            <Route path="/calculators/calorie" element={<GenericCalculator title="Calorie Calculator" category="Fitness & Health" />} />
            <Route path="/calculators/body-fat" element={<GenericCalculator title="Body Fat Calculator" category="Fitness & Health" />} />
            <Route path="/calculators/bmr" element={<GenericCalculator title="BMR Calculator" category="Fitness & Health" />} />
            <Route path="/calculators/ideal-weight" element={<GenericCalculator title="Ideal Weight Calculator" category="Fitness & Health" />} />
            <Route path="/calculators/pace" element={<GenericCalculator title="Pace Calculator" category="Fitness & Health" />} />
            <Route path="/calculators/pregnancy" element={<GenericCalculator title="Pregnancy Calculator" category="Fitness & Health" />} />
            <Route path="/calculators/conception" element={<GenericCalculator title="Pregnancy Conception" category="Fitness & Health" />} />
            <Route path="/calculators/due-date" element={<GenericCalculator title="Due Date Calculator" category="Fitness & Health" />} />

            {/* Math Calculators */}
            <Route path="/calculators/scientific" element={<GenericCalculator title="Scientific Calculator" category="Math" />} />
            <Route path="/calculators/fraction" element={<GenericCalculator title="Fraction Calculator" category="Math" />} />
            <Route path="/calculators/percentage" element={<GenericCalculator title="Percentage Calculator" category="Math" />} />
            <Route path="/calculators/random" element={<GenericCalculator title="Random Number Generator" category="Math" />} />
            <Route path="/calculators/triangle" element={<GenericCalculator title="Triangle Calculator" category="Math" />} />
            <Route path="/calculators/std-dev" element={<GenericCalculator title="Standard Deviation" category="Math" />} />

            {/* Other Calculators */}
            <Route path="/calculators/age" element={<GenericCalculator title="Age Calculator" category="Other" />} />
            <Route path="/calculators/date" element={<GenericCalculator title="Date Calculator" category="Other" />} />
            <Route path="/calculators/time" element={<GenericCalculator title="Time Calculator" category="Other" />} />
            <Route path="/calculators/hours" element={<GenericCalculator title="Hours Calculator" category="Other" />} />
            <Route path="/calculators/gpa" element={<GenericCalculator title="GPA Calculator" category="Other" />} />
            <Route path="/calculators/grade" element={<GenericCalculator title="Grade Calculator" category="Other" />} />
            <Route path="/calculators/concrete" element={<GenericCalculator title="Concrete Calculator" category="Other" />} />
            <Route path="/calculators/subnet" element={<GenericCalculator title="Subnet Calculator" category="Other" />} />
            <Route path="/calculators/password" element={<GenericCalculator title="Password Generator" category="Other" />} />
            <Route path="/calculators/conversion" element={<GenericCalculator title="Conversion Calculator" category="Other" />} />

            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
