var map = function(){
	var MapModule = require('ti.map');
	var leftBtn = Ti.UI.createButton({
		backgroundColor:'transparent',
		backgroundImage:'images/menuButton.png'
	});
	leftBtn.addEventListener("click", function(){
		drawer.toggleLeftWindow();
	});
	
	//App Map Window, open window on menu selection, with most recent reports.
	var self = Ti.UI.createWindow({
		//layout:'absolute',
		backgroundColor:'#ffffff',
		barColor:'#ffffff',
		leftNavButton: leftBtn,
	});
	var logo = Ti.UI.createImageView({
		image:'images/logoWinCitizen.png',
		height:44,
		left:0
	});
	var btnRight = Ti.UI.createButton({ 
		backgroundColor:'transparent',
		backgroundImage:'images/newReport.png',
		height:50
	});
	
	var map = MapModule.createView({
    	userLocation: true,
    	mapType: MapModule.NORMAL_TYPE,
    	animate: true,
    	region: {latitude: 24.02529, longitude: -104.670709, latitudeDelta: .05, longitudeDelta: .05 },
    	//height: Ti.Platform.displayCaps.platformHeight/2.5,
    	//width:300,
    	//top: 5,
	});
	
	self.add(map);
	self.setRightNavButton(btnRight);	
	self.setTitleControl(logo);
	//self.open();
	
	//------------------------------  E V E N T  L I S T E N E R S  ----------------------------------//	
	btnRight.addEventListener("click", function(){
		var citizen = require('ui/ios/citizen');
		var citizenWindow = new citizen();
		citizenWindow.open({modal:true}); 
	});
	//------------------------------  N A V   G R O U P   R E P O R T E   W I N D O W  ----------------------------------//
	var selfController =  Ti.UI.iOS.createNavigationWindow({
		window : self
	});
	return selfController;
};
module.exports = map;