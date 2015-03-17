/**
 * @author Arturo Ibañez
 */

node = function(){
var Social = require('dk.napp.social');
var node;

var self = Ti.UI.createWindow({
	layout:'vertical',
	backgroundColor:'#ffffff',
	barColor:'#ffffff',
	backButtonTitle:'',
	navTintColor:'#545454'
});
var logo = Ti.UI.createImageView({
	image:'images/logoWin.png',
	width:53,
	height:44,
	left:0
});
var btnRight = Ti.UI.createButton({ 
	backgroundColor:'transparent',
	backgroundImage:'images/shareButton.png',
	height:50
});
var nodeWindowScroll = Ti.UI.createScrollView({
	backgroundColor:'transparent',
	layout:'vertical',
	width:'100%',
	horizontalBounce:false
});
var nodeWindowWrapper = Ti.UI.createView({
	backgroundColor:'transparent',
	layout:'vertical',
	width:'100%',
});
var actInd = Titanium.UI.createActivityIndicator({
	top:10,
	height:50,
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,
	font: {fontSize:15,fontWeight:'bold'},
	color: '#555555',
	message: 'Cargando...',
	width: 210
});
var titleLabel = Ti.UI.createLabel({
	width:'90%',
	backgroundColor:'transparent',
	touchEnabled:false,
	font:{
  		fontSize:23,
  		fontFamily: 'KelsonSans-Bold'
  	},
	color:'#000000',
	top:10
});
var nodeImage = Ti.UI.createImageView({
	backgroundColor:'transparent',
	touchEnabled:false,
	width:'100%'
});
var bodyNode = Ti.UI.createLabel({
	width:'90%',
	backgroundColor:'transparent',
	touchEnabled:false,
	font:{
  		fontSize:18,
  		fontFamily: 'PFDinTextPro-Light'
  	},
  	top:15,
});	
nodeWindowScroll.add(nodeImage);
nodeWindowScroll.add(titleLabel);
nodeWindowScroll.add(bodyNode);
//nodeWindowScroll.add(nodeWindowWrapper);
actInd.show();
self.add(actInd);	
self.setTitleControl(logo);
self.add(nodeWindowScroll);
self.setRightNavButton(btnRight);	

Ti.App.addEventListener('openNode', function(data){
	//self.remove(nodeWindowScroll);
	//nodeWindowScroll.removeAllChildren();
	//nodeWindowWrapper.removeAllChildren();
	var nid = data.id;
	Ti.include('lib/getNode.js');
	getNode(nid);
});

Ti.App.addEventListener('buildNode', function(data){
	self.remove(actInd);
	node = data.node;
	var image = encodeURI(node.image);
	nodeImage.image = Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, image);//'images/logoWin.png';
	//Ti.API.info(node.image);
	//f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,node.image);
	//if(f.exists()) { Ti.API.info('file exists'); }
	//listFiles();
	titleLabel.text = node.title;
	bodyNode.text = node.body;	
});
self.addEventListener('close', function(e) {
    nodeWindowScroll.removeAllChildren();
    Ti.API.info('Close event fired');
});
btnRight.addEventListener("click", function(){
	if(Social.isActivityViewSupported()){ //min iOS6 required
		Social.activityView({
			text:node.title,
			url:'http://app.canal10.com.mx/node/'+node.nodeid,
		});
	}
	else {
            //implement fallback sharing..
	}
});

function listFiles(){
	var resourcesDir = Titanium.Filesystem.getApplicationDataDirectory();
    var dir = Titanium.Filesystem.getFile(resourcesDir);
    var dir_files = dir.getDirectoryListing();
    for (var i=1;i<dir_files.length;i++){ 
    	Ti.API.info(dir_files[i].toString());
    }
}
return self;
};
