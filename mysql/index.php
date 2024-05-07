<!DOCTYPE html>
<html lang="en">
<head>
    <title>index</title>
</head>
<body>
    <table>
    <tr>
        <th>id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Course</th>
        <th>Link</th>
    </tr>
    <?php
    require_once 'connect.php';

    $stat = "select s.studentId as id , s.FName as fn , s.LName as ln , sc.Course_CourseCode as cc  from student s, student_course sc where sc.Student_StudentId = s.studentId";
    $sql = $connectdb -> prepare($stat);
    $sql -> execute();
    $students = $sql -> get_result();

    foreach ($students as $s){
        echo"
        <tr>
        <td>".$s['id']."</td>
        <td>".$s['fn']."</td>
        <td>".$s['ln']."</td>
        <td>".$s['cc']."</td>
        <td><a href=\"grade.php?i=".$s['id']." ".$s['cc']."\">Grading</a></td>
        </tr>";
    }
    ?>
    </table>

    <a href="add_student.php">Register New Student</a>
</body>
</html>