
import { FinancialRecord } from '../types/FinancialRecord';

export class ExpenseService {
  static calculateExpenses(data: FinancialRecord[]): number {
    return data
      .filter((record) => record.account_category === 'expense')
      .reduce((sum, record) => sum + record.total_value, 0);
  }
}
