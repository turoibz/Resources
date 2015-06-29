getNode = function(nid){
	var nodeObject = {};
	var bodyText;
	var videoID;
	var url = "http://app.canal10.com.mx/api/node/"+nid;
	var xhr = Titanium.Network.createHTTPClient();
	var filePath = "";
	xhr.onload = function(){
		var data = JSON.parse(xhr.responseText);
		var splitBody = data.body.und[0].value.split("<a href=");
		if (splitBody.length = 0){
			bodyText = data.body.und[0].value;
			videoID = null;

		}
		else{
			bodyText = splitBody[0];
			var separators = ['"','/'];
			var splitURL = splitBody[1].split(new RegExp(separators.join('|'), 'g'));
			videoID = splitURL[5];
		}
		nodeObject = {
			title:data.title,
			nodeid:data.nid,
			body:bodyText,
			video:getVideoID(videoID),
			image:data.field_imagen.und[0].filename,
			date:data.created,
			author:data.name
		};
		Ti.App.fireEvent('buildNode', {node:nodeObject});
	};//End function onload
	xhr.open('GET',url);
	xhr.send();
	
};

function getVideoID(nid){
	if (nid != null){
		return 'https://www.youtube.com/watch?v=FNuQB523mq0';
	}
	else{
		return null;
	}
	
	
}
