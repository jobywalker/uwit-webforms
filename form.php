<?php include('includes/header.php') ?>
        
    <div class="container">

    <header>
        <h1></h1>
        <p class="lead" id="form-description"> <a class="help-text-toggle"><i class="icon-info-sign"></i></a></p>
    </header>


    <div class="row">
        
        <div class="span8">
        
        <!--<div class="well">
            <p id="form-description">Or more of a description here.</p>
        </div> -->

        <div class="alert alert-error" id="ticket-creation-error">
            <strong>Ticket Creation Problem</strong> Descriptive error message.
        </div>

        <div class="alert alert-info demo">
            <strong>Note</strong> This is a tenative list of fields. The order and grouping may be changed as well.
        </div>

        <div class="alert alert-error" id="who-are-you-error">
            <h4>There's a Problem</h4>
            <p>We can't determine your UW NetID. You'll need one before completing this form.</p> 
        </div>

        <div class="alert alert-success" id="ticket-creation-success">
            <h4>Thanks!</h4>
            <p>We're processing your request.</p>
        </div>


        <form>

<!--            <div class="controls controls-row">
                <label>Name</label>
                <input class="span2" id="user-name" type="text" placeholder="">
                <div class="span1"></div>
                                <label>UW NetID</label>

                <input class="span1" id="user-uwnetid" type="text" placeholder="">
            </div> -->


<fieldset>

    <legend>Your Information</legend>
            <div class="row">

                <div class="span3">                
                    <label>Name</label>
                <input class="span3"  id="user-name" type="text" placeholder="">
            </div>


                <div class="span2"> 
                    <label>UW NetID</label>
                    <input class="span2" id="user-uwnetid" type="text" placeholder="">
                </div>

                <div class="span2"> 
                    <label>Phone</label>
                    <input class="span2" id="user-phone" type="text" placeholder="">
                </div>

            </div>

        <div class="alert alert-info demo">
            <strong>Note</strong><br/> We can also retrieve:
            <ul>
             <li>Title </li>
        <li>Mailstop</li>
        <li>Email</li>
        <li>More Phone Numbers</li>

            </ul>
        </div>
            <br/>
        </fieldset>


  <fieldset>

    <legend>Server Request</legend>
            <div id="form-fields">



            </div>
        </fieldset>

            <div class="form-actions">


                <button type="button" class="btn-primary btn">Submit</button>
                <button type="button" class="btn">Cancel</button>
                
                <hr/>
            
            <div id="whoami">

            <div class="alert alert-info demo">
                <strong>Note</strong> This area may or may not be used.
            </div>
            <!-- <address>
                <strong><span class="name"></span></strong><br/>
                <span class="title"></span><br/>
                <span class="mailstop"></span><br/>
                <span class="phone"></span><br/>
                <span class="email"></span>
            </address> -->
            
            </div>
            <!-- end #whoami -->

            </div>
        </form>


        <p id="ticket-number"></p>
  
        <!--<p>Run <a href="http://pivotal.github.com/jasmine/">Jasmine</a> suite of <a href="js/tests/">tests</a></p> -->
  
    </div>
    <!-- end .span8 -->

    <div class="span4">
  
        <div class="well" id="help-text">

                    <div class="alert alert-info demo">
            <strong>Note</strong> This help text isn't required.
        </div>
            <h3>Optional Help Text</h3>

                <ul>
                    <li> Top-aligned labels tend to reduce form completion time the most. (57) </li>
                    <li> Help text isn't the holy grail of Web form completion. (104) </li>
                </ul>
        </div>

    </div>
    <!-- end .span4 -->
    
    </div>
    <!-- end .row-fluid -->

    </div>
    <!-- end .container-fluid -->

<?php include('includes/footer.php') ?>
