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
exports.ProjectService = void 0;
const db_1 = require("../../../config/db");
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.project.create({
        data: payload,
        include: {
            owner: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    });
    return result;
});
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.project.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
    return result;
});
const updateProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.project.update({
        where: {
            id
        },
        data: Object.assign({}, payload)
    });
    return result;
});
const deleteProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.project.delete({
        where: {
            id
        }
    });
    return result;
});
exports.ProjectService = {
    createProject,
    getAllProject,
    updateProject,
    deleteProject
};
