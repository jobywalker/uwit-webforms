$('#qunit-fixture').load('../form.php?form=demo #container');

test( "a basic test example", function() {
  var value = "hello";
  equal( value, "hello", "We expect value to be hello" );
});