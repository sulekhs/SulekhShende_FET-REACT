function forLoop() {
    for (i = 1; i < 100; i=i+10) {
        for (j = i;  j < i+10; j++) {
            document.write(j)
        }
        document.write("<br>");
    }
}