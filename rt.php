$username = rt_user;
$password = rt_pass;
$url = "http://server.domain.tld/REST/1.0/ticket/new?user=$username&pass=$password";
$request = new HttpRequest($url, HTTP_METH_POST);
// Note : to add data in custom fields you need to add element like below example
// in $post_data array
// Example : \nCF-customfield1:testdata
$post_data=array("content"=>"Queue: General\nRequestor: user@domain\nSubject: REST test 1\nOwner: userX\nAdminCc: userX\nText: This is a REST test\n");
$request->addPostFields($post_data);
try
{
response = $request->send()->getBody();
print_r($response);
}catch (HttpException $ex) {
echo $ex;

}