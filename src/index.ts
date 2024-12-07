import { DataService } from './services/DataService';
import { RevenueService } from './services/RevenueService';
import { ExpenseService } from './services/ExpenseService';
import { ProfitService } from './services/ProfitService';
import { CapitalService } from './services/CapitalService';
import { Formatters } from './utils/Formatters';

const dataFilePath = './data/data.json';

try {
  const data = DataService.loadData(dataFilePath);

  const revenue = RevenueService.calculateRevenue(data);
  const expenses = ExpenseService.calculateExpenses(data);
  const grossProfitMargin = ProfitService.calculateGrossProfitMargin(revenue - expenses, revenue);
  const netProfitMargin = ProfitService.calculateNetProfitMargin(revenue, expenses);
  const workingCapitalRatio = CapitalService.calculateWorkingCapitalRatio(data);

 
  console.log(`Revenue: ${Formatters.formatCurrency(revenue)}`);
  console.log(`Expenses: ${Formatters.formatCurrency(expenses)}`);
  console.log(`Gross Profit Margin: ${Formatters.formatPercentage(grossProfitMargin)}`);
  console.log(`Net Profit Margin: ${Formatters.formatPercentage(netProfitMargin)}`);
  console.log(`Working Capital Ratio: ${Formatters.formatPercentage(workingCapitalRatio)}`);
} catch (error) {
  console.error('An error occurred while loading data:', error.message);
}

