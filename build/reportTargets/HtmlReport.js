"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HTMLReport = /** @class */ (function () {
    function HTMLReport() {
    }
    HTMLReport.prototype.print = function (report) {
        var htmlTemplate = "\n\t\t\t<div>\n\t\t\t\t<h1>Analysis Output</h1>\n\t\t\t\t<div>" + report + "</div>\n\t\t\t</div>\n\t\t";
        fs_1.default.writeFileSync("report.html", htmlTemplate);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
