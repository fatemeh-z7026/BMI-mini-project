let $ = document;
let weightInput = $.getElementById("weight");
let heightInput = $.getElementById("height");
let weightVal = $.getElementById("weight-val");
let heightVal = $.getElementById("height-val");
let result = $.getElementById("result");
let category = $.getElementById("category");

function bmiCal() {
  weightVal.innerHTML = weightInput.value ;
  heightVal.innerHTML = heightInput.value;

  let bmiValue = (
    weightVal.innerHTML / Math.pow(heightVal.innerHTML / 100, 2)
  ).toFixed(1);
  result.innerHTML = bmiValue;

  if (bmiValue < 18.5) {
    category.innerHTML = "UnderWeight";
    result.style.color = "#ffc44d";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    category.innerHTML = "Normal Weight";
    result.style.color = "#0be881";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    category.innerHTML = "OverWeight";
    result.style.color = "#ff884d";
  } else {
    category.innerHTML = "Obese";
    result.style.color = "#ff5e4d";
  }
}

weightInput.addEventListener("input", bmiCal);
heightInput.addEventListener("input", bmiCal);
