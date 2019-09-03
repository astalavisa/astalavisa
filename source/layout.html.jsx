// import './css/style.css';
// import './css/colors/blue.css';

export default function Layout({ children }) {
  return (
    <>
      <head>
        <title>VISA with professional Registered Migration Agents</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link rel="stylesheet" type="text/css" href="css/colors/blue.css"/>
      </head>
      <body>
        <div id="wrapper">
          { children }
        </div>
      </body>
    </>
  );
}
