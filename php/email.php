<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <title>
            Mail()
        </title>
    </head>
    <body>
        <p>
            http://www.spruce.it/noise/simple-ajax-contact-form
        </p>
        <form id="contact" method="post">
            <fieldset>
                <div class="left">
                    <input name="form_name" id="form_name" type="text" placeholder="Your Name">
                </div>
                <div>
                    <input name="form_email" id="form_email" type="text" placeholder="Your Email">
                </div>
                <textarea tabindex="-8" rows="10" placeholder="Type your awesome message here." class="placeholder" name="msg_text" id="msg_text">
</textarea>
            </fieldset><input type="submit" value="Send Your Message" name="submit" class="button">
        </form>
        <p class="success" style="display:none">
            Your message has been sent successfully.
        </p>
        <script src="js/vendor/jquery-1.8.3.min.js" type="text/javascript">
        </script><script type="text/javascript">
            $(function() {   
                $("#contact .button").click(function() {     
                    var name = $("#form_name").val();     
                    var email = $("#form_email").val();     
                    var text = $("#msg_text").val();     
                    var dataString = 'name='+ name + '&email=' + email + '&text=' + text;      
                    $.ajax({     
                        type: "POST",     
                        url: "email-php.php",     
                        data: dataString,     
                        success: function(){       
                            $('.success').fadeIn(1000);     
                        }     
                    });      
                    return false;   
                }); 
            });


        </script>
    </body>
</html>