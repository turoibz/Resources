createReport = function(){
	var csrfToken;
	var url = "http://app.canal10.com.mx/services/session/token";
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(){
		if(this.status == '200'){
			var csrfToken = xhr.responseText;
			var serverURL = "http://app.canal10.com.mx/api/node.json";
			var xhr2 = Titanium.Network.createHTTPClient();
			xhr2.open("POST", serverURL);
			xhr2.setRequestHeader("X-CSRF-Token", csrfToken);
    		xhr2.setRequestHeader("Content-Type","application/json");
    		var node = {
				type:"reporte",
				title:"title.value",
				language:"und",
				body:{"und":{"0":{"value":"body.value"}}}
			};
			var obj = JSON.stringify(node);
			xhr2.send(obj);
			xhr2.onload = function(){
     			if(this.status == '200'){
        			alert('Node Creation successful!');        
     			}
    			else{
        			alert('Node creation failed');
     			}            
   			};
   			xhr2.onerror = function(e){
        		alert('Node creationerror: ' + e.error + ' ' + xhr2.responseText);
    		};  
     	}
    	else{
        	alert('Something went wrong');
     	}   
	};//End function onload
	xhr.open('GET', url);
	xhr.send();
};
 