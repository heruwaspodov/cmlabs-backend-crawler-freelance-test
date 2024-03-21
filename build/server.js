"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    var data = {
        status: true,
        code: 200,
        data: { message: "WSPDV - Crawler API" }
    };
    return res.status(200).json(data);
});
app.all('*', function (req, res) {
    var data = {
        status: false,
        code: 404,
        data: { message: "route not found" }
    };
    res.status(404).json(data);
});
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
