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
exports.BlogService = void 0;
const db_1 = require("../../../config/db");
const createBlogDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ title, content, thumbnail, authorId }) {
    const resutl = yield db_1.prisma.blog.create({
        data: {
            title,
            content,
            thumbnail,
            authorId
        }
    });
    return resutl;
});
const findAllBlogDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const resutl = yield db_1.prisma.blog.findMany({
        include: {
            author: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return resutl;
});
const getSingleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.blog.findUnique({
        where: {
            id
        }
    });
    return result;
});
const updateBlog = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.blog.update({
        where: {
            id
        },
        data: Object.assign({}, payload)
    });
    return result;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.blog.delete({
        where: {
            id
        },
    });
    return result;
});
exports.BlogService = {
    createBlogDB,
    findAllBlogDB,
    updateBlog,
    deleteBlog,
    getSingleBlog
};
