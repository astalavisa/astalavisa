export default () => {
  return (
    <>

        { /* add class "disable-gradient" to enable consistent background overlay */ }
        <div className="intro-banner" data-background-image="images/migration-enforcement2.jpg">
            <div className="container">
                
                { /* Intro Headline */ }
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-headline">
                            <h3>
                                <strong>Visa with a <span style="font-size: 30pt">90%</span> chance.</strong>
                                <br/>
                                <span>Get a visa with professional agents</span>
                            </h3>
                        </div>
                    </div>
                </div>
                
                { /* Search Bar */ }
                <div>
                { /* Button */ }
            <div className="intro-search-button">
                { /* <button className="button ripple-effect" onclick="window.location.href='jobs-list-layout-full-page-map.html'">START HERE</button> */ }
                <a className="popup-with-zoom-anim button ripple-effect" href="#small-dialog" >Find out the chances of getting a visa</a>
            </div>
            <br/>
            <h3 style="color: green">100% Money Back Guarantee*</h3>.


                </div>

                { /* Stats */ }
                <div className="row">
                    <div className="col-md-12">
                        <ul className="intro-stats margin-top-45 hide-under-992px">
                            <li>
                                <strong className="counter">1,543</strong>
                                <span>Applications</span>
                            </li>
                            <li>
                                <strong className="counter">156</strong>
                                <span>Approvals</span>
                            </li>
                            <li>
                                <strong className="counter">241</strong>
                                <span>In the Process</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}