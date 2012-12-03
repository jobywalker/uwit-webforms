var webForms = {};

webForms.testFunction = function (arg) {
    console.log('NOTICE ME : testFunction is being called : ' + arg)

}

webForms.ajax = function(callback) {
    $.ajax({
            //type: 'POST',
            url: 'humans.txt',
            //data: { 
            //    'id': 'new',
            //    'Subject' : 'subject',
            //    'Queue' : 'SSG::Test',
            //    'Text' : 'content'
            //},
            success: function(data, textStatus, jqXHR){
                console.log('SUCCESS data = ' + data + ', textStatus = ' + textStatus);
                callback;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('ERROR textStatus = ' + textStatus + ', errorThrown = ' + errorThrown);
                callback;
                //alert(callback)
            }
        });
}


webForms.test = function () {
    $('button').click(function() {
        console.log('button clicked');
        var subject = $('#subject').val(),
            content = $('#content').val();
        webForms.ajax(webForms.testFunction('arg'));
    });
}


$(function(){
    console.log('dom ready')
    //webForms.ajax(callback)
    webForms.test();
});