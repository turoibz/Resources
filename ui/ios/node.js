/**
 * @author Arturo Ibañez
 */

node = function(){
var Social = require('dk.napp.social');
var node;
var youTubeID = 0;
var orientation = Ti.Gesture.orientation;

var self = Ti.UI.createWindow({
	layout:'vertical',
	backgroundColor:'#ffffff',
	barColor:'#ffffff',
	backButtonTitle:'',
	navTintColor:'#545454',
	orientation:Ti.UI.PORTRAIT
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
var nodeDate = Ti.UI.createLabel({
	backgroundColor:'transparent',
	touchEnabled:false,
	font:{
  		fontSize:13,
  		fontFamily: 'CentraleSans-Thin'
  	},
	color:'#000000',
	top:5,
	left:0
});
var nodeAuthor = Ti.UI.createLabel({
	backgroundColor:'transparent',
	touchEnabled:false,
	font:{
  		fontSize:13,
  		fontFamily: 'CentraleSans-Thin'
  	},
	color:'#000000',
	top:3,
	left:0
});
var metaData = Ti.UI.createView({
	backgroundColor:'transparent',
	touchEnabled:false,
	layout:'vertical',
	width:'65%',
	height:Ti.UI.SIZE
});
metaData.add(nodeDate);
metaData.add(nodeAuthor);
var smallText = Ti.UI.createButton({
	backgroundColor:'transparent',
	backgroundImage:'images/smallText.png',
	height:45,
	width:45,
});
var bigText = Ti.UI.createButton({
	backgroundColor:'transparent',
	backgroundImage:'images/bigText.png',
	height:45,
	width:45,
});
var tools = Ti.UI.createView({
	backgroundColor:'transparent',
	layout:'horizontal',
	width:'35%',
	height:Ti.UI.SIZE,
	visible:false
});
tools.add(smallText);
tools.add(bigText);
var metaTools = Ti.UI.createView({
	backgroundColor:'transparent',
	layout:'horizontal',
	width:'90%',
	height:Ti.UI.SIZE,
}); 
metaTools.add(metaData);
metaTools.add(tools);
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
var videoLabel = Ti.UI.createLabel({
	width:'90%',
	backgroundColor:'transparent',
	touchEnabled:false,
	font:{
  		fontSize:20,
  		fontFamily: 'PFDinTextPro-Light'
  	},
	color:'#000000',
	top:10
});
var whiteSpace	= Ti.UI.createView({
	backgroundColor:'transparent',
	touchEnabled:false,
	layout:'vertical',
	width:'90%',
	height:40,
}); 
nodeWindowScroll.add(nodeImage);
nodeWindowScroll.add(titleLabel);
nodeWindowScroll.add(metaTools);
nodeWindowScroll.add(bodyNode);
nodeWindowScroll.add(videoLabel);
nodeWindowScroll.add(whiteSpace);
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
	//nodeImage.image = Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, image);//'images/logoWin.png';
	//Ti.API.info(node.image);
	//f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,node.image);
	//if(f.exists()) { Ti.API.info('file exists'); }
	//listFiles();
	if(node.video != 0){
		Ti.include('lib/getVideo.js');
		//getVideo(node.video);
	}
	else{
		videoLabel.text = "youTubeID";
	}
	titleLabel.text = node.title;
	bodyNode.text = node.body;
	//videoLabel.text = youTubeID;
	nodeDate.text = timeConverter(node.date);
	nodeAuthor.text = node.author;
	tools.visible = true;
});
//------------EVENT LISTENER TO ADD VIDEO ID IF NODE HAS IT-------------//
Ti.App.addEventListener('addVideoID', function(data){
	youTubeID = data.video;
	videoLabel.text = youTubeID;
});
//-----------EVENT LISTENER IF CLOSE WINDOW IS CLOSED-------------------//
self.addEventListener('close', function(e) {
    nodeWindowScroll.removeAllChildren();
    tools.visible = false;
    Ti.API.info('Close event fired');
});
//-----------EVENT LISTENER IF BUTTON SHARE IS TAPPED------------------//
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
//---------EVENTS LISTENER FOR INCREASING AND DECREASING FONT SIZE--------//
bigText.addEventListener("click", function(){
	var textSize = bodyNode.font.fontSize;
	if (textSize < 24){
		textSize = textSize + 2;
		bodyNode.font = {fontSize:textSize, fontFamily: 'PFDinTextPro-Light'};
	}
	else {
            //implement fallback sharing..
	}
});
smallText.addEventListener("click", function(){
	var textSize = bodyNode.font.fontSize;
	if (textSize > 18){
		textSize = textSize - 2;
		bodyNode.font = {fontSize:textSize, fontFamily: 'PFDinTextPro-Light'};
	}
	else {
            //implement fallback sharing..
	}
});
//-------------EVENT LISTENER FOR ORIENTATION MODE-------------------------//
Ti.App.addEventListener('openModalVideo', function(){
    var videoArticle = require('ui/ios/videoOnArticle');
	var videoArticleWindow = new videoArticle(youTubeID);
	videoArticleWindow.open({modal:true});
});
 
Ti.Gesture.addEventListener('orientationchange', function(e) {
	orientation = Ti.Gesture.orientation;
	if(orientation === 3 || orientation === 4 ){
		Ti.App.fireEvent('openModalVideo');
	}
});

//
videoLabel.addEventListener('click', function(){
	alert(":)");
});
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp*1000);
  var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var h = hour;
  var dd = " am";
  if (h >= 12) {
	h = hour-12;
    dd = " pm";
  }
  if (h == 0) {
  	h = 12;
  }
  var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
  var time = date + ' ' + month + ' ' + year + ' - ' + h + ':' + min + dd;
  return time;
}


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
