getNode = function(nid){
	var nodeObject = {};
	
	var url = "http://app.canal10.com.mx/api/node/"+nid;
	var xhr = Titanium.Network.createHTTPClient();
	var filePath = "";
	xhr.onload = function(){
		var data = JSON.parse(xhr.responseText);
		nodeObject = {
			title:data.title,
			nodeid:data.nid,
			body:data.body.und[0].value,
			image:data.field_imagen.und[0].filename,
			date:data.created
		};
		Ti.App.fireEvent('buildNode', {node:nodeObject});
	};//End function onload
	xhr.open('GET',url);
	xhr.send();
	
};
