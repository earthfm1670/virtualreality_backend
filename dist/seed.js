"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("@/config/database");
var user_1 = require("@/models/user");
var currency_1 = require("@/models/currency");
var wallet_1 = require("@/models/wallet");
var order_1 = require("@/models/order");
var transaction_1 = require("@/models/transaction");
var transfer_1 = require("@/models/transfer");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var user1, user2, btc, usd, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 14, 15, 17]);
                    // Sync database (drops and recreates tables for testing)
                    return [4 /*yield*/, database_1.default.sync({ force: true })];
                case 1:
                    // Sync database (drops and recreates tables for testing)
                    _a.sent();
                    console.log("Database synced");
                    return [4 /*yield*/, user_1.default.create({
                            name: "John Doe",
                            email: "john@example.com",
                            password: "hashed_password_1", // In a real app, hash this with bcrypt
                            created_at: new Date(),
                            updated_at: new Date(),
                        })];
                case 2:
                    user1 = _a.sent();
                    return [4 /*yield*/, user_1.default.create({
                            name: "Jane Smith",
                            email: "jane@example.com",
                            password: "hashed_password_2",
                            created_at: new Date(),
                            updated_at: new Date(),
                        })];
                case 3:
                    user2 = _a.sent();
                    console.log("Users seeded");
                    return [4 /*yield*/, currency_1.default.create({
                            name: "Bitcoin",
                            symbol: "BTC",
                            type: "crypto",
                        })];
                case 4:
                    btc = _a.sent();
                    return [4 /*yield*/, currency_1.default.create({
                            name: "USD",
                            symbol: "USD",
                            type: "fiat",
                        })];
                case 5:
                    usd = _a.sent();
                    console.log("Currencies seeded");
                    // Seed Wallets
                    return [4 /*yield*/, wallet_1.default.create({
                            user_id: user1.user_id,
                            currency_id: btc.currency_id,
                            balance: 1.5,
                        })];
                case 6:
                    // Seed Wallets
                    _a.sent();
                    return [4 /*yield*/, wallet_1.default.create({
                            user_id: user2.user_id,
                            currency_id: usd.currency_id,
                            balance: 1000.0,
                        })];
                case 7:
                    _a.sent();
                    console.log("Wallets seeded");
                    // Seed Orders
                    return [4 /*yield*/, order_1.default.create({
                            user_id: user1.user_id,
                            currency_id: btc.currency_id,
                            order_type: "buy",
                            amount: 0.1,
                            price: 50000.0,
                            status: "completed",
                            created_at: new Date(),
                        })];
                case 8:
                    // Seed Orders
                    _a.sent();
                    return [4 /*yield*/, order_1.default.create({
                            user_id: user2.user_id,
                            currency_id: usd.currency_id,
                            order_type: "sell",
                            amount: 100.0,
                            price: 1.0,
                            status: "open",
                            created_at: new Date(),
                        })];
                case 9:
                    _a.sent();
                    console.log("Orders seeded");
                    // Seed Transactions
                    return [4 /*yield*/, transaction_1.default.create({
                            from_user_id: user1.user_id,
                            to_user_id: user2.user_id,
                            currency_id: btc.currency_id,
                            amount: 0.05,
                            type: "transfer",
                            status: "completed",
                            timestamp: new Date(),
                        })];
                case 10:
                    // Seed Transactions
                    _a.sent();
                    return [4 /*yield*/, transaction_1.default.create({
                            from_user_id: user2.user_id,
                            to_user_id: null, // External transaction
                            currency_id: usd.currency_id,
                            amount: 50.0,
                            type: "exchange",
                            status: "pending",
                            timestamp: new Date(),
                        })];
                case 11:
                    _a.sent();
                    console.log("Transactions seeded");
                    // Seed Transfers
                    return [4 /*yield*/, transfer_1.default.create({
                            user_id: user1.user_id,
                            currency_id: btc.currency_id,
                            amount: 0.02,
                            transfer_type: "internal",
                            recipient_address: null,
                            status: "completed",
                            timestamp: new Date(),
                        })];
                case 12:
                    // Seed Transfers
                    _a.sent();
                    return [4 /*yield*/, transfer_1.default.create({
                            user_id: user2.user_id,
                            currency_id: usd.currency_id,
                            amount: 20.0,
                            transfer_type: "external",
                            recipient_address: "external_address_123",
                            status: "pending",
                            timestamp: new Date(),
                        })];
                case 13:
                    _a.sent();
                    console.log("Transfers seeded");
                    console.log("Seeding completed successfully!");
                    return [3 /*break*/, 17];
                case 14:
                    error_1 = _a.sent();
                    console.error("Seeding failed:", error_1);
                    return [3 /*break*/, 17];
                case 15: return [4 /*yield*/, database_1.default.close()];
                case 16:
                    _a.sent(); // Close connection
                    return [7 /*endfinally*/];
                case 17: return [2 /*return*/];
            }
        });
    });
}
seedDatabase();
