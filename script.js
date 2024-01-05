function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    const resultElement = document.getElementById('result');

    if (bmi < 18.5) {
        resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi < 25) {
        resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}. Your weight is normal.`;
    } else if (bmi >= 25 && bmi < 30) {
        resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    } else {
        resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
    }
}
