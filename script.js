document.getElementById('compute').addEventListener('click', e => { //listen to when the user clicks compute
    e.preventDefault();

    const name = document.getElementById('name').value;                  //
    const height = parseFloat(document.getElementById('height').value);  //    get values or id  
    const weight = parseFloat(document.getElementById('weight').value);  //
    const result = document.getElementById('result');                    //

    if (name !== '' && height && weight) {    // verify if its not null
        let bmi = weight / Math.pow(height, 2); // do the math
        bmi = bmi.toFixed(2);    //set 2 places

        const bmiRanges = [    //set the ranges in wich bmi belong to and the message linked to it.
            { min: 0, max: 18.5, message: "underweight" },
            { min: 18.5, max: 24.9, message: "in normal weight" },
            { min: 25, max: 29.9, message: "overweight" },
            { min: 30, max: 34.9, message: "in degree 1 obesity" },
            { min: 35, max: 39.9, message: "in degree 2 obesity" },
            { min: 40, max: Infinity, message: "in degree 3 obesity" }
        ];

        const bmiRange = bmiRanges.find(range => bmi >= range.min && bmi < range.max);    //find on what range it belongs
        result.textContent = `${name}, your BMI is ${bmi}, and you are ${bmiRange.message}.`;    //put the result on the div

    } else {
        result.textContent = "Error: invalid data entry";    //in case one of the entry data is null
    }
});
