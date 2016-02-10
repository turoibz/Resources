var video = function(ytID){
	//---------------------------------------  V I D E O  O N  A R T I C L E   W I N D O W   B U I L D  -------------------------------------//
	//App Video Window, open window on menu selection, with most recent videos.
	var self = Ti.UI.createWindow({
		layout:'vertical',
		backgroundColor:'#ffffff',
		barColor:'#ffffff'
	});
	var label = Ti.UI.createLabel({
		text : ytID
	});
	self.add(label);
	
	Ti.App.removeEventListener('openModalVideo');

	return self;
	
};
module.exports = video;