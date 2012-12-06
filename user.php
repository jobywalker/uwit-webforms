<?php 

    $authUser = $_SERVER[PHP_AUTH_USER];
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $referer = $_SERVER['HTTP_REFERER'];

    $user = array('user' => $authUser, 'userAgent' => $userAgent, 'referer' => $referer);

    header('Content-type: application/json');
    echo json_encode($user);

?>


