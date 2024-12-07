
import { FinancialRecord } from '../types/FinancialRecord';

export class ProfitService {
  static calculateGrossProfitMargin(sales: number, revenue: number): number {
    return (sales / revenue) * 100;
  }

  static calculateNetProfitMargin(revenue: number, expenses: number): number {
    return ((revenue - expenses) / revenue) * 100;
  }
}
