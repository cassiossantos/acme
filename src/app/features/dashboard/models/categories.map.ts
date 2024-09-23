import { Category } from './categories.enum';

export const CategoryMap: { [key in Category]: string } = {
  [Category.Salary]: 'Salário',
  [Category.BusinessIncome]: 'Renda de Negócios',
  [Category.InvestmentReturns]: 'Retorno de Investimentos',
  [Category.Gifts]: 'Presentes',
  [Category.RentalIncome]: 'Renda de Aluguel',
  [Category.Rent]: 'Aluguel',
  [Category.Utilities]: 'Utilidades',
  [Category.Groceries]: 'Mantimentos',
  [Category.Transportation]: 'Transporte',
  [Category.Entertainment]: 'Entretenimento',
  [Category.HealthCare]: 'Cuidados de Saúde',
  [Category.Education]: 'Educação',
  [Category.Miscellaneous]: 'Diversos',
};

export const generateCategoryList = () => {
  return Object.entries(CategoryMap).map(([key, value]) => ({
    slug: key,
    value: value,
  }));
};

export interface CategoryOption {
  slug: string;
  value: string;
}
