export default () => {
  return (
    <>
    <div className="section padding-top-60 padding-bottom-75">
        <div className="container">
            <div className="row">

                <div className="col-xl-12">
                    { /* Section Headline */ }
                    <div className="section-headline centered margin-top-0 margin-bottom-70">
                        <h3>What is the difference?</h3>
                    </div>
                </div>


                <div className="col-xl-12">

                    { /* Pricing Plans Container */ }
                    <div className="pricing-plans-container">

                        { /* Plan */ }
                        <div className="pricing-plan">
                            <h3>Self Applications</h3>
                            { /* <p className="margin-top-10">One time fee for one listing or task highlighted in search results.</p> */ }
                            { /* <div className="pricing-plan-label billed-monthly-label"><strong>$0</strong></div> */ }
                            <div className="pricing-plan-features">
                                <strong>You can prepare a visa application yourself, but:</strong>
                                <ul>
                                    <li>🚫 English knowledge is required</li>
                                    <li>🚫 Knowledge of immigration law is required</li>
                                    <li>🚫 Preparation for oral interview is required</li>
                                    <li>🚫 Certified translation of all information in English is required</li>
                                    <li>🚫 No guarantee for a success</li>
                                </ul>
                            </div>
                            { /* <a href="pages-checkout-page.html" className="button full-width margin-top-20">Buy Now</a> */ }
                        </div>

                        { /* Plan */ }
                        <div className="pricing-plan recommended">
                            <div className="recommended-badge">Recommended</div>
                            <h3>With ASTA LA VISA</h3>
                            <p className="margin-top-10">*The price does not include: Consular fee, visa fees, insurance. The amounts of consular and visa fees depend on the type of visa and its validity.</p>
                            <div className="pricing-plan-label billed-monthly-label"><strong>$100</strong></div>
                            <div className="pricing-plan-features">
                                { /* <strong>Features</strong> */ }
                                <ul>
                                    <li>✅ No English required</li>
                                    <li>✅ No knowledge of immigration law required</li>
                                    <li>✅ Free preparation for the oral interview</li>
                                    <li>✅ Free certified translation of all information in English</li>
                                    <li>✅ Guarantee for a success</li>
                                    <li>✅ Free consultation with professionals</li>
                                    <li>✅ We work with you under a contract</li>
                                    <li>✅ You pay through the bank</li>
                                </ul>
                            </div>
                            <a href="pages-checkout-page.html" className="button full-width margin-top-20">Free Consultation Now</a>
                        </div>

                        { /* Plan */ }
                        <div className="pricing-plan">
                            <h3>Other companies and suspicious agents</h3>
                            <p className="margin-top-10" style="color:red">Attention, beware of fraudsters.</p>
                            <div className="pricing-plan-label billed-monthly-label"><strong>$300+</strong></div>
                            <div className="pricing-plan-features">
                                { /* <strong>Features </strong> */ }
                                <ul>
                                    <li>🚫 English level unknown</li>
                                    <li>🚫 Knowledge of immigration law unknown</li>
                                    <li>🚫 Level of preparation for oral interview unknown</li>
                                    <li>🚫 The quality of document translations is unknown.</li>
                                    <li>🚫 No guarantee for a success</li>
                                    <li>🚫 No free consultation</li>
                                    <li>🚫 Work without a contract</li>
                                    <li>🚫 Payment is taken in cash or "on a personal card"</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    </>
  )
}