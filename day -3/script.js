function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkGrade() {
    let marks = document.getElementById("marks").value;
    let result = document.getElementById("result");

    let grade = calculateGrade(Number(marks));
    result.innerText = "Grade: " + grade;
}
