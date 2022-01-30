function timeGreet() {
    var today = new Date();
    var strMonth = today.toLocaleString('default', { month: 'short' });
    var strDay = today.toLocaleDateString('default', { weekday: 'short' });
    var month = new Date().getMonth();
    var date = new Date().getDate();
    var year = new Date().getFullYear();
    var hrs = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    var ampm = hrs >= 12 ? 'PM' : 'AM';
    
    var dateTime =strDay+ ' '+ strMonth + ' '+ date + ' '+ year+ ' '+hrs + ':' + min + ':' + sec + ' ' + ampm;   
    document.writeln(dateTime);
}

function greeting(){
    var currentTime = new Date().getHours();
    if (currentTime < 12) {
            document.writeln('Good Morning!!!')
    } else if (currentTime < 18) {
            document.writeln('Good Afternoon!!!')
    } else {
            document.writeln('Good Evening!!!')
    };
}

