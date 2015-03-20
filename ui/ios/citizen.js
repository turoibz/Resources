var citizen = function(){
	//-------------------------  R E P O R T E    C I U D A D A N O   W I N D O W   B U I L D  ---------------------------------//
	var MapModule = require('ti.map');
	var ImageFactory = require('ti.imagefactory');
	var leftBtn = Ti.UI.createButton({
		//title:"MENU",
		backgroundColor:'transparent',
		backgroundImage:'images/menuButton.png'
	});
	leftBtn.addEventListener("click", function(){
		drawer.toggleLeftWindow();
	});
	var mapWindowScroll = Ti.UI.createScrollView({
		backgroundColor:'transparent',
		layout:'vertical',
		width:'100%',
		horizontalBounce:false
	});
	var mapaLabelWrapper = Ti.UI.createView({
		width:'100%',
		height:30,
		top:10,
		layout:'horizontal',
		backgroundColor:'transparent',
		touchEnabled:false
	});
	var mapaLabelDeco1 = Ti.UI.createView({
		width:10,
		backgroundColor:'#3f3f3f',
		height:30,
		touchEnabled:false
	});
	var mapaLabelDeco2 = Ti.UI.createView({
		backgroundColor:'#3f3f3f',
		height:2,
		left:10,
		touchEnabled:false
	});
	var mapaLabel = Ti.UI.createLabel({
		backgroundColor:'transparent',
		touchEnabled:false,
		font:{
  			fontSize:16,
  			fontFamily: 'KelsonSans-Bold'
  		},
  		text: "Indique ubicación",
		color:'#3f3f3f',
		left:10,
		touchEnabled: false,
	});
	mapaLabelWrapper.add(mapaLabelDeco1);
	mapaLabelWrapper.add(mapaLabel);
	mapaLabelWrapper.add(mapaLabelDeco2);
	
	var map1 = MapModule.createView({
    	userLocation: true,
    	mapType: MapModule.NORMAL_TYPE,
    	animate: true,
    	region: {latitude: 24.02529, longitude: -104.670709, latitudeDelta: .05, longitudeDelta: .05 },
    	height: Ti.Platform.displayCaps.platformHeight/2.5,
    	width:300,
    	top: 5,
	});
	
	var reporteLabeWrapper = Ti.UI.createView({
		width:'100%',
		height:30,
		top:10,
		layout:'horizontal',
		backgroundColor:'transparent',
		touchEnabled:false
	});
	var reporteLabeDeco1 = Ti.UI.createView({
		width:10,
		backgroundColor:'#3f3f3f',
		height:30,
		touchEnabled:false
	});
	var reporteLabeDeco2 = Ti.UI.createView({
		backgroundColor:'#3f3f3f',
		height:2,
		left:10,
		touchEnabled:false
	});
	var reporteLabel = Ti.UI.createLabel({
		backgroundColor:'transparent',
		touchEnabled:false,
		font:{
  			fontSize:16,
  			fontFamily: 'KelsonSans-Bold'
  		},
  		text: "Reporte",
		color:'#3f3f3f',
		left:10,
		touchEnabled:false
	});
	reporteLabeWrapper.add(reporteLabeDeco1);
	reporteLabeWrapper.add(reporteLabel);
	reporteLabeWrapper.add(reporteLabeDeco2);
	
	var textfield = Titanium.UI.createTextArea({
    	borderColor : '#848484',
    	suppressReturn:false,
    	top : 5,
    	width : 300, height : 120,
    	font : {
  			fontSize:15,
  			fontFamily: 'PFDinTextPro-Light'
  		},
  		borderRadius : 3
	});
	
	
	var categoriaLabelWrapper = Ti.UI.createView({
		width:'100%',
		height:30,
		top:10,
		layout:'horizontal',
		backgroundColor:'transparent',
		touchEnabled:false
	});
	var categoriaLabelDeco1 = Ti.UI.createView({
		width:10,
		backgroundColor:'#3f3f3f',
		height:30,
		touchEnabled:false
	});
	var categoriaLabelDeco2 = Ti.UI.createView({
		backgroundColor:'#3f3f3f',
		height:2,
		left:10,
		touchEnabled:false
	});
	var categoriaLabel = Ti.UI.createLabel({
		backgroundColor:'transparent',
		touchEnabled:false,
		font:{
  			fontSize:16,
  			fontFamily: 'KelsonSans-Bold'
  		},
  		text: "Seleccione categoría",
		color:'#3f3f3f',
		left:10,
		touchEnabled: false,
	});
	categoriaLabelWrapper.add(categoriaLabelDeco1);
	categoriaLabelWrapper.add(categoriaLabel);
	categoriaLabelWrapper.add(categoriaLabelDeco2);
	
	var textField = Ti.UI.createTextField({
   		borderColor : '#848484',
    	top : 5,
    	width : 300, height : 40,
    	font : {
  			fontSize:15,
  			fontFamily: 'PFDinTextPro-Light'
  		},
  		borderRadius : 3,
  		editable:false,
  		paddingLeft:4,
	});
	
	
	var imagesLabelWrapper = Ti.UI.createView({
		width:'100%',
		height:30,
		top:10,
		layout:'horizontal',
		backgroundColor:'transparent',
		touchEnabled:false
	});
	var imagesLabelDeco1 = Ti.UI.createView({
		width:10,
		backgroundColor:'#3f3f3f',
		height:30,
		touchEnabled:false
	});
	var imagesLabelDeco2 = Ti.UI.createView({
		backgroundColor:'#3f3f3f',
		height:2,
		left:10,
		touchEnabled:false
	});
	var imagesLabel = Ti.UI.createLabel({
		backgroundColor:'transparent',
		touchEnabled:false,
		font:{
  			fontSize:16,
  			fontFamily: 'KelsonSans-Bold'
  		},
  		text: "Imágenes",
		color:'#3f3f3f',
		left:10,
		touchEnabled: false,
	});
	imagesLabelWrapper.add(imagesLabelDeco1);
	imagesLabelWrapper.add(imagesLabel);
	imagesLabelWrapper.add(imagesLabelDeco2);
	
	var imagesWrapper = Ti.UI.createView({
		backgroundColor:'#eeeeee',
		width:300,
		height:75,
		top:5,
		layout:'horizontal'
	});	
	var imageOneWrapper = Ti.UI.createView({ 
		backgroundColor:'transparent',
  		width:75,
  		height:75
	});
	var imageTwoWrapper = Ti.UI.createView({ 
		backgroundColor:'transparent',
  		width:75,
  		height:75
	});
	var imageThreeWrapper = Ti.UI.createView({ 
		backgroundColor:'transparent',
  		width:75,
  		height:75
	});
	var imageFourWrapper = Ti.UI.createView({ 
		backgroundColor:'transparent',
  		width:75,
  		height:75
	});

	var addImageOne = Ti.UI.createButton({ 
    	title:'f',
    	font:{
  			fontSize:26,
  			fontFamily: 'fontello'
  		},
  		color:'#3f3f3f',
  		width:75,
  		height:75
	});
	imageOneWrapper.add(addImageOne);
	var addImageTwo = Ti.UI.createButton({ 
    	title:'f',
    	font:{
  			fontSize:26,
  			fontFamily: 'fontello'
  		},
  		color:'#3f3f3f',
  		width:75,
  		height:75
	});
	imageTwoWrapper.add(addImageTwo);
	var addImageThree = Ti.UI.createButton({ 
    	title:'f',
    	font:{
  			fontSize:26,
  			fontFamily: 'fontello'
  		},
  		color:'#3f3f3f',
  		width:75,
  		height:75
	});
	imageThreeWrapper.add(addImageThree);
	var addImageFour = Ti.UI.createButton({ 
    	title:'f',
    	font:{
  			fontSize:26,
  			fontFamily: 'fontello'
  		},
  		color:'#3f3f3f',
  		width:75,
  		height:75
	});
	imageFourWrapper.add(addImageFour);
	imagesWrapper.add(imageOneWrapper);
	imagesWrapper.add(imageTwoWrapper);
	imagesWrapper.add(imageThreeWrapper);
	imagesWrapper.add(imageFourWrapper);
	
	var footerSeparator = Ti.UI.createView({
		backgroundColor:'#ffffff',
		height:30,
	});	
	
	var submit = Ti.UI.createButton({
		title:'Enviar',
		color:'#3f3f3f',
		font:{
  			fontSize:20,
  			fontFamily: 'KelsonSans-Bold'
  		},
  		top:20
	});
	var cancel =  Titanium.UI.createButton({
		title:'Cancelar',
		style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
	});
 	var spacer =  Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});	
	var done =  Titanium.UI.createButton({
		title:'Hecho',
		style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	var toolbar = Titanium.UI.iOS.createToolbar({
   		items:[cancel, spacer, done],
    	bottom:0,
    	borderTop:true,
    	borderBottom:false
	});
	var picker_view = Titanium.UI.createView({
		height:251,
		bottom:-251,
		layout:'vertical'
		//zIndex:2,
	});
	var picker = Ti.UI.createPicker({
  		backgroundColor:'#ffffff',
	});
	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'Falta ciudadana'});
	data[1]=Ti.UI.createPickerRow({title:'Seguridad'});
	data[2]=Ti.UI.createPickerRow({title:'Servidores públicos'});
	data[3]=Ti.UI.createPickerRow({title:'Urbanidad'});
	
	picker_view.add(toolbar);
	picker_view.add(picker);
	picker.add(data);
	picker.selectionIndicator = true;
	
	var slide_in =  Titanium.UI.createAnimation({bottom:0});
	var slide_out =  Titanium.UI.createAnimation({bottom:-251});
	
	//App Video Window, open window on menu selection, with most recent videos.
	var self = Ti.UI.createWindow({
		//layout:'absolute',
		backgroundColor:'#ffffff',
		barColor:'#ffffff',
		leftNavButton: leftBtn,
	});
	var logo = Ti.UI.createImageView({
		image:'images/logoWinCitizen.png',
		//width:53,
		height:44,
		left:0
	});

	//self.add(label);
	mapWindowScroll.add(mapaLabelWrapper);
	mapWindowScroll.add(map1);
	mapWindowScroll.add(reporteLabeWrapper);
	mapWindowScroll.add(textfield);
	mapWindowScroll.add(categoriaLabelWrapper);
	mapWindowScroll.add(textField);
	mapWindowScroll.add(imagesLabelWrapper);
	mapWindowScroll.add(imagesWrapper);
	mapWindowScroll.add(submit);
	mapWindowScroll.add(footerSeparator);
	//mapWindowScroll.add(bodyNode);
	self.add(mapWindowScroll);
	self.add(picker_view);
	self.setTitleControl(logo);
	self.open();
	
	//-------------------------------- EVENT LISTENERS --------------------------//
	submit.addEventListener('click', function(){
		Ti.include('lib/reporte.js');
		createReport();
		
	});
	addImageOne.addEventListener('click', function(e) {
		Ti.Media.openPhotoGallery({
			success:function(e){
				imageOneWrapper.removeAllChildren();
				var fileImageOne = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "imageOne.jpg");
				if(fileImageOne.exists()){
					fileImageOne.deleteFile();
				}
				fileImageOne.createFile();
				var fileImageOneSmall = ImageFactory.imageAsResized(e.media, { width:600, height:600, quality:ImageFactory.QUALITY_MEDIUM });
				fileImageOne.write(fileImageOneSmall);
				var fileContent = fileImageOne.read();
				var thumbnailOne = ImageFactory.imageAsResized(fileContent, { width:75, height:75, quality:ImageFactory.QUALITY_MEDIUM });
				var imageOne = Ti.UI.createImageView({
					image:thumbnailOne,
					width:75,
					height:75,
				});
				imageOneWrapper.add(imageOne);
				var imgStr = Ti.Utils.base64encode(fileContent.toString());
				alert(imgStr.toString());
			},
			error:function(e){
				alert('There was a problem');
			},
			cancel:function(e){
				alert('The operation was cancelled');
			},
			allowEditing:true,
			mediaType:[Ti.Media.MEDIA_TYPE_PHOTO]
		});
		//Titanium.API.info ('Available memory:' + Titanium.Platform.availableMemory);
	});
	addImageTwo.addEventListener('click', function(e) {
		Ti.Media.openPhotoGallery({
			success:function(e){
				imageTwoWrapper.removeAllChildren();
				var fileImageTwo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "imageTwo.jpg");
				if(fileImageTwo.exists()){
					fileImageTwo.deleteFile();
				}
				fileImageTwo.createFile();
				var fileImageTwoSmall = ImageFactory.imageAsResized(e.media, { width:600, height:600, quality:ImageFactory.QUALITY_MEDIUM });
				fileImageTwo.write(fileImageTwoSmall);
				var fileContent = fileImageTwo.read();
				var thumbnailTwo = ImageFactory.imageAsResized(fileContent, { width:75, height:75, quality:ImageFactory.QUALITY_MEDIUM });
				var imageTwo = Ti.UI.createImageView({
					image:thumbnailTwo,
					width:75,
					height:75,
				});
				imageTwoWrapper.add(imageTwo);
			},
			error:function(e){
				alert('There was a problem');
			},
			cancel:function(e){
				alert('The operation was cancelled');
			},
			allowEditing:true,
			mediaType:[Ti.Media.MEDIA_TYPE_PHOTO]
		});
		//Titanium.API.info ('Available memory:' + Titanium.Platform.availableMemory);
	});
	addImageThree.addEventListener('click', function(e) {
		Ti.Media.openPhotoGallery({
			success:function(e){
				imageThreeWrapper.removeAllChildren();
				var fileImageThree = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "imageThree.jpg");
				if(fileImageThree.exists()){
					fileImageThree.deleteFile();
				}
				fileImageThree.createFile();
				var fileImageThreeSmall = ImageFactory.imageAsResized(e.media, { width:600, height:600, quality:ImageFactory.QUALITY_MEDIUM });
				fileImageThree.write(fileImageThreeSmall);
				var fileContent = fileImageThree.read();
				var thumbnailThree = ImageFactory.imageAsResized(fileContent, { width:75, height:75, quality:ImageFactory.QUALITY_MEDIUM });
				var imageThree = Ti.UI.createImageView({
					image:thumbnailThree,
					width:75,
					height:75,
				});
				imageThreeWrapper.add(imageThree);
			},
			error:function(e){
				alert('There was a problem');
			},
			cancel:function(e){
				alert('The operation was cancelled');
			},
			allowEditing:true,
			mediaType:[Ti.Media.MEDIA_TYPE_PHOTO]
		});
		//Titanium.API.info ('Available memory:' + Titanium.Platform.availableMemory);
	});
	addImageFour.addEventListener('click', function(e) {
		Ti.Media.openPhotoGallery({
			success:function(e){
				imageFourWrapper.removeAllChildren();
				var fileImageFour = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "imageFour.jpg");
				if(fileImageFour.exists()){
					fileImageFour.deleteFile();
				}
				fileImageFour.createFile();
				var fileImageFourSmall = ImageFactory.imageAsResized(e.media, { width:600, height:600, quality:ImageFactory.QUALITY_MEDIUM });
				fileImageFour.write(fileImageFourSmall);
				var fileContent = fileImageFour.read();
				var thumbnailFour = ImageFactory.imageAsResized(fileContent, { width:75, height:75, quality:ImageFactory.QUALITY_MEDIUM });
				var imageFour = Ti.UI.createImageView({
					image:thumbnailFour,
					width:75,
					height:75,
				});
				imageFourWrapper.add(imageFour);
			},
			error:function(e){
				alert('There was a problem');
			},
			cancel:function(e){
				alert('The operation was cancelled');
			},
			allowEditing:true,
			mediaType:[Ti.Media.MEDIA_TYPE_PHOTO]
		});
		//Titanium.API.info ('Available memory:' + Titanium.Platform.availableMemory);
	});
	cancel.addEventListener('click',function() {
		picker_view.animate(slide_out);
	});
	done.addEventListener('click',function() {
		textField.value =  picker.getSelectedRow(0).title;
		picker_view.animate(slide_out);
	});
	textField.addEventListener('click', function(e){
		picker_view.animate(slide_in);
	});
	map1.addEventListener('longpress', function(e) {
		map1.removeAllAnnotations();
		Ti.API.info('longpress');
		Ti.API.info(e);
		var coordinate = calculateLatLngfromPixels(map1, e.x, e.y);
		var longitude = coordinate.lon;
    	var latitude = coordinate.lat;
    	Ti.API.info(longitude);
    	Ti.API.info(latitude);
    	//alert('You pressed at coordinates ' + latitude + ' / ' + longitude);
    	var appc = MapModule.createAnnotation({
    		latitude: latitude,
    		longitude: longitude,
    		title: 'Nuevo Reporte',
    		animate: true,
    		pincolor: MapModule.ANNOTATION_RED,
		});
		map1.addAnnotation(appc);
		map1.selectAnnotation(appc);
    	//map1.removeEventListener('longpress', arguments.callee);
	});
	self.addEventListener("click", function(e){
        textfield.blur();
    });
	//-------------------------------- FUNCTION --------------------------//
	var calculateLatLngfromPixels = function(mapview, xPixels, yPixels) {
		var region = mapview.actualRegion || mapview.region;
    	var widthInPixels = mapview.rect.width;
    	var heightInPixels = mapview.rect.height;

    	// should invert because of the pixel reference frame
    	heightDegPerPixel = -region.latitudeDelta / heightInPixels; 
    	widthDegPerPixel = region.longitudeDelta / widthInPixels;

    	return {
        	lat : (yPixels - heightInPixels / 2) * heightDegPerPixel + region.latitude,
        	lon : (xPixels - widthInPixels / 2) * widthDegPerPixel + region.longitude
    	};
	};
	//------------------------------  N A V   G R O U P   R E P O R T E   W I N D O W  ----------------------------------//
	var selfController =  Ti.UI.iOS.createNavigationWindow({
		window : self
	});
	return selfController;
};
module.exports = citizen;