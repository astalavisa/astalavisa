export default (props) => {
  return (
    <>
        <div className="section margin-top-65 margin-bottom-65">
            <div className="container">
                <div className="row">

                    { /* Section Headline */ }
                    <div className="col-xl-12">
                        <div className="section-headline centered margin-top-0 margin-bottom-45">
                            <h3>{props.countries.title}</h3>
                        </div>
                    </div>

                    {
                        props.countries.items.map((country, index) => {
                            return (
                                <div key={index} className="col-xl-3 col-md-6">
                                    { /* Photo Box */ }
                                    <a className="photo-box popup-with-zoom-anim" href={country.url}  data-background-image={country.img}>
                                        <div className="photo-box-content">
                                            <h3>{country.title}</h3>
                                            { /* <span>376 Jobs</span> */ }
                                        </div>
                                    </a>
                                </div>

                                )
                        })
                    }                    

                </div>
            </div>
        </div>


    </>
  )
}

