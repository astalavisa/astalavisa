export default (props) => {
    return (
        <>
            <div className="section padding-top-60 padding-bottom-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            {/* Section Headline */}
                            <div className="section-headline centered margin-top-0 margin-bottom-70">
                                <h3>{props.plans.title}</h3>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            {/* Pricing Plans Container */}
                            <div className="pricing-plans-container">
                                {/* Plan */}
                                <div className="pricing-plan">
                                    <h3>{props.plans.self_application.title}</h3>
                                    {/* <p className="margin-top-10">One time fee for one listing or task highlighted in search results.</p> */}
                                    {/* <div className="pricing-plan-label billed-monthly-label"><strong>$0</strong></div> */}
                                    <div className="pricing-plan-features">
                                        <span>
                                            {props.plans.self_application.desc}
                                        </span>
                                        <ul>
                                            {
                                                props.plans.self_application.list.map((item, index) => {
                                                    return <li key={index}>{item}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    {/* <a href="pages-checkout-page.html" className="button full-width margin-top-20">Buy Now</a> */}
                                </div>

                                {/* Plan */}
                                <div className="pricing-plan recommended">
                                    <div className="recommended-badge">
                                        {props.plans.with_asta.label}
                                    </div>
                                    <h3>{props.plans.with_asta.title}</h3>
                                    {/*<div className="pricing-plan-label billed-monthly-label">
                                        <strong>{props.plans.with_asta.price}</strong>
                                    </div>*/}
                                    <div className="pricing-plan-features">
                                        {/* <strong>Features</strong> */}
                                        <ul>
                                            {
                                                props.plans.with_asta.list.map((item, index) => {
                                                    return <li key={index}>{item}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <a
                                        href="pages-checkout-page.html"
                                        className="button full-width margin-top-20"
                                    >
                                        {props.plans.with_asta.button}
                                    </a>
                                </div>

                                {/* Plan */}
                                <div className="pricing-plan">
                                    <h3>
                                        {props.plans.others.title}
                                    </h3>
                                    <p
                                        className="margin-top-10"
                                        style={{'color':'red'}}
                                    >
                                        {props.plans.others.warning}
                                    </p>
{/*                                    <div className="pricing-plan-label billed-monthly-label">
                                        <strong>{props.plans.others.price}</strong>
                                    </div>
*/}                                    <div className="pricing-plan-features">
                                        {/* <strong>Features </strong> */}
                                        <ul>
                                            {
                                                props.plans.others.list.map((item, index) => {
                                                    return <li key={index}>{item}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};