"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicationController_1 = require("../controller/publicationController");
class PublicationRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', publicationController_1.publicationController.list);
        this.router.get('/:id', publicationController_1.publicationController.getOne);
        this.router.post('/', publicationController_1.publicationController.create);
        this.router.delete('/:id', publicationController_1.publicationController.delete);
        this.router.put('/:id', publicationController_1.publicationController.update);
    }
}
const publicationRoutes = new PublicationRoutes();
exports.default = publicationRoutes.router;
