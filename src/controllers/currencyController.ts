import Currency from "@/models/currency";

export async function getCurrencies() {
  return await Currency.findAll();
}

export async function getCurrencyById(currencyId: number) {
  return await Currency.findByPk(currencyId);
}

export async function createCurrency(currencyData: any) {
  return await Currency.create(currencyData);
}

export async function updateCurrency(currencyId: number, updatedData: any) {
  const currency = await Currency.findByPk(currencyId);
  if (!currency) throw new Error("Currency not found");
  return await currency.update(updatedData);
}

export async function deleteCurrency(currencyId: number) {
  const currency = await Currency.findByPk(currencyId);
  if (!currency) throw new Error("Currency not found");
  return await currency.destroy();
}
