export default (props) => {
  return (
    <>
        <div className="section margin-top-65">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">

                        <div className="section-headline centered margin-bottom-15">
                            <h3>{props.visatype.title}</h3>
                        </div>

                        { /* Category Boxes Container */ }
                        <div className="categories-container">

                            {
                                props.visatype.items.map((visa, index) => {
                                    return (
                                        <a key={index} href="#small-dialog" className="popup-with-zoom-anim category-box">
                                            <div className="category-box-icon">
                                                <i className={visa.icon}></i>
                                            </div>
                                            { /* <div className="category-box-counter">186</div> */ }
                                            <div className="category-box-content">
                                                <h3>{visa.title}</h3>
                                                <p>{visa.desc}</p>
                                            </div>
                                        </a>

                                    )
                                })
                            }



                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

