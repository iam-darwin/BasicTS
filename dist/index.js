"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    return res.json({
        message: "It's working"
    });
});
app.get("/test2", (req, res) => {
    return res.json({
        message: "It's working mate let's do this"
    });
});
app.get("/:id", (req, res) => {
    return res.json({
        id: req.params.id
    });
});
app.get("/test", (req, res) => {
    return res.json({
        message: "It worked brother"
    });
});
app.listen(3000, () => {
    console.log("Server started working");
});
