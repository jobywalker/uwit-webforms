        <script src="js/vendor/jquery-1.9.0.min.js"></script>
        <script src="js/vendor/jquery-migrate-1.0.0.min.js"></script>
        <!--<script src="js/vendor/jquery.pulse.min.js"></script>-->
        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="js/helpers.js"></script>
        <script src="js/webforms.js"></script>
        
        <?php 
            foreach ($scripts as $value) {
                echo '<script src="' . $value . '.js"></script>';            
            }
        ?>
       <script type="text/javascript">
        
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-7648320-3']);
          _gaq.push(['_trackPageview']);
        
          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        
        </script>
    </body>
</html>