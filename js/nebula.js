$(function () {

    $('[name=authorizeRadios]').click(function(){ 
        $('#authorizing-supervisor').fadeToggle();
    });

    $('[name=accountActions]').click(function () {
        accountAction = $(this, 'input').val();
        console.log(accountAction)

        if (accountAction === 'changePermissions') {
            $('#change-permissions').fadeIn();
        } else {
            $('#change-permissions').fadeOut();
        }
        if (accountAction === 'changePermissions') {
            $('#change-permissions').fadeIn();
        } else {
            $('#change-permissions').fadeOut();
        }
        

    });

});