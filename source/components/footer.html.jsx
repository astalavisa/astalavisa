export default () => {
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
                    <div className="col-xl-2 col-lg-2 col-md-3">
                        <div className="footer-links">
                            <h3>Helpful Links</h3>
                            <ul>
                                <li><a href="#"><span>Contact</span></a></li>
                                <li><a href="#"><span>Privacy Policy</span></a></li>
                                <li><a href="#"><span>Terms of Use</span></a></li>
                            </ul>
                        </div>
                    </div>

            <div className="col-xl-4 col-lg-4 col-md-12">&nbsp;</div>


                    { /* Newsletter */ }
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <h3><i className="icon-feather-mail"></i> Sign Up For a Newsletter</h3>
                        <p>Monthly newsletter on changes in the immigration law of different countries. Be the first to know about new programs.</p>
                        <form action="#" method="get" className="newsletter">
                            <input type="text" name="fname" placeholder="Enter your email address"/>
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
