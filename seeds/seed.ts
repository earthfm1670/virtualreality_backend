import sequelize from "@/config/database";
import User from "@/models/user";
import Currency from "@/models/currency";
import Wallet from "@/models/wallet";
import Order from "@/models/order";
import Transaction from "@/models/transaction";
import Transfer from "@/models/transfer";

async function seedDatabase() {
  try {
    // Sync database (drops and recreates tables for testing)
    await sequelize.sync({ force: true });
    console.log("Database synced");

    // Seed Users
    const user1 = await User.create({
      name: "John Doe",
      email: "john@example.com",
      password: "hashed_password_1", // In a real app, hash this with bcrypt
      created_at: new Date(),
      updated_at: new Date(),
    });
    const user2 = await User.create({
      name: "Jane Smith",
      email: "jane@example.com",
      password: "hashed_password_2",
      created_at: new Date(),
      updated_at: new Date(),
    });
    console.log("Users seeded");

    // Seed Currencies
    const btc = await Currency.create({
      name: "Bitcoin",
      symbol: "BTC",
      type: "crypto",
    });
    const usd = await Currency.create({
      name: "USD",
      symbol: "USD",
      type: "fiat",
    });
    console.log("Currencies seeded");

    // Seed Wallets
    await Wallet.create({
      user_id: user1.user_id,
      currency_id: btc.currency_id,
      balance: 1.5,
    });
    await Wallet.create({
      user_id: user2.user_id,
      currency_id: usd.currency_id,
      balance: 1000.0,
    });
    console.log("Wallets seeded");

    // Seed Orders
    await Order.create({
      user_id: user1.user_id,
      currency_id: btc.currency_id,
      order_type: "buy",
      amount: 0.1,
      price: 50000.0,
      status: "completed",
      created_at: new Date(),
    });
    await Order.create({
      user_id: user2.user_id,
      currency_id: usd.currency_id,
      order_type: "sell",
      amount: 100.0,
      price: 1.0,
      status: "open",
      created_at: new Date(),
    });
    console.log("Orders seeded");

    // Seed Transactions
    await Transaction.create({
      from_user_id: user1.user_id,
      to_user_id: user2.user_id,
      currency_id: btc.currency_id,
      amount: 0.05,
      type: "transfer",
      status: "completed",
      timestamp: new Date(),
    });
    await Transaction.create({
      from_user_id: user2.user_id,
      to_user_id: null, // External transaction
      currency_id: usd.currency_id,
      amount: 50.0,
      type: "exchange",
      status: "pending",
      timestamp: new Date(),
    });
    console.log("Transactions seeded");

    // Seed Transfers
    await Transfer.create({
      user_id: user1.user_id,
      currency_id: btc.currency_id,
      amount: 0.02,
      transfer_type: "internal",
      recipient_address: null,
      status: "completed",
      timestamp: new Date(),
    });
    await Transfer.create({
      user_id: user2.user_id,
      currency_id: usd.currency_id,
      amount: 20.0,
      transfer_type: "external",
      recipient_address: "external_address_123",
      status: "pending",
      timestamp: new Date(),
    });
    console.log("Transfers seeded");

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await sequelize.close(); // Close connection
  }
}

seedDatabase();
