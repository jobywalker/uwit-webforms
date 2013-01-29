$('#qunit-fixture').load('../form.php?form=demo #container');


test('webForms.getUser test', function() {
    var user = webForms.getUser();
    equal(user.UWNetID, 'fozzie', 'Should be Fozzie the Bear\'s UW NetID');
});

test('webForms.buildForm test', function () {
    var h1 = $('#qunit-fixture h1').text();
    equal(h1, 'Demonstration Form', 'Checking if h1 is populated');
});