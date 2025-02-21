import User from "@/models/user";

export async function getUsers() {
  return await User.findAll();
}

export async function getUserById(userId: number) {
  return await User.findByPk(userId);
}

export async function createUser(userData: any) {
  return await User.create(userData);
}

export async function updateUser(userId: number, updatedData: any) {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("User not found");
  return await user.update(updatedData);
}

export async function deleteUser(userId: number) {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("User not found");
  return await user.destroy();
}
