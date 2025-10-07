"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.post("/", blog_controller_1.BlogController.createBlog);
router.get("/", blog_controller_1.BlogController.findAllBlogs);
router.get("/:id", blog_controller_1.BlogController.getSingleBlog);
router.patch("/:id", blog_controller_1.BlogController.updateBlog);
router.delete("/:id", blog_controller_1.BlogController.deleteBlog);
exports.BlogRouter = router;
