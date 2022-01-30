function whileLoop(paams) {
    var i = 0;
    while ( i < 100) {
        var j = i;
        while (j < i+10) {
            j++;
            document.write(j);
        }
        document.write("<br>");
        i=i+10;
    }
}