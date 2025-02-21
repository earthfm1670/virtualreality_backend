import Transfer from "@/models/transfer";

export async function getTransfer() {
  return await Transfer.findAll();
}

export async function getTransferById(transferId: number) {
  return await Transfer.findByPk(transferId);
}

export async function createTransfer(transferData: any) {
  return await Transfer.create(transferData);
}

export async function updateTransferStatus(
  transferId: number,
  status: "completed" | "pending"
) {
  const transfer = await Transfer.findByPk(transferId);
  if (!transfer) throw new Error("Transfer not found");
  return await transfer.update({ status });
}

export async function deleteTransfer(transferId: number) {
  const transfer = await Transfer.findByPk(transferId);
  if (!transfer) throw new Error("Transfer not found");
  return await transfer.destroy();
}
