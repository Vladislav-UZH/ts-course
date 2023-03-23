"use strict";
const buttonEl = document.querySelector("button");
const firstInput = document.getElementById("num1");
const secondInput = document.getElementById("num2");
const resultField = document.querySelector(".resultField");
console.log(resultField);
const increment = (num1, num2) => {
    return num1 + num2;
};
buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.addEventListener("click", function () {
    const value = increment(+firstInput.value, +secondInput.value);
    resultField.textContent = String(value);
    console.log(increment(+firstInput.value, +secondInput.value));
});
//# sourceMappingURL=app.js.map