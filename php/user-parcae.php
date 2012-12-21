<?php
    require_once("SimpleRestClient.php");
    require_once("xml2json.php");

    $user = $_SERVER[PHP_AUTH_USER];
    $xml=null;
    $restclient=null;
    $result=null;
    $cert_file='/data/ssl/parcae.cert' ;//Path to cert file 
    $key_file='/data/ssl/parcae.key';//Path to private key
    $key_password=null;//Private key passphrase
    $curl_opts=null;//Array to set additional CURL options or override the default options of the SimpleRestClient
    $post_data=null;//Array or string to set POST data 
    $user_agent = "PHP Sample Rest Client";
    $url = "https://shades.cac.washington.edu/parcae/api/user/director/app/RT/uwnetid/" . user . "/";


    $restclient = new SimpleRestClient($cert_file, $key_file, $key_password, $user_agent, $curl_opts);
    
    if (!is_null($post_data))
    {
      $restclient->postWebRequest($url, $post_data); 
    }
    else
    {
      $restclient->getWebRequest($url); 
    }

        
    if (!is_null($restclient))
        {
          // echo $restclient->getWebResponse();
            $theData = $restclient->getWebResponse();
            $theData = simplexml_load_string($theData);
            echo json_encode($theData);

        }

    if (!is_null($xml) && $restclient->getStatusCode() == 200 && is_null($post_data))
    {
        echo $result;
    }
?>