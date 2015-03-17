//--------------------------------  D O W N L O A D  P I C T U R E  F U N C T I O N  --------------------------------// 
getImage = function(imageFile, imageURL, imageObject){
	var fileName = imageFile;
	var url = imageURL;
	var xhr = Titanium.Network.createHTTPClient();
	var imageView = imageObject;
	var filePath = "";
	xhr.onload = function(){
		// first, grab a "handle" to the file where you'll store the downloaded data
		var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,fileName);
		f.write(this.responseData); // write to the file
		filePath = f.nativePath;
		imageView.image = filePath;
	};//End function onload
	xhr.open('GET',imageURL);
	xhr.send();
};