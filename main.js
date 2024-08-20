"use strict";
// ============================== Single Named import ==============================
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file1_1 = require("./file1");
const file_2_1 = require("./file 2");
console.log(file1_1.user_name);
(0, file_2_1.myfriends)();
//=============================== multiple Named import============================== 
const file1_2 = require("./file1");
console.log((0, file1_2.sum)(24, 5));
console.log(file1_2.friends);
console.log(file1_2.multiName);
//================================ Default import export ============================= 
// when importing a default Export you don't need
// to use curly braces
const default_js_1 = __importDefault(require("./default.js"));
console.log(`subtract  Result : ${(0, default_js_1.default)(450, 22)}`);
const object_js_1 = __importDefault(require("./object.js")); //  myObject rem name 
console.log(object_js_1.default);
const file_2_2 = __importDefault(require("./file 2"));
console.log(` result of  my vlaue :  ${file_2_2.default}`);
// ============================Namespace import=============================
// A namespace import is a type of import in
// typscript that allows you to import all exports of
// a module in a single namespace . 
const namespace = __importStar(require("./nameSpace.js"));
namespace.welcome;
namespace.admission;
namespace.classes;
namespace.fess;
