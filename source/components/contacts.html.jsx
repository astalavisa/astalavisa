export default (props) => {
  return (
    <>
    	<div className="container ">
    		<div className="row margin-bottom-50">
				<div id="address-1" className="col-xl-6">
					<div className="contact-location-info ">
						<div className="contact-address">
							<ul>
								<li className="contact-address-headline">{props.contacts.title}</li>
								<li>{props.contacts.items[0].address}</li>
								<li>{props.contacts.items[0].tel}</li>
								<li>
									<a href="#">{props.contacts.items[0].email}</a>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d499.6691581559133!2d30.3169625!3d59.9375078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963110075fe7e1%3A0x1860b922cf58bca7!2sBol&#39;shaya%20Morskaya%20Ulitsa%2C%203%2C%20Sankt-Peterburg%2C%20Russia%2C%20191186!5e0!3m2!1sen!2s!4v1567602938517!5m2!1sen!2s" width="100%" height="300" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
					</div>
				</div>
				
				<div id="address-2" className="col-xl-6">
					<div className="contact-location-info ">
						<div className="contact-address">
							<ul>
								<li className="contact-address-headline">{props.contacts.title}</li>
								<li>{props.contacts.items[1].address}</li>
								<li>{props.contacts.items[1].tel}</li>
								<li>
									<a href="#">{props.contacts.items[1].email}</a>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.1803262794076!2d69.2884764!3d41.3149261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4d33f0fe6cd%3A0x73e4705debbf4d69!2sKitob%20Olami!5e0!3m2!1sen!2s!4v1567604008691!5m2!1sen!2s" width="100%" height="300" frameBorder="0" style={{border: 0}} allowFullScreen=""></iframe>
					</div>
				</div>


			</div>
		</div>

    </>
)
}

