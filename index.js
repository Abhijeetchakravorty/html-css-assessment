var makeRequest = function(method, url, done) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.onload = function() {
		done(null, xhr.response);
	};
	xhr.onerror = function() {
		done(xhr.response);
	};
	xhr.send();
}
// And we'd call it as such:
makeRequest('GET', 'http://localhost:5000/api/popularDeals', function(err, datums) {
	console.log();
	if (err) {
		throw err;
	}

	if (datums) {
		datums = JSON.parse(datums);
		let str = '';
		for (let i=0;i<datums.response.length;i++) {
			str += `
				<li>
					<div class="card" style="width: 18rem;">
						<img src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg" class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">
								`+datums.vehicle_name+` `+datums.brand+`
							</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Book Now</a>
						</div>
					</div>
				</li>
			`;
		}

		document.getElementById('deals').innerHTML = str;
	}
	console.log(datums);
});