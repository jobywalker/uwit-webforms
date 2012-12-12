<?php 


// Set the URL to visit
$url = "https://shades.cac.washington.edu/parcae/api/user/director/app/RT/uwnetid/" . user . "/";

// Initialize session and set URL.
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);

// Set so curl_exec returns the result instead of outputting it.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
curl_setopt($ch, CURLOPT_CAINFO, getcwd() . "/data/ssl/rt.ssg");

// Get the response and close the channel.
$response = curl_exec($ch);
curl_close($ch);

?>