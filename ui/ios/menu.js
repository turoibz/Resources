var menu = function(){
	//-----------------------------------------  M E N U    W I N D O W   B U I L D  ---------------------------------------//
	var self = Ti.UI.createWindow({
		backgroundColor:'#545454'
	});
	var tableData = [];
	var data = [
		"Inicio",
		"Local",
		"Seguridad",
		"Deportes",
		"En Video",
		"Reporte Ciudadano",
	];
	
	var tableView = Ti.UI.createTableView({
		top:60,
		backgroundColor:'transparent',
		separatorColor: 'transparent',
		//width:220,
	});
	for (var i = 0; i <= 5 ; i++){
  		var row = Ti.UI.createTableViewRow({
    		className: 'row',
    		objName: 'row',
    		touchEnabled: true,
    		height: 50,
    		layout:'absolute',
		});
		var border = Ti.UI.createView({
    		bottom: 0,
    		width: '96%',
    		height: 1,
    		backgroundColor: '#5a5a5a',
		});
		var menuLabel = Ti.UI.createLabel({
			text: data[i],
			font:{
  				fontSize:18,
  				fontFamily: 'KelsonSans-Bold'
  			},
			color:'#ffffff',
			touchEnabled:false,
			left:20	
		});
		row.add(menuLabel);
		row.add(border);
  		tableData.push(row);
	}
	tableView.data = tableData;
	tableView.addEventListener("click", function(e){
		switch(e.index){
			case 0:
				drawer.setCenterWindow(mainWindow);
				drawer.toggleLeftWindow();
				break;
			case 1:
				drawer.toggleLeftWindow();
				break;
			case 2:
				drawer.toggleLeftWindow();
				break;
			case 3:
				drawer.toggleLeftWindow();
				break;
			case 4:
				var video = require('ui/ios/video');
				var videoWindow = video();
				drawer.setCenterWindow(videoWindow);
				drawer.toggleLeftWindow();
				break;
			case 5:
				var map = require('ui/ios/map');
				var mapWindow = map();
				drawer.setCenterWindow(mapWindow);
				drawer.toggleLeftWindow();
				break;
		}
	});
	
	self.add(tableView);
	return self;
};
module.exports = menu;