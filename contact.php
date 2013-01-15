<?php include 'includes/header.php' ?>

<div class="container">


        <h1>Request a WebForm</h1>

 
             <label class="control-label" for="subject">Subject</label>
                    <input name="form_name" id="form_name" type="text" placeholder="Your Name">

            <label class="control-label" for="message">Content</label>
                <textarea tabindex="-8" rows="10" placeholder="Type your awesome message here." class="placeholder" name="msg_text" id="msg_text"></textarea>
              

              <button type="button" class="btn-primary btn" id="submit-email">Submit</button>
              <button type="button" class="btn">Cancel</button>


        <p class="success" style="display:none">
            Your message has been sent successfully.
        </p>





    <hr/>

    <p id="ticket-number"></p>
</div>

<?php 


  include 'includes/footer.php' 

?>