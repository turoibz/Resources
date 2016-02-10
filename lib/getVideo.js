getVideo = function(nid){
	//var nodeId = "10";
	var url = "http://app.canal10.com.mx/api/node/"+nid;
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(){
		var data = JSON.parse(xhr.responseText);
		var ytID = data.field_video.und[0].video_url.slice(32);
		Ti.App.fireEvent('addVideoID', {video:ytID});
	};//End function onload
	xhr.open('GET',url);
	xhr.send();
	
};