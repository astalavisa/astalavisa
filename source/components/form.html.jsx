export default (props) => {

  if (props.lang === 'en') {
    return (
      <>
          <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
              <iframe id="register-form" src="https://my.functorforms.com/1C_MtIZRGH8fTSQVrG6_WiMiSkCEXDMz0PWPWSOaDIgU" style={{position:'relative', minWidth: '100%', width: '100%'}} frameBorder="0" scrolling="yes" seamless="seamless" height="2500" width="100%"></iframe>
          </div>

      </>
    )
  } else {
    return (
      <>
          <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
              <iframe id="register-form" src="https://services.cognitoforms.com/f/_R0W9uYCakaJ6ZBwQ4ORxQ?id=1" style={{position:'relative', minWidth: '100%', width: '100%'}} frameBorder="0" scrolling="yes" seamless="seamless" height="840" width="100%"></iframe>
          </div>

      </>
    )
  }


}
