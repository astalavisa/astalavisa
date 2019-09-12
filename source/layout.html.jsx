export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>ASTALAVISA :: VISA with professional Migration Agents</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link rel="stylesheet" type="text/css" href="css/colors/blue.css"/>
        


      </head>
      <body>
        <div id="wrapper">
          { children }
        </div>
        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/jquery-migrate-3.1.0.min.js"></script>
        <script src="js/mmenu.min.js"></script>
        <script src="js/tippy.all.min.js"></script>
        <script src="js/simplebar.min.js"></script>
        <script src="js/bootstrap-slider.min.js"></script>
        <script src="js/bootstrap-select.min.js"></script>
        <script src="js/snackbar.js"></script>
        <script src="js/clipboard.min.js"></script>
        <script src="js/counterup.min.js"></script>
        <script src="js/magnific-popup.min.js"></script>
        <script src="js/slick.min.js"></script>
        <script src="js/custom.js"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136068921-1"></script>
        <script>
          
          gtag('js', new Date())

          gtag('config', 'UA-136068921-1')
        
        </script>

      </body>
    </html>
  );
}
