document.getElementById("btn").onclick = function() {
    const km = document.getElementById("val1").value;
    console.log(km)
    const mile = km / 1.609;
    console.log(mile)

    document.getElementById('res').innerHTML =  " Conversion Of " + km + " km in miles is: " + mile;
}