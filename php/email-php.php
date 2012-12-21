<?php 

    if ($_POST) {    

        $name=$_POST['name'];    
        $email=$_POST['email'];    
        $text=$_POST['text'];       

        mail("jtate@uw.edu", "SUBJECT", $text, "From:" . $email); 
    } 

?>