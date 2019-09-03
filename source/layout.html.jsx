// import './css/style.css';
// import './css/colors/blue.css';

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
      <head>
      <title>VISA with professional Registered Migration Agents</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      </head>
      <body>

      <div id="wrapper">
        { children }
      
      </div>
      </body>
      </html>
    </>
  );
}
