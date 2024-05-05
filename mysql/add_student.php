<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Add student</title>
</head>
<body>
<form method="post">
        <input type="text" name="FName" required><br>
        <input type="text" name="LName" required><br>
        <input type="Email" name="email" required><br>
        <select name="course">
            <option value="comp-102">comp 102</option>
            <option value="comp-104">comp 104</option>
            <option value="comp-206">comp 206</option>
        </select>
        <input type="submit" value="register">
    </form>
    <?php

    require_once "connect.php";
    $stat = "select max(s.StudentId) as max from student s ; ";
    $sql = $connectdb -> prepare($stat);
    $sql -> execute(); 
    $students = $sql -> get_result();
    $id =0;
    foreach ($students as $st){
        $id = $st['max'] +1;
    }
    
    if(isset($_POST['FName'])){
        $fn = $_POST['FName'];
        $ln = $_POST['LName'];
        $email = $_POST['email'];
        $crs = $_POST['course'];
        
        $stat = "
            insert into student (StudentId , FName , LName , Email) values ( $id , \"$fn\" ,\"$ln\" , \"$email\");
            insert into student_course (Student_StudentId ,Course_CourseCode , Marks) values ($id , \"$crs\" , 0); ";
        $sql = $connectdb -> prepare($stat);
        $sql -> execute(); 
    }
    ?>
</body>
</html>