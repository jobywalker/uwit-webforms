$(function () {

    $('[name=authorizeRadios]').click(function(){ 
        $('#authorizing-supervisor').fadeToggle();
    });

    $('[name=accountActions]').click(function () {
        accountAction = $(this, 'input').val();
        console.log(accountAction);

        var newAccount = $('#budget-fieldset, #change-permissions');
        var changePermissions = $('#change-permissions');

        if (accountAction === 'newAccount') {

            $('#computers-remove').hide();

            changePermissions.hide();
            newAccount.fadeIn();
            $('#change-permissions .remove-column').hide();
        } 

        if (accountAction === 'changePermissions') {
            $('#computers-remove').hide();

            newAccount.hide();
            changePermissions.fadeIn();
            $('#change-permissions .remove-column').show();
        } 
        
        if (accountAction === 'deactivate') {
            newAccount.hide();
            changePermissions.hide();
            $('#computers-remove').fadeIn();
        }


    


    });

});