
    const resDiv = document.getElementById("result-div");

    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    document.getElementById("calculateBtn").addEventListener("click", function () {
      var weight = document.getElementById("weight").value;
      var height = document.getElementById("height").value;
      //To convert CM TO M
      var meterHeight = height * 0.01;
      //BMI Formula
      var bmi = weight / (meterHeight * meterHeight);

      //To Display Div
      document.getElementById("result-div").style.display = "block";

      document.getElementById("result-div").innerHTML = bmi;
      var bmiCategory = "Underweight";

      if (bmi < 18) {
        bmiCategory;
      } else if (bmi >= 18 && bmi <= 24.9) {
        bmiCategory = "Healthy";
      } else if (bmi >= 25 && bmi <= 39.9) {
        bmiCategory = "Overweight";
      } else {
        bmiCategory = "Obese";
      }

      document.getElementById("result").innerHTML = bmiCategory;
    });
