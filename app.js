//-------------------------------------------  R E Q U I R E  M O D U L E  --------------------------------------------//
var NappDrawerModule = require('dk.napp.drawer');

//--------------------------------------------------- V A R I A B L E S  ----------------------------------------------//
var titularesAPI = "";
var noticiasAPI = "";
var videosAPI = "";
var objectTitulares = [];
var objectNoticias = [];
var objectVideos = [];

//-----------------------------------  M A K E  R E Q U E S T  F U N C T I O N  -------------------------------------//

function loadAPIData(url, type){
	var type = type;
	var url = url;
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function() {
		if (type=='titulares'){
			if(xhr.responseText != titularesAPI){
				titularesAPI = xhr.responseText;
				var data = JSON.parse(titularesAPI);
				for (var i = 0; i < data.length; i++){
					var imageFile = data[i].imagen;
					objectTitulares.push({
						title:data[i].title,
						imageURL:imageFile,
						//imageFileName:imageFile.slice(99,-14),
						imageFileName:imageFile.slice(68),
						date:data[i].date,
						nid:data[i].nid,
						section:data[i].section
					});
				}//end for loop
				Ti.App.fireEvent('buildTitulares', {name:'bar'});
			}//end if xhr.responseText != titularesAPI
		}//end if type == 'titulares'
		else if (type == 'noticias') {
			if(xhr.responseText != noticiasAPI){
				noticiasAPI = xhr.responseText;
				var data = JSON.parse(noticiasAPI);
				for (var i = 0; i < data.length; i++){
					var imageFile = data[i].imagen;
					objectNoticias.push({
						title:data[i].title,
						imageURL:imageFile,
						//imageFileName:imageFile.slice(99,-14),
						imageFileName:imageFile.slice(45),
						date:data[i].date,
						nid:data[i].nid,
						section:data[i].section
					});
				}//end for loop
				Ti.App.fireEvent('buildMasNoticias', {name:'bar'});
			}//end if xhr.responseText != noticiasAPI
		}//end else if type == 'noticias'
		else if (type == 'videos') {
			if(xhr.responseText != videosAPI){
				videosAPI = xhr.responseText;
				var data = JSON.parse(videosAPI);
				for (var i = 0; i < data.length; i++){
					var imageFile = data[i].imagen;
					var vidurl = data[i].url;
					objectVideos.push({
						title:data[i].title,
						imageURL:imageFile,
						//imageFileName:imageFile.slice(99,-14),
						imageFileName:imageFile.slice(106,-14),
						date:data[i].date,
						nid:data[i].nid,
						section:data[i].section,
						video:vidurl.slice(32)
					});
				}//end for loop
				Ti.App.fireEvent('buildVideos', {name:'bar'});
				Ti.App.fireEvent('openVideoWindow', {name:'bar'});
			}//end if xhr.responseText != videosAPI
		}//end else if type == 'videos'
	};//End function onload;
	
	// On Error Titulares
	xhr.onerror = function(e) {
		alert('Error de conexión. Revise la conexion de internet e intente más tarde.');
	};//End On Error
	// Open HTTPClient
	xhr.open('GET',url);
	xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

	//Execute HTTPClient
	xhr.send();
	
};


//---------------------------------------  D R A W E R   W I N D O W   B U I L D  -------------------------------------//
var home = require('ui/ios/home');
var mainWindow = home();
var menu = require('ui/ios/menu');
var menuWindow = menu();

var drawer = NappDrawerModule.createDrawer({
	leftWindow: menuWindow,
	centerWindow: mainWindow,
	closeDrawerGestureMode: NappDrawerModule.CLOSE_MODE_ALL,
	openDrawerGestureMode: NappDrawerModule.OPEN_MODE_ALL,
	//setAnimationMode: NappDrawerModule.ANIMATION_FADE,
	showShadow: false,
	leftDrawerWidth: 240,
	setAnimationVelocity: 1000,
	//rightDrawerWidth: 120,
	statusBarStyle: NappDrawerModule.STATUSBAR_WHITE,  // remember to set UIViewControllerBasedStatusBarAppearance to false in tiapp.xml
	orientationModes: [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
});

drawer.setAnimationMode(NappDrawerModule.ANIMATION_PARALLAX_FACTOR_7);

drawer.addEventListener('windowDidOpen', function(e) {
	Ti.API.info("windowDidOpen");
});

drawer.addEventListener('windowDidClose', function(e) {
	Ti.API.info("windowDidClose");
});


//-------------------------------------------- A P P  F I R S T  C A L L --------------------------------------------//

drawer.open();
loadAPIData('http://api.canal10.com.mx/api/home/titulares','titulares');
loadAPIData('http://app.canal10.com.mx/api/home/noticias','noticias');
loadAPIData('http://app.canal10.com.mx/api/videos','videos');
Ti.API.info(Ti.Platform.displayCaps.platformHeight);

