"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controller/loginController");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', loginController_1.loginController.list);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
