export {}; 

import * as fs from 'fs';
import { FinancialRecord } from '../types/FinancialRecord';

export class DataService {
  static loadData(filePath: string): FinancialRecord[] {
    try {
      console.log(`Loading data from: ${filePath}`);
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const jsonData = JSON.parse(rawData);

      if (!Array.isArray(jsonData.data)) {
        throw new Error('Invalid data structure: "data" property is missing or not an array.');
      }

      const data: FinancialRecord[] = jsonData.data.map((record: any) => {
        if (typeof record.account_category !== 'string' || typeof record.total_value !== 'number') {
          throw new Error('Invalid record structure.');
        }
        return record as FinancialRecord;
      });

      return data;
    } catch (error) {
      console.error('Error reading data file:', error.message);
      throw new Error('Could not load data. Ensure the file exists and is in the correct format.');
    }
  }
}
