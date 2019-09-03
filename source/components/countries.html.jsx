export default () => {
  return (
    <>
        <div className="section margin-top-65 margin-bottom-65">
            <div className="container">
                <div className="row">

                    { /* Section Headline */ }
                    <div className="col-xl-12">
                        <div className="section-headline centered margin-top-0 margin-bottom-45">
                            <h3>Choose by country</h3>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        { /* Photo Box */ }
                        <a className="photo-box popup-with-zoom-anim" href="#small-dialog"  data-background-image="images/aus.jpg">
                            <div className="photo-box-content">
                                <h3>Australia</h3>
                                { /* <span>376 Jobs</span> */ }
                            </div>
                        </a>
                    </div>
                    
                    <div className="col-xl-3 col-md-6">
                        { /* Photo Box */ }
                        <a className="photo-box popup-with-zoom-anim" href="#small-dialog" data-background-image="images/ca.jpg">
                            <div className="photo-box-content">
                                <h3>Canada</h3>
                                { /* <span>645 Jobs</span> */ }
                            </div>
                        </a>
                    </div>
                    
                    <div className="col-xl-3 col-md-6">
                        { /* Photo Box */ }
                        <a className="photo-box popup-with-zoom-anim" href="#small-dialog" data-background-image="images/eu.jpg">
                            <div className="photo-box-content">
                                <h3>Europe</h3>
                                { /* <span>832 Jobs</span> */ }
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        { /* Photo Box */ }
                        <a className="photo-box popup-with-zoom-anim" href="#small-dialog" data-background-image="images/usa.png">
                            <div className="photo-box-content">
                                <h3>USA</h3>
                                { /* <span>513 Jobs</span> */ }
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>


    </>
  )
}

