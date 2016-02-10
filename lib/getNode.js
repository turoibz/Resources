getNode = function(nid){
	
	var urlOpener = "http://api.canal10.com.mx/api/node/100";
	var xhrOpener = Ti.Network.createHTTPClient({
    	onload: function(e) {
        	// this function is called when data is returned from the server and available for use
        	// this.responseText holds the raw text return of the message (used for text/JSON)
        	// this.responseXML holds any returned XML (including SOAP)
        	// this.responseData holds any returned binary data
        	Ti.API.info('Yo');
    	},
    	timeout:1000  /* in milliseconds */
	});
	xhrOpener.open("GET", urlOpener);
	xhrOpener.send();  // request is actually sent with this statement
	
	
	var nodeObject = {};
	var bodyText;
	var videoID = "0";
	var url = "http://api.canal10.com.mx/app/node/"+nid;
	var xhr = Titanium.Network.createHTTPClient({
		timeout : 3000  // in milliseconds
	});
	var filePath = "";
	xhr.onload = function(){
		var data = JSON.parse(xhr.responseText);
		//var splitBody = data.body.und[0].value.split("<a href=");
		//if (splitBody.length <= 1){
		//	bodyText = data.body.und[0].value;
		//}
		//else if (splitBody.length > 1){
		//	bodyText = splitBody[0];
		//	var separators = ['"','/'];
		//	var splitURL = splitBody[1].split(new RegExp(separators.join('|'), 'g'));
			//videoID = splitURL[5];
		//}
		nodeObject = {
			title:data[0].title,
			nodeid:data[0].nid,
			body:data[0].body,
			video:data[0].video,
			image:data[0].image,
			date:data[0].date,
			author:"data.name"
		};
		Ti.App.fireEvent('buildNode', {node:nodeObject});
	};//End function onload
	xhr.onerror = function(e){
		Ti.API.debug(e.error);
		alert('Error');
	};
	xhr.open('GET',url);
	xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	xhr.send();
	
};
