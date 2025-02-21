import Transaction from "@/models/transaction";

export async function getTransactions() {
  return await Transaction.findAll();
}

export async function getTransactionById(transactionId: number) {
  return await Transaction.findByPk(transactionId);
}

export async function createTransaction(transactionData: any) {
  return await Transaction.create(transactionData);
}

export async function updateTransactionStatus(
  transactionId: number,
  status: "completed" | "pending" | "failed"
) {
  const transaction = await Transaction.findByPk(transactionId);
  if (!transaction) throw new Error("Transaction not found");
  return await transaction.update({ status });
}

export async function deleteTransaction(transactionId: number) {
  const transaction = await Transaction.findByPk(transactionId);
  if (!transaction) throw new Error("Transaction not found");
  return await transaction.destroy();
}
