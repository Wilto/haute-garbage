(function() {
	if('serviceWorker' in navigator ) {
		navigator.serviceWorker.register('/service-worker.js?{{ metadata.build }}');
	}
}());