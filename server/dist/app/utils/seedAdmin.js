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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = void 0;
const db_1 = require("../../config/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield db_1.prisma.user.findUnique({
        where: { email: process.env.ADMIN_EMAIL },
    });
    if (admin) {
        console.log("admin accont is Already exits");
        return;
    }
    const hashedPassword = yield bcrypt_1.default.hash(process.env.ADMIN_PASS, 10);
    if (!admin) {
        const admin = yield db_1.prisma.user.create({
            data: {
                name: "Rakibul Hasan",
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword,
            },
        });
        console.log(admin);
        console.log("✅ Admin user Created!");
    }
    else {
        console.log("⚠️ Admin already exists!");
    }
});
exports.seedAdmin = seedAdmin;
