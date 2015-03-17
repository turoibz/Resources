convert = function(id, movie, windowObj){
//where "id" is video ID  //movie is the videPlayer object  //windowObj is the Window object ;
	var movie = movie;
	var win = windowObj;
    var xhr = Ti.Network.createHTTPClient();
    xhr.setRequestHeader("Referer", "http://www.youtube.com/watch?v=" + id);
    xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.14 (KHTML, like Gecko) Version/6.0.1 Safari/536.26.14");
   	xhr.open("GET", "http://m.youtube.com/watch?ajax=1&layout=mobile&tsp=1&utcoffset=330&v=" + id);
    xhr.onload = function () {
    	var json = this.responseText.substring(4, this.responseText.length);
        var response = JSON.parse(json);
        var video = response.content.video;
        if (id == video.encrypted_id) {
			var streamurl = response.content.player_data.fmt_stream_map ? response.content.player_data.fmt_stream_map[0].url : response.content.player_data.stream_url;
        }
        movie.url = y;
        win.add(movie);
    };
    xhr.send();   
};