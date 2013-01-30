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
            changePermissions.hide();
            newAccount.fadeIn();
            $('#change-permissions .remove-column').hide();
        } 

        if (accountAction === 'changePermissions') {
            newAccount.hide();
            changePermissions.fadeIn();
            $('#change-permissions .remove-column').show();
        } 
        
        if (accountAction === 'deactivate') {
            newAccount.hide();
            changePermissions.hide();
        }


    });

});