"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
//? step to get data from csv file
//? Load (node std lib) -> prase -> analyze -> report
//* install nodes ts instead of fs EX: $ npm i @types/node
// step 1: load the data from csv file to string
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
// console.log(reader);
//* bad code version
//* count how many times that the team 'Man United' win
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
;
console.log('Man United won ' + manUnitedWins + ' games.');
