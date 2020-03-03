

function thankUser() {
    alert("Thank you!");
}

function validateCourse() {
    var name = document.getElementById("courseName");
    name = name.value;
    if (name.length < 1) {
        alert("Course name cannot be empty!");
        return false;
    } else {
        alert("Thank you for adding a course!");
        return true;
    }
}
