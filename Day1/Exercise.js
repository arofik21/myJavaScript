"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angleOfTriangle = angleOfTriangle;
function angleOfTriangle(firstAngle, secondAngle) {
    return 180 - (firstAngle + secondAngle);
}
var result = angleOfTriangle(80, 65);
console.log("The correct angle value is ".concat(result));
