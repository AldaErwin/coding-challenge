
import { FinancialRecord } from '../types/FinancialRecord';

export class RevenueService {
  static calculateRevenue(data: FinancialRecord[]): number {
    return data
      .filter((record) => record.account_category === 'revenue')
      .reduce((sum, record) => sum + record.total_value, 0);
  }
}
