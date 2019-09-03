export default () => {
  return (
    <>
        <div className="section margin-top-65">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">

                        <div className="section-headline centered margin-bottom-15">
                            <h3>Choose by visa type</h3>
                        </div>

                        { /* Category Boxes Container */ }
                        <div className="categories-container">

                            { /* Category Box */ }
                            <a href="#small-dialog" className="popup-with-zoom-anim category-box">
                                <div className="category-box-icon">
                                    <i className="icon-line-awesome-suitcase"></i>
                                </div>
                                { /* <div className="category-box-counter">186</div> */ }
                                <div className="category-box-content">
                                    <h3>Work</h3>
                                    <p>1-3 years renewable</p>
                                </div>
                            </a>

                            { /* Category Box */ }
                            <a href="#small-dialog" className="category-box">
                                <div className="popup-with-zoom-anim category-box-icon">
                                    <i className="icon-line-awesome-pie-chart"></i>
                                </div>
                                { /* <div className="category-box-counter">549</div>						 */ }
                                <div className="category-box-content">
                                    <h3>Business</h3>
                                    <p>For travel to negotiations/exhibition</p>
                                </div>
                            </a>

                            { /* Category Box */ }
                            <a href="#small-dialog" className="popup-with-zoom-anim category-box">
                                <div className="category-box-icon">
                                    <i className="icon-line-awesome-image"></i>
                                </div>
                                { /* <div className="category-box-counter">873</div> */ }
                                <div className="category-box-content">
                                    <h3>Tourist</h3>
                                    <p>For up to 6 months</p>
                                </div>
                            </a>


                            { /* Category Box */ }
                            <a href="#small-dialog" className="popup-with-zoom-anim category-box">
                                <div className="category-box-icon">
                                    <i className="icon-line-awesome-graduation-cap"></i>
                                </div>
                                { /* <div className="category-box-counter">445</div> */ }
                                <div className="category-box-content">
                                    <h3>Study</h3>
                                    <p>From 6 to 48 months with the possibility of part-time work</p>
                                </div>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

