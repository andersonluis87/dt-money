export const formatCurrency = (amount: number): string => {
  if (isNaN(amount) || typeof amount !== 'number') return '';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);
}