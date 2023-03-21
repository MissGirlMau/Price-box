var priceCheck = document.getElementById("flexSwitchCheckDefault").indeterminate;
var price1 = document.getElementsByClassName("price")[0];
var price2 = document.getElementsByClassName("price")[1];
var price3 = document.getElementsByClassName("price")[2];
document.getElementById("flexSwitchCheckDefault").addEventListener("click", function () {
    if (priceCheck === false) {
        priceCheck = true;
        document.getElementsByClassName("form-check-label")[0].innerHTML = "In a Year";
        price1.innerHTML = "100$";
        price2.innerHTML = "300$";
        price3.innerHTML = "500$";
    }
    else if (priceCheck === true) {
        priceCheck = false;
        document.getElementsByClassName("form-check-label")[0].innerHTML = "In a Month";
        price1.innerHTML = "10$";
        price2.innerHTML = "35$";
        price3.innerHTML = "50$";
    }
})