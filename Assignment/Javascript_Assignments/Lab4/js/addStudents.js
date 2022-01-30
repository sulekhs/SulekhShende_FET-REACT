var i = 0;
var students = Array();

function addStudents() {
    if(i < 4){
        students[i] = document.getElementById("names").value;
        i++;
    } else {
        alert("Only 4 Students are allowed!! ");
    }

    document.getElementById("names").value = "";
}

function displayStudents() {
    var e = "<hr/> <b>List Of Students</b><div>-----------------------------------<div/>";
    for (var stud = 0; stud < students.length; stud++) {
        e += students[stud] + "<br>";
    }
    document.getElementById("result").innerHTML = e;
}