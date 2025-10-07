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
exports.ProjectController = void 0;
const project_service_1 = require("./project.service");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paylaod = req.body;
        const result = yield project_service_1.ProjectService.createProject(paylaod);
        res.status(200).json({
            success: true,
            message: "Project data created successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.ProjectService.getAllProject();
        res.status(200).json({
            success: true,
            message: "Project data fetched successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const payload = req.body;
        const result = yield project_service_1.ProjectService.updateProject(id, payload);
        res.status(200).json({
            success: true,
            message: "Project data  updated successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const payload = req.body;
        const result = yield project_service_1.ProjectService.deleteProject(id, payload);
        res.status(200).json({
            success: true,
            message: "Project data deleted  successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.ProjectController = {
    createProject,
    getAllProject,
    updateProject,
    deleteProject
};
