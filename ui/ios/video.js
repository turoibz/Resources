var video = function(){
	//---------------------------------------  V I D E O    W I N D O W   B U I L D  -------------------------------------//
	//App Video Window, open window on menu selection, with most recent videos.
	var self = Ti.UI.createWindow({
		layout:'vertical',
		backgroundColor:'#ffffff',
		barColor:'#ffffff'
	});
	var label = Ti.UI.createLabel({
		text : 'Video'
	});
	self.add(label);
	self.open();
	//----------------------------------  N A V   G R O U P   V I D E O   W I N D O W  ----------------------------------//
	var selfController =  Ti.UI.iOS.createNavigationWindow({
		window : self
	});
	return selfController;
};
module.exports = video;