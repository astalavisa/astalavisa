import Form from './form.html.jsx';

export default (props) => {
  return (
    <>

        { /* add class "disable-gradient" to enable consistent background overlay */ }
        <div className="intro-banner" data-background-image="images/migration-enforcement2.jpg">
            <div className="container">
                { /* Intro Headline */ }
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-headline">
                            <h2>
                                <strong>{props.banner.first_title}</strong>
                                <br/>
                                <span>{props.banner.second_title}</span>
                            </h2>
                        </div>
                    </div>
                </div>

                { /* Search Bar */ }
                <div>
                { /* Button */ }
            <div className="intro-search-button">
                <Form lang={props.banner.lang}/>
                { /* <button className="button ripple-effect" onclick="window.location.href='jobs-list-layout-full-page-map.html'">START HERE</button> */ }
                <a className="popup-with-zoom-anim button ripple-effect" href="#small-dialog" >{props.banner.button}</a>
            </div>
            <br/>
            <h3 style={{color: 'green'}}>{props.banner.guarantee}</h3>.


                </div>

                { /* Stats */ }
                <div className="row">
                    <div className="col-md-12">
                        <ul className="intro-stats margin-top-45 hide-under-992px">
                            <li>
                                <strong className="counter">1,543</strong>
                                <span>{props.banner.applications}</span>
                            </li>
                            <li>
                                <strong className="counter">156</strong>
                                <span>{props.banner.approvals}</span>
                            </li>
                            <li>
                                <strong className="counter">241</strong>
                                <span>{props.banner.inprocess}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}
