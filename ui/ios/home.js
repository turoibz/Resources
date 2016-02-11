var home = function(){
	//---------------------------------------  H O M E    W I N D O W   B U I L D  -------------------------------------//
	//App Home Window, first open window on app launch, with most recent news.
	var leftBtn = Ti.UI.createButton({
		//title:"MENU",
		backgroundColor:'transparent',
		backgroundImage:'images/menuButton.png'
	});
	leftBtn.addEventListener("click", function(){
		drawer.toggleLeftWindow();
	});
	var self = Ti.UI.createWindow({
		layout:'vertical',
		backgroundColor:'#ffffff',
		barColor:'#ffffff',
		leftNavButton: leftBtn,
	});
	var logo = Ti.UI.createImageView({
		image:'images/logoWin.png',
		width:53,
		height:44,
		left:0
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
	var homeWindowScroll = Ti.UI.createScrollView({
		backgroundColor:'transparent',
		layout:'vertical',
		width:'100%',
	});
	var imagesScroll = Ti.UI.createScrollableView({
		width:'100%',
		top:0,
		backgroundColor:'transparent',
		disableBounce:true,
		showPagingControl:false,
	});
	if (Ti.Platform.displayCaps.platformHeight <= 480){
		imagesScroll.height = 280;
	}
	else if (Ti.Platform.displayCaps.platformHeight == 568){
		imagesScroll.height = 280;
	}
	else if (Ti.Platform.displayCaps.platformHeight == 580){
		imagesScroll.height = 280;
	}
	else if (Ti.Platform.displayCaps.platformHeight == 667){
		imagesScroll.height = 300;
	}
	else if (Ti.Platform.displayCaps.platformHeight == 736){
		imagesScroll.height = 320;
	}
	var separatorNoticias = Ti.UI.createView({
		width:'100%',
		height:40,
		layout:'horizontal',
		backgroundColor:'transparent',
		visible:false
	});
	var separatorVideos = Ti.UI.createView({
		width:'100%',
		height:40,
		layout:'horizontal',
		top:10,
		backgroundColor:'transparent',
		visible:false
	});
	var redLeftDeco = Ti.UI.createView({
		width:10,
		backgroundColor:'#c52746',
		height:40,
	});
	var redRightDeco = Ti.UI.createView({
		backgroundColor:'#c52746',
		height:2,
		left:10
	});
	var redLeftDeco2 = Ti.UI.createView({
		width:10,
		backgroundColor:'#c52746',
		height:40,
	});
	var redRightDeco2 = Ti.UI.createView({
		backgroundColor:'#c52746',
		height:2,
		left:10
	});
	var separatorNoticiasLabel = Ti.UI.createLabel({
		text: 'MÁS NOTICIAS',
		font:{
  			fontSize:18,
  			fontFamily: 'ProximaNovaS-Extrabld'
  		},
		color:'#2168ce',
		left:10,
		height:40,
	});
	var separatorVideosLabel = Ti.UI.createLabel({
		text: 'EN VIDEO',
		font:{
  			fontSize:18,
  			fontFamily: 'ProximaNovaS-Extrabld'
  		},
		color:'#2168ce',
		left:10,
		height:40,
	});
	var masNoticiasWrapper = Ti.UI.createView({
		width:'100%',
		layout:'vertical',
		top:10,
		backgroundColor:'#f1f2f2',
		height:Ti.UI.SIZE
	});
	var enVideoWrapper = Ti.UI.createView({
		width:'100%',
		layout:'vertical',
		top:10,
		backgroundColor:'#f1f2f2',
		height:Ti.UI.SIZE
	});
	actInd.show();
	separatorNoticias.add(redLeftDeco);
	separatorNoticias.add(separatorNoticiasLabel);
	separatorNoticias.add(redRightDeco);
	separatorVideos.add(redLeftDeco2);
	separatorVideos.add(separatorVideosLabel);
	separatorVideos.add(redRightDeco2);
	homeWindowScroll.add(imagesScroll);
	homeWindowScroll.add(separatorNoticias);
	homeWindowScroll.add(masNoticiasWrapper);
	homeWindowScroll.add(separatorVideos);
	homeWindowScroll.add(enVideoWrapper);
	self.setTitleControl(logo);
	self.add(actInd);
	self.add(homeWindowScroll);
	//self.open();
	//----------------------------------  N A V   G R O U P   H O M E   W I N D O W  ----------------------------------//
	var selfController =  Ti.UI.iOS.createNavigationWindow({
		window : self
	});
	
	//--------------------------------  E V E N T  L I S T E N E R  T I T U L A R E S  ---------------------------------//
	Ti.App.addEventListener('buildTitulares', function(data){
		self.remove(actInd); 
    	var name = data.name;
		Ti.include('lib/getImage.js');
		var imageWrapper = [];
		var imageView = [];
		var articleTitle = [];
		var articleDate = [];
		for (var i = 0; i < objectTitulares.length; i++){
			var imageFile = objectTitulares[i].imageFileName;
			var imageURL = objectTitulares[i].imageURL;
			imageView[i] = Ti.UI.createImageView({
				backgroundColor:'transparent',
				touchEnabled:false,
				height: Ti.UI.SIZE
			});
			getImage(imageFile, imageURL, imageView[i]);
			imageWrapper[i] = Ti.UI.createView({
				backgroundColor:'transparent',
				touchEnabled: true,
				layout:'vertical',
				nodeID:objectTitulares[i].nid
			});
			var title = objectTitulares[i].title;
			articleTitle[i] = Ti.UI.createLabel({
				text: title,//.toUpperCase(),
				font:{
  					fontSize:18,
  					fontFamily: 'KelsonSans-Bold'
  				},
				color:'#000000',
				//bottom:5,
				top:10,
				width:'95%',
				touchEnabled:false
			});
			articleDate[i] = Ti.UI.createLabel({
				text: objectTitulares[i].date,//.toUpperCase(),
				font:{
  					fontSize:11,
  					fontFamily: 'CentraleSans-Thin'
  				},
				color:'#000000',
				//bottom:5,
				top:5,
				width:'95%',
				touchEnabled:false
			});
			imageWrapper[i].add(imageView[i]);
			imageWrapper[i].add(articleTitle[i]);
			imageWrapper[i].add(articleDate[i]);
			imagesScroll.addView(imageWrapper[i]);
			imageWrapper[i].addEventListener('click' , function(e){
				var row = e.source;
				alert(row.nodeID);
				//Ti.App.fireEvent('openNode', {id:row.nodeID});
			});
		}//end for loop
	});//End EventListener buildTitulares
	
	//--------------------------------  E V E N T  L I S T E N E R  N O T I C I A S  ---------------------------------//
	Ti.App.addEventListener('buildMasNoticias', function(data){ 
    	var name = data.name;
		Ti.include('lib/getImage.js');
		var row = [];
		var imageView = [];
		var detailWrapper = [];
		var articleTitle = [];
		var articleDate = [];
		var articleSectionWrapper = [];
		var articleSectionLabel = [];
		for (var i = 0; i < objectNoticias.length; i++){
			var imageFile = objectNoticias[i].imageFileName;
			var imageURL = objectNoticias[i].imageURL;
			row[i] = Ti.UI.createView({
				backgroundColor:'#FFFFFF',
				touchEnabled: true,
				layout:'horizontal',
				height:80,
				top:1,
				nodeID:objectNoticias[i].nid
			});
			imageView[i] = Ti.UI.createImageView({
				backgroundColor:'transparent',
				touchEnabled:false,
				left:0,
				width:145
			});
			getImage(imageFile, imageURL, imageView[i]);
			detailWrapper[i] = Ti.UI.createView({
				backgroundColor:'transparent',
				touchEnabled: false,
				layout:'vertical',
				height:80,
			});
			var title = objectNoticias[i].title;
			var fontSize = 12;
			if (Ti.Platform.displayCaps.platformHeight >= 667){
				fontSize = 13;
			}			
			articleTitle[i] = Ti.UI.createLabel({
				text: title,//.toUpperCase(),
				font:{
  					fontSize:fontSize,
  					fontFamily: 'KelsonSans-Bold'
  				},
				color:'#333333',
				//bottom:5,
				top:3,
				left:5,
				width:'95%',
				touchEnabled:false
			});
			articleDate[i] = Ti.UI.createLabel({
				text: objectNoticias[i].date,//.toUpperCase(),
				font:{
  					fontSize:9,
  					fontFamily: 'CentraleSans-Thin'
  				},
				color:'#000000',
				//bottom:5,
				top:5,
				left:5,
				width:'95%',
				touchEnabled:false
			});
			articleSectionWrapper[i] = Ti.UI.createView({
				backgroundColor:'#2168ce',
				width:65,
				height:14,
				right:0,
				top:0,
				layout:'vertical'
			});
			var section = objectNoticias[i].section.toUpperCase();
			articleSectionLabel[i] = Ti.UI.createLabel({
				text : section,
				color:'#FFFFFF',
				font:{
  					fontSize:9,
  					fontFamily: 'CentraleSans-Thin'
  				},
  				top:3
			});
			articleSectionWrapper[i].add(articleSectionLabel[i]);
			row[i].add(imageView[i]);
			detailWrapper[i].add(articleSectionWrapper[i]);
			detailWrapper[i].add(articleTitle[i]);
			detailWrapper[i].add(articleDate[i]);
			row[i].add(detailWrapper[i]);
			masNoticiasWrapper.add(row[i]);
			row[i].addEventListener('click' , function(e){
				var row = e.source;
				//Ti.App.fireEvent('openNode', {id:row.nodeID});
			});
			separatorNoticias.visible = true;
		}//end for loop
		
	});//End EventListener buildMasNoticias
	
	//--------------------------------  E V E N T  L I S T E N E R  V I D E O S  ---------------------------------//
	Ti.App.addEventListener('buildVideos', function(data){ 
    	var name = data.name;
		Ti.include('lib/getImage.js');
		var row = [];
		var imageView = [];
		var detailWrapper = [];
		var videoTitle = [];
		var videoDate = [];
		var videoSectionWrapper = [];
		var videoSectionLabel = [];
		for (var i = 0; i < objectVideos.length; i++){
			var imageFile = objectVideos[i].imageFileName;
			var imageURL = objectVideos[i].imageURL;
			row[i] = Ti.UI.createView({
				backgroundColor:'#FFFFFF',
				touchEnabled: true,
				layout:'horizontal',
				height:80,
				top:1,
				nodeID:objectVideos[i].nid,
				video:objectVideos[i].video
			});
			imageView[i] = Ti.UI.createImageView({
				backgroundColor:'transparent',
				touchEnabled:false,
				left:0,
				width:145
			});
			getImage(imageFile, imageURL, imageView[i]);
			detailWrapper[i] = Ti.UI.createView({
				backgroundColor:'transparent',
				touchEnabled: false,
				layout:'vertical',
				height:80,
			});
			var title = objectVideos[i].title;
			var fontSize = 12;
			if (Ti.Platform.displayCaps.platformHeight >= 667){
				fontSize = 13;
			}			
			videoTitle[i] = Ti.UI.createLabel({
				text: title,//.toUpperCase(),
				font:{
  					fontSize:fontSize,
  					fontFamily: 'KelsonSans-Bold'
  				},
				color:'#333333',
				//bottom:5,
				top:3,
				left:5,
				width:'95%',
				touchEnabled:false
			});
			videoDate[i] = Ti.UI.createLabel({
				text: objectVideos[i].date,//.toUpperCase(),
				font:{
  					fontSize:9,
  					fontFamily: 'CentraleSans-Thin'
  				},
				color:'#000000',
				//bottom:5,
				top:5,
				left:5,
				width:'95%',
				touchEnabled:false
			});
			row[i].add(imageView[i]);
			detailWrapper[i].add(videoTitle[i]);
			detailWrapper[i].add(videoDate[i]);
			row[i].add(detailWrapper[i]);
			enVideoWrapper.add(row[i]);
			row[i].addEventListener('click' , function(e){
				var row = e.source;
				Ti.App.fireEvent('openVideo', {id:row.video});
			});
			separatorVideos.visible = true;
		}//end for loop
	});//End EventListener buildVideos
	Ti.App.addEventListener('openVideo', function(data){
			var id = data.id;
			var logo = Ti.UI.createImageView({
				image:'images/logoWin.png',
				width:53,
				height:44,
				left:0
			});
			var winVideo = Titanium.UI.createWindow({
    			backgroundColor:'white',
    			barColor:'#ffffff',
    			orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT],
				title: "Video",
				zIndex: 222222,
				backButtonTitle:'',
				navTintColor:'#545454'
			});
			var movie = Ti.UI.createWebView({
    			fullscreen: true,
    			width:'auto',height:'auto',top:0,left:0,
    			url:"http://www.youtube.com/embed/" + id + "?autoplay=1"
			});
			winVideo.setTitleControl(logo);
			winVideo.add(movie);
			selfController.openWindow(winVideo);
	});
	Ti.App.addEventListener('openNode', function(data){
			var nid = data.id;
			Ti.include('ui/ios/node.js');
			var winNode = node();
			selfController.openWindow(winNode);
			Ti.App.fireEvent('loadNode', {id:nid});
			
	});
	return selfController;
};
module.exports = home;
