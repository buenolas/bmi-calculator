document.getElementById('compute').addEventListener('click', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('result');

    if (name !== '' && height && weight) {
        let bmi = weight / Math.pow(height, 2);
        bmi = bmi.toFixed(2);

        const bmiRanges = [
            { min: 0, max: 18.5, message: "underweight" },
            { min: 18.5, max: 24.9, message: "in normal weight" },
            { min: 25, max: 29.9, message: "overweight" },
            { min: 30, max: 34.9, message: "in degree 1 obesity" },
            { min: 35, max: 39.9, message: "in degree 2 obesity" },
            { min: 40, max: Infinity, message: "in degree 3 obesity" }
        ];

        const bmiRange = bmiRanges.find(range => bmi >= range.min && bmi < range.max);
        result.textContent = `${name}, your BMI is ${bmi}, and you are ${bmiRange.message}.`;

    } else {
        result.textContent = "Error: invalid data entry";
    }
});
