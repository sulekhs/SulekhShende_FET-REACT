function interestCalculator() {
    var principal = parseInt(document.getElementById("amount").value);
    var rate = parseInt(document.getElementById("interest").value);
    var n = parseInt(document.getElementById("years").value);
    var t = parseInt(document.getElementById("cnd").value);

    var r = rate/100;
    var nt = n * t;
    var totalAmount = (principal * Math.pow((1+(r/n)),nt));
    var compoundInterest = (totalAmount - principal);
    document.write("Total Amount : " +totalAmount+ " and Compound Interest : "+ compoundInterest);
}

