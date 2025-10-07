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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const blog_service_1 = require("./blog.service");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const blog = yield blog_service_1.BlogService.createBlogDB(data);
        res.status(200).json({
            success: true,
            message: "blog Created successfull",
            data: blog
        });
    }
    catch (error) {
        console.log(error);
    }
});
const findAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_service_1.BlogService.findAllBlogDB();
        res.status(201).json({
            success: true,
            message: "blog data recived successfull",
            data: blog
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield blog_service_1.BlogService.getSingleBlog(id);
        res.status(201).json({
            success: true,
            message: "single blog recived successfull",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const payload = req.body;
        const result = yield blog_service_1.BlogService.updateBlog(id, payload);
        res.status(200).json({
            success: true,
            message: "blog updated successfull",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield blog_service_1.BlogService.deleteBlog(id);
        res.status(200).json({
            success: true,
            message: "blog deleted successfull",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.BlogController = {
    createBlog,
    findAllBlogs,
    updateBlog,
    deleteBlog,
    getSingleBlog
};
