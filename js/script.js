var totalCalc;
var age;
var sex;
var height;
var weight;
var activity;
var userExLevel;
var sexChoice;
var finalResult;
var finalResultLoss;
var finalResultGain;
var finalTotalCalc;

function convertUserExLevel() {
    if (userExLevel === '1') {
        activity = finalTotalCalc;
    } else if (userExLevel === '2') {
        activity = finalTotalCalc * 1.2;
    } else if (userExLevel === '3') {
        activity = finalTotalCalc * 1.3;
    } else if (userExLevel === '4') {
        activity = finalTotalCalc * 1.4;
    } else if (userExLevel === '5') {
        activity = finalTotalCalc * 1.5;
    } else if (userExLevel === '6') {
        activity = finalTotalCalc * 1.6;
    } else if (userExLevel === '7') {
        activity = finalTotalCalc * 1.7;
    } else if (userExLevel === '8') {
        activity = finalTotalCalc * 1.9;
    }
    
    finalResult = activity.toString();
    var finalLossInt = activity - 500;
    finalResultLoss = finalLossInt.toString();
    var finalGainInt = activity + 500;
    finalResultGain = finalGainInt.toString();
}


function calcFormula(age, sex, height, weight) {
    
    var ageInt = parseInt(age);
    var heightInt = parseInt(height);
    var weightInt = parseInt(weight);
    if (sex === '1') {
        sexChoice = "male";
    } else {
        sexChoice = "female";
    }
    
    var weightKG = weightInt * 0.45359237;
    
    if (sexChoice === "male") {
        totalCalc = (10 * weightKG) + (6.25 * heightInt) - (5 * ageInt) + 5;
    } else {
        totalCalc = (10 * weightKG) + (6.25 * heightInt) - (5 * ageInt) - 161;
    }
    
    finalTotalCalc = Math.round(totalCalc);
}

$("#submitButton").click(function() {
    age = $('#userAge').val();
    sex = $('input[name=optRadio]:checked').val();
    height = $('#userHeight').val();
    weight = $('#userWeight').val();
    userExLevel = $('#userExLevel').val();
    calcFormula(age, sex, height, weight);
    convertUserExLevel();
    $('#finalResult').html('To maintain, you should eat ' + finalResult + ' calories.');
    $('#finalResultLoss').html('To lose weight, you should eat ' + finalResultLoss + ' calories.');
    $('#finalResultGain').html('To gain weight, you should eat ' + finalResultGain + ' calories.');
});