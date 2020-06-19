"use strict";
// import { MatchReader } from "./MatchReader";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// const reader = new MatchReader("./football.csv");
// reader.read();
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
var summary = Summary_1.Summary.winsAnalysisWithHTMLreport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
