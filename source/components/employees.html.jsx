export default (props) => {

  return (
        <div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
            <div className="container">
                <div className="row">

                    <div className="col-xl-12">
                        <div className="section-headline margin-top-0 margin-bottom-25">
                            <h3>{props.employees.title}</h3>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="default-slick-carousel freelancers-container freelancers-grid-layout">
                            
                            {props.employees.items.map((employee, index) => {
                                return (
                                <div className="freelancer" key={index}>

                                    <div className="freelancer-overview">
                                            <div className="freelancer-overview-inner">
                                            <span className="bookmark-icon"></span>
                                            

                                            <div className="freelancer-avatar">
                                                <a href="single-freelancer-profile.html"><img src={employee.photo} alt=""/></a>
                                            </div>

                                            <div className="freelancer-name">
                                                <h4><a href="#">{employee.name} </a></h4>
                                                <span>{employee.job}</span>
                                            </div>

                                            <div className="freelancer-rating">
                                                <div className="star-rating" data-rating="5.0"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="freelancer-details">
                                        <div className="freelancer-details-list">
                                            <ul>
                                                <li>{employee.location[0]} <strong><i className="icon-material-outline-location-on"></i> {employee.location[1]}</strong></li>
                                                <li>{employee.rate[0]} <strong>{employee.rate[1]}</strong></li>
                                                <li>{employee.spec[0]} <strong>{employee.spec[1]}</strong></li>
                                            </ul>
                                        </div>
                                        <a href={employee.url[1]} target="_blank" className="button button-sliding-icon ripple-effect">{employee.url[0]}<i className="icon-material-outline-arrow-right-alt"></i></a>
                                    </div>
                                </div>
                               )
                            })}
                            

                        </div>
                    </div>

                </div>
            </div>
        </div>
  );
};
