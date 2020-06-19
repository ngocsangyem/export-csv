// import { MatchReader } from "./MatchReader";

import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/Consolereport";
import { HTMLReport } from "./reportTargets/HtmlReport";

// const reader = new MatchReader("./football.csv");
// reader.read();

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHTMLreport("Man United");

matchReader.load();

summary.buildAndPrintReport(matchReader.matches);
