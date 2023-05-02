function random_bg_color() {
    var x = Math.floor(Math.random() * 241);
    var y = Math.floor(Math.random() * 254);
    var z = Math.floor(Math.random() * 248);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();