var webForms = {};

webForms.testPut = function () {
    $('button').click(function() {
        console.log('button clicked');
        var subject = $('#subject').val(),
            content = $('#content').val();

        $.ajax({
            type: 'POST',
            url: 'http://rt.cac.washington.edu/REST/1.0/ticket/new',
            data: { 
                'id': 'new',
                'Subject' : subject,
                'Queue' : 'SSG::Test',
                'Text' : content
            },
            success: function(data, textStatus, jqXHR){
                 console.log('data = ' + data + ', textStatus = ' + textStatus);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                 console.log('textStatus = ' + textStatus + ', errorThrown = ' + errorThrown);
            }
        });
    });
}


$(function(){
    webForms.testPut();
});