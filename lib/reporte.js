var imageCount;
var pictures = [];
var bodyText;
var coordLat;
var coordLong;
var postWin = Ti.UI.getCurrentWindow;
postReporte = function(images, body, lon, lat){
	bodyText = body;
	coordLat = lat;
	coordLong = lon;
	imageCount = images.length;
	var csrfToken = "";
	var url = "http://app.canal10.com.mx/services/session/token";
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(){
		if(this.status == '200'){
			var csrfToken = xhr.responseText;
			if (images.length > 0){
				for (var i = 0; i < images.length; i++) {
    				postPicture(csrfToken, images[i]);
				}
			}
			else{
				postNode(csrfToken, bodyText);
			}
		}
		else{
			alert("Hubo un error de conexión. Por favor intente de nuevo.");
		}
	};
	xhr.onerror = function(e){
        alert('Error de conexion, intente de nuevo');
    };
    xhr.open('GET', url);
	xhr.send(); 
};

postPicture = function(token, img){
	var csrf = token;
	var serverURL = "http://app.canal10.com.mx/api/file.json";
	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("POST", serverURL);
	xhr.setRequestHeader("X-CSRF-Token", csrf);
    xhr.setRequestHeader("Content-Type","application/json");
    var fileImage = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, img+".jpg").read();
    var imgStr = Ti.Utils.base64encode(fileImage).toString();
    var randomnumber=Math.floor(Math.random()*101);
    var timeStamp = new Date().getTime();
    var imageName = timeStamp+"_"+randomnumber;
    var file = {
    	filename: imageName+".jpg",
    	target_uri: "public://"+imageName+".jpg",
   		filemime: "image/jpeg",
    	file: imgStr,
    	filesize: fileImage.size
    };
	var obj = JSON.stringify(file);
	xhr.send(obj);
	xhr.onload = function(){
     	if(this.status == '200'){
     		var r = JSON.parse(this.responseText);
     		var fID = r.fid;     
     		pictures.push(fID);
     		if (pictures.length == imageCount){
     			 Ti.API.info('Done');
     			 postNode(csrf, bodyText);
     		}
     	}
    	else{
        	alert('Hubo un error de conexión. Por favor intente de nuevo.');
     	}            
   	};
   	xhr.onerror = function(e){
        alert('File creation error: ' + e.error + ' ' + xhr.responseText);
    };
};

postNode = function(token, body){
	var timeStamp = new Date().getTime();
	var title = new Date (timeStamp);
	var serverURL = "http://app.canal10.com.mx/api/node.json";
	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("POST", serverURL);
	xhr.setRequestHeader("X-CSRF-Token", token);
    xhr.setRequestHeader("Content-Type","application/json");

    var node = {
		type:"reporte",
		title:"Reporte enviado el "+title,
		language:"und",
		body:{"und":{"0":{"value":body}}},
		field_latitude:{"und":{"0":{"value":coordLat}}},
		field_longitude:{"und":{"0":{"value":coordLong}}},
	};
	if (pictures[0] !== undefined){
		node.field_reporte_imagen1 = {"und":[{"fid":pictures[0]}]};
	}
	if (pictures[1] !== undefined){
		node.field_reporte_imagen2 = {"und":[{"fid":pictures[1]}]};
	}
	if (pictures[2] !== undefined){
		node.field_reporte_imagen3 = {"und":[{"fid":pictures[2]}]};
	}
	if (pictures[3] !== undefined){
		node.field_reporte_imagen4 = {"und":[{"fid":pictures[3]}]};
	}
	var obj = JSON.stringify(node);
	xhr.send(obj);
	xhr.onload = function(){
     	if(this.status == '200'){
			alert('Su reporte ha sido enviado satisfactoriamente. Será publicado previa revision.');
			Ti.App.fireEvent('closeCitizenWindow');
     	}
    	else{
        	alert('Hubo un error de conexión. Por favor intente de nuevo.');
     	}            
   	};
   	xhr.onerror = function(e){
        alert('Hubo un error de conexión. Por favor intente de nuevo.');
    };
};