const buttonEl = document.querySelector("button") as HTMLInputElement;
const firstInput = document.getElementById("num1") as HTMLInputElement;
const secondInput = document.getElementById("num2") as HTMLInputElement;
const resultField = document.querySelector(".resultField") as HTMLBodyElement;
console.log(resultField);

const increment = (num1: number, num2: number): number => {
  return num1 + num2;
};

buttonEl?.addEventListener("click", function (): void {
  const value = increment(+firstInput.value, +secondInput.value);
  resultField.textContent = String(value);
  console.log(increment(+firstInput.value, +secondInput.value));
});
