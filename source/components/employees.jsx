const employees = [
    {name: 'Sergey Safronov', job: 'CEO', location: ' Tashkent', rate: '$200/hr', spec: ' Immigration law', url: '', photo: 'images/ss.png' },
    {name: 'Polina', job: 'Visa Department', location: 'Saint-Petersburg', rate: '$200/hr', spec: 'Australia, Canada ', url: '', photo: 'images/polina.jpg' },      
   {name: 'Anastasia', job: 'Visa Department', location: 'Saint-Petersburg', rate: 'Free', spec: 'Shengen, USA ', url: '', photo: 'images/anastasia.jpg' }
]

export default () => {
  return (
        <div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
            <div className="container">
                <div className="row">

                    <div className="col-xl-12">
                        {/* Section Headline */ }
                        <div className="section-headline margin-top-0 margin-bottom-25">
                            <h3>Employees</h3>
                            {/* <a href="freelancers-grid-layout.html" className="headline-link">Browse All Freelancers</a> */ }
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="default-slick-carousel freelancers-container freelancers-grid-layout">
                            {employees.map((employee, index) => {
                                return (
                                    <div className="freelancer">

                                    {/* Overview */ }
                                    <div className="freelancer-overview">
                                            <div className="freelancer-overview-inner">
                                            {/* Bookmark Icon */ }
                                            <span className="bookmark-icon"></span>
                                            
                                            {/* Avatar */ }
                                            <div className="freelancer-avatar">
                                                <div className="verified-badge"></div>
                                                <a href="#"><img src={employee.photo} alt=""/></a>
                                            </div>

                                            {/* Name */ }
                                            <div className="freelancer-name">
                                                <h4><a href="#">{employee.name} </a></h4>
                                                <span>{employee.job}</span>
                                            </div>

                                            {/* Rating */ }
                                            <div className="freelancer-rating">
                                                <div className="star-rating" data-rating="5.0"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Details */ }
                                    <div className="freelancer-details">
                                        <div className="freelancer-details-list">
                                            <ul>
                                                <li>Location <strong><i className="icon-material-outline-location-on"></i> {employee.location}</strong></li>
                                                <li>Rate <strong>{employee.rate}</strong></li>
                                                <li>Specialization <strong>{employee.spec}</strong></li>
                                            </ul>
                                        </div>
                                        <a href={employee.url} className="button button-sliding-icon ripple-effect">Make an appointment <i className="icon-material-outline-arrow-right-alt"></i></a>
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
