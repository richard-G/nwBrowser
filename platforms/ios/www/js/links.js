var openWeb = () => {
	cordova.InAppBrowser.open('https://www.networkingwater.com', '_system', 'location=no');
}
	
const openQ = () => {
	cordova.InAppBrowser.open('https://imperial.eu.qualtrics.com/jfe/form/SV_0NUlFWS9PTRowxT', '_system', 'location=no');
}

const openFacebook = () => {
	cordova.InAppBrowser.open('https://www.facebook.com/NetworkingWater/', '_system', 'location=no');
}