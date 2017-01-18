import {core} from "./core/core";


const CI = CI || {};
CI.core = core;

console.log(CI);
console.log(CI.core.dom.query("body"));
console.log(CI.core.dom.data('test'));
