<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Add student</title>
</head>
<body>
<form method="post">
        <Label for="FName">First Name: </Label><input type="text" name="FName" required><br>
        <Label for="LName">Last Name: </Label><input type="text" name="LName" required><br>
        <Label for="email">Email: </Label><input type="Email" name="email" required><br>
        <Label for="course">Course: </Label><select name="course">
            <option value="comp-102">comp 102</option>
            <option value="comp-104">comp 104</option>
            <option value="comp-206">comp 206</option>
        </select>
        <input type="submit" value="register">
        <a href="index.php">cancel</a>
    </form>
    <?php

    require_once "connect.php";
    if(isset($_POST['FName'])){
        $fn = $_POST['FName'];
        $ln = $_POST['LName'];
        $email = $_POST['email'];
        $crs = $_POST['course'];
    
        $stat ="select StudentId as id from student where Email = \"$email\"";
        $sql = $connectdb -> prepare($stat);
        $sql -> execute(); 
        $students = $sql -> get_result();
        $id =0;
        foreach ($students as $st){
            $id = $st['id'];
        }
        
        if( $id == 0 ){
            $stat = "select max(s.StudentId) as max from student s ; ";
            $sql = $connectdb -> prepare($stat);
            $sql -> execute(); 
            $students = $sql -> get_result();
            $id =0;
            foreach ($students as $st){
                $id = $st['max'] +1;
            }
            
            $stat = "
            insert into student (StudentId , FName , LName , Email) values ( $id , \"$fn\" ,\"$ln\" , \"$email\"); ";
            $sql = $connectdb -> prepare($stat);
            $sql -> execute();

            $stat = " 
            insert into student_course (Student_StudentId ,Course_CourseCode , Marks) values ($id , \"$crs\" , 0); ";
            $sql = $connectdb -> prepare($stat);
            $sql -> execute(); 
            
        }
        else {
            $stat = "
            insert into student_course (Student_StudentId ,Course_CourseCode , Marks) values ($id , \"$crs\" , 0); ";
            $sql = $connectdb -> prepare($stat);
            $sql -> execute();
        }
    }
    ?>
</body>
</html>