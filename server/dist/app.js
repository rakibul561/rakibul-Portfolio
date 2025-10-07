"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./app/modules/auth/auth.route");
const blog_route_1 = require("./app/modules/blog/blog.route");
const project_route_1 = require("./app/modules/project/project.route");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use("/api/auth", auth_route_1.AuthRouter);
app.use("/api/blog", blog_route_1.BlogRouter);
app.use("/api/project", project_route_1.ProjectRouter);
// Default route for testing
app.get("/", (_req, res) => {
    res.send("API is running");
});
// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});
exports.default = app;
