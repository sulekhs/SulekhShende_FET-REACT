function display(val)
{
    document.getElementById("calculate").value+=val
 }
//function for evaluation
function solve()
{
    let first = document.getElementById("calculate").value
    let second = eval(first)
    document.getElementById("calculate").value = second;
}
//function for clearing the display
function clr()
{
    document.getElementById("calculate").value = ""
}

function square(val) {
    let num = document.getElementById("calculate").value;
    num = num * num;
    document.getElementById("calculate").value = num;
}  

function cuberoot(val) {
    let num = document.getElementById("calculate").value;
    num = Math.cbrt(num);
    document.getElementById("calculate").value = num;
}  

function squareRoot(val) {
    let num = document.getElementById("calculate").value;
    num = Math.sqrt(num);
    document.getElementById("calculate").value = num;
}  

function scientific() {
    document.getElementById('science').innerHTML = `
        <center>
            <table>
                <tr>
                    <td><input type="button" value="3√" onclick="cuberoot('3√')"/> </td>
                    <td><input type="button" value="√" onclick="squareRoot('√')"/> </td>
                    <td><input type="button" value="x^2" onclick="square('x^2')"/> </td>
                </tr>
            </table>
        </center>
    `
}