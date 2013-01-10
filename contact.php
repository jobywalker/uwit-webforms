<?php include 'includes/header.php' ?>

<div class="container-fluid">


        <h1></h1>

        <hr/>

        <div class="form-horizontal">

 
          <div class="control-group">
             <label class="control-label" for="subject">Subject</label>
            <div class="controls">
              <input type="text" id="subject" placeholder="">
            </div>
          </div>

          <div class="control-group">
            <label class="control-label" for="message">Content</label>
            <div class="controls">
              <textarea id="message" rows="3"></textarea>
            </div>
          </div>

          <div class="control-group">
            <div class="controls">
              <a class="btn-primary btn" id="submit-email">Submit</a>
              <button class="btn">Cancel</button>
            </div>
          </div>
        </div>

    <hr/>

    <p id="ticket-number"></p>

<?php include 'includes/footer.php' ?>