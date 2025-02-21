import Wallet from "@/models/wallet";

export async function getWallets() {
  return await Wallet.findAll();
}

export async function getWalletByUser(userId: number) {
  return await Wallet.findAll({ where: { user_id: userId } });
}

export async function createWallet(walletData: any) {
  return await Wallet.create(walletData);
}

export async function updateWallet(walletId: number, updatedData: any) {
  const wallet = await Wallet.findByPk(walletId);
  if (!wallet) throw new Error("Wallet not found");
  return await wallet.update(updatedData);
}

export async function deleteWallet(walletId: number) {
  const wallet = await Wallet.findByPk(walletId);
  if (!wallet) throw new Error("Wallet not found");
  return await wallet.destroy();
}
