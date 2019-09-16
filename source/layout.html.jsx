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
        
        <noscript><div><img src="https://mc.yandex.ru/watch/55354984" style={{position:'absolute', left: '-9999px'}} alt="" /></div></noscript>
      </body>
    </html>
  );
}
