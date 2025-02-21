import Order from "@/models/order";

export async function getOrders() {
  return await Order.findAll();
}

export async function getOrderById(orderId: number) {
  return await Order.findByPk(orderId);
}

export async function createOrder(orderData: any) {
  return await Order.create(orderData);
}

export async function updateOrder(orderId: number, updatedData: any) {
  const order = await Order.findByPk(orderId);
  if (!order) throw new Error("Order not found");
  return await order.update(updatedData);
}

export async function deleteOrder(orderId: number) {
  const order = await Order.findByPk(orderId);
  if (!order) throw new Error("Order not found");
  return await order.destroy();
}
