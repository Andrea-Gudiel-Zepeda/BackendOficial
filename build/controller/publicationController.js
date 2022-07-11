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
exports.publicationController = void 0;
const database_1 = __importDefault(require("../database"));
class PublicationController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const articule = yield database_1.default.query('SELECT * FROM publication');
            res.json(articule);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const publication = yield database_1.default.query('SELECT * FROM publication WHERE id_publication = ?', [id]);
            if (publication.length > 0) {
                return res.json(publication[0]);
            }
            else {
                res.status(404).json({ text: "The game doesn't exists" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO publication set ?', [req.body]);
            res.json({ message: 'Publication Save' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM publication WHERE id_publication = ?', [id]);
            res.json({ message: 'The game was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE publication set ? WHERE id_publication = ?', [req.body, id]);
            res.json({ message: 'The was updated' });
        });
    }
}
exports.publicationController = new PublicationController();
