export default (props) => {
  return (
    <>
    <div id="footer">    
        { /* <!-- Footer Top Section --> */}

        { /* Footer Top Section / End */ }

        { /* Footer Middle Section */ }
        <div className="footer-middle-section">
            <div className="container">
                <div className="row">

                    { /* Links */ }
                    <div className="col-xl-3 col-lg-3 col-md-4">
                        <div className="footer-links">
                            <h3>{props.bottomnav.title}</h3>
                            <ul>
                                {
                                    props.bottomnav.items.map((item, index) => {
                                        return (<li key={index}><a href={item.href}><span>{item.title}</span></a></li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>

            <div className="col-xl-3 col-lg-3 col-md-12">&nbsp;</div>


                    { /* Newsletter */ }
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <h3><i className="icon-feather-mail"></i> {props.newsletter.title}</h3>
                        <p>{props.newsletter.description}</p>
                        <form action="#" method="get" className="newsletter">
                            <input type="text" name="fname" placeholder="Email "/>
                            <button type="submit"><i className="icon-feather-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        { /* Footer Middle Section / End */ }
        
        { /* Footer Copyrights */ }
        <div className="footer-bottom-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        © Copyright 2019 | "SAFRONOV INDUSTRIES" LLC | www.che-ss.com
                    </div>
                </div>
            </div>
        </div>
        { /* Footer Copyrights / End */ }

    </div>
    </>
  );
};
