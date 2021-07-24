function music(language) {
    var message = "" ;

    if (language == 1) {
        message = "DDU-DU DDU-DU";
    } else if (language == 2) {
        message = "BOOMBAYAH";
    } else if (language == 3) {
        message = "Kill This Love";
    } else if (language == 4) {
        message = "Ice Cream";
    } else {
        message = "想定されていない引数です．";
    }

    $('#music-result-p').text("あなたにおすすめの曲は" + message + "です。");

}

