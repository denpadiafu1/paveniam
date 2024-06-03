interface Income {
  source: string; // The source of the income, e.g., 'Salary', 'Investment'
  amount: number; // The amount of income received
  dateReceived: Date; // The date when the income was received
  taxable: boolean; // Indicates if the income is taxable
  taxRate?: number; // Optional tax rate applicable to the income
}

// Usage example:
const monthlyIncome: Income = {
  source: 'Salary',
  amount: 5000,
  dateReceived: new Date('2024-04-01'),
  taxable: true,
  taxRate: 0.3
};
