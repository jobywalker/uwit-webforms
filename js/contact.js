            $(function() {   
                $("#submit-email").click(function() {     
                    var name = $("#form_name").val();     
                    var text = $("#msg_text").val();     
                    var dataString = 'name='+ name + '&email=' + email + '&text=' + text;      
                    $.ajax({     
                        type: "POST",     
                        url: "php/email-php.php",     
                        data: dataString,     
                        success: function(){       
                            $('.success').fadeIn(1000);     
                        },
                        error: function(){
                          console.log('failed')
                        }
                    });      
                    return false;   
                }); 
            });

