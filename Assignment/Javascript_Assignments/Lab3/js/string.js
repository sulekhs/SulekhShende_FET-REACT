function last() {
    var companyName = "Cybage Software Pvt Ltd";
    cmp = companyName.toLowerCase();
    var a = prompt("Enter Character to be Searched :");
    b = a.toLowerCase();
    
    if (cmp.includes(b,0)) {
        document.write('Character is Found at Position : <b>' +
                cmp.indexOf(b,0));
    } else {
        document.write("character "+ b+ " not found");
    }
} 

function extract(){
    var companyName = "Cybage Software Pvt Ltd";
    var extractString = companyName.substring(0,14);
    document.write(extractString+ ' Pvt Ltd is popularly known as Cybage Software');
}

function lowerCase(companyName) {
    var companyName = "Cybage Software Pvt Ltd";
    var lowerCase = companyName.toLowerCase();
    document.write(lowerCase);
}

function upperCase(companyName) {
    var companyName = "Cybage Software Pvt Ltd";
    var upperCase = companyName.toUpperCase();
    document.write(upperCase);
}

