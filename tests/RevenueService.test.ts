import { describe, test, expect } from '@jest/globals';
import { RevenueService } from '../src/services/RevenueService';
import { FinancialRecord } from '../src/types/FinancialRecord';

describe('RevenueService', () => {
  test('calculates total revenue correctly', () => {
    const mockData: FinancialRecord[] = [
      {
        account_category: 'revenue', total_value: 100,
        account_type: '',
        value_type: '',
        account_code: '',
        account_currency: '',
        account_identifier: '',
        account_status: '',
        account_name: ''
      },
      {
        account_category: 'revenue', total_value: 200,
        account_type: '',
        value_type: '',
        account_code: '',
        account_currency: '',
        account_identifier: '',
        account_status: '',
        account_name: ''
      },
      {
        account_category: 'expense', total_value: 50,
        account_type: '',
        value_type: '',
        account_code: '',
        account_currency: '',
        account_identifier: '',
        account_status: '',
        account_name: ''
      },
    ];
    const totalRevenue = RevenueService.calculateRevenue(mockData);
    expect(totalRevenue).toBe(300);
  });
});

