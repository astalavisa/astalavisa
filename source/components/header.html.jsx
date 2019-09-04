export default (props) => {
  return (
    <>
        <header id="header-container" className="fullwidth">
            { /* Header */ }
            <div id="header">
                <div className="container">
                    
                    { /* Left Side Content */ }
                    <div className="left-side">
                        
                        { /* Logo */ }
                        <div id="logo">
                            <a href="index.html"><img src="images/astalavisa_logo2square.svg" alt=""/></a>
                        </div>

                        { /* Main Navigation */ }
                        <nav id="navigation">
                            <ul id="responsive">
                                { props.topnav.map((item, index) => {
                                    return <li key={index}><a href={item.href} className="current">{item.title}</a></li>
                                })
                                }
                            </ul>
                        </nav>
                        <div className="clearfix"></div>
                        { /* Main Navigation / End */ }
                        
                    </div>
                    { /* Left Side Content / End */ }


                    { /* Right Side Content / End */ }

                    { /* Right Side Content / End */ }

                </div>
            </div>
            { /* Header / End */ }

        </header>

        <div className="clearfix"></div>

    </>
  )
}
