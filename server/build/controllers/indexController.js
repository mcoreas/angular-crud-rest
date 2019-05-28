"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API Us /api/games' });
    }
}
exports.indexController = new IndexController();
