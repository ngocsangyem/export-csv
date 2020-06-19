// import { MatchReader } from "./MatchReader";

import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

// const reader = new MatchReader("./football.csv");
// reader.read();

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();


