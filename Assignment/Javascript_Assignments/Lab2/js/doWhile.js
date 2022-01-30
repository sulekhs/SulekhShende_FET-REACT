function whileLoop() {
    var i = 0;
    do {
       var j = i;
       do {
            j++;
            document.write(j);
       }while (j < i+10)
            document.write("<br>");
            i=i+10;        
    }while ( i < 100)                                                                                            
}