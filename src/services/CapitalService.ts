
import { FinancialRecord } from '../types/FinancialRecord';

export class CapitalService {
  static calculateWorkingCapitalRatio(data: FinancialRecord[]): number {
    const assets = data
      .filter(
        (record) =>
          record.account_category === 'assets' &&
          record.value_type === 'debit' &&
          ['current', 'bank', 'current_accounts_receivable'].includes(
            record.account_type
          )
      )
      .reduce((sum, record) => sum + record.total_value, 0) -
      data
        .filter(
          (record) =>
            record.account_category === 'assets' &&
            record.value_type === 'credit' &&
            ['current', 'bank', 'current_accounts_receivable'].includes(
              record.account_type
            )
        )
        .reduce((sum, record) => sum + record.total_value, 0);

    const liabilities = data
      .filter(
        (record) =>
          record.account_category === 'liability' &&
          record.value_type === 'credit' &&
          ['current', 'current_accounts_payable'].includes(record.account_type)
      )
      .reduce((sum, record) => sum + record.total_value, 0) -
      data
        .filter(
          (record) =>
            record.account_category === 'liability' &&
            record.value_type === 'debit' &&
            ['current', 'current_accounts_payable'].includes(record.account_type)
        )
        .reduce((sum, record) => sum + record.total_value, 0);

    return (assets / liabilities) * 100;
  }
}
