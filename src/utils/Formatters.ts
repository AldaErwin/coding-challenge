
export class Formatters {
    static formatCurrency(value: number): string {
      return `$${Math.round(value).toLocaleString()}`;
    }
  
    static formatPercentage(value: number): string {
      return `${value.toFixed(1)}%`;
    }
  }
  