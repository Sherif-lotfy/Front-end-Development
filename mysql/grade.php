<!DOCTYPE html>
<html lang="en">
<head>
    <title>Grade</title>
</head>
<body>
    <h1>Wilkommen</h1>
    
<?php
if(isset($_GET['i'])){
    $id = explode(" ",$_GET['i'])[0];
    $course = explode(" ",$_GET['i'])[1];
    echo "
    Grading a student with ID = $id in the course $course
    <br><br>
    <form method=\"post\">
    <label for=\"grade\">Marks: </label>
    <input type=\"number\" name=\"grade\">
    <br><br>
    <input type=\"submit\" value=\"Grade\">
    <a href=\"index.php\">Cancel</a>
    </form>
    ";
    if(isset($_POST['grade'])){
        require_once "connect.php";
        $grade = $_POST['grade'];
        $stat = "update student_course set Marks = \"$grade\" where Student_StudentId = $id and Course_CourseCode = \"$course\" ";
        $sql = $connectdb -> prepare($stat);
        $sql -> execute(); 
    }
}else {
    echo "There is no any student to update his/her marks"
}