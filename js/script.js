let count =1;
let totalSeat = 39;
let array = [];
const seatCount = document.getElementById("seat-count");
const decreaseTotalSeat = document.getElementById('decrease-total-seat');

let totalPrice= parseInt(document.getElementById("total-price").innerText);
let grandTotalPrice= parseInt(document.getElementById("grand-total-price").innerText);
let couponBtn = document.getElementById("coupon-btn");

// select sit and it's select related function
let seats = document.getElementsByClassName("h5");
for (let seat of seats){
    seat.addEventListener("click", function(e){
            
        e.target.classList.add("bg-[#1DD100]", "text-white");
        seat.setAttribute("disabled", true);
        
        let seatNo = e.target.innerText;
        
        array.push(seatNo);
        let arrayLength = array.length;
        if(arrayLength>=5){
            alert("You can highest buy 4 tickets at a time");
            e.target.classList.remove("bg-[#1DD100]", "text-white")
            return
        }
        console.log(arrayLength)


        const div = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatNo;
        p2.innerText = "Economy";
        p3.innerText = 550;
        
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.classList.add("flex", "justify-between")

        const motherDiv = document.getElementById("seatBook");
        motherDiv.appendChild(div);

        seatCount.innerText = count;
        count++;
        
        
        if(count>4){

            couponBtn.removeAttribute("disabled", true);

        }

       
        decreaseTotalSeat.innerText = totalSeat;
        totalSeat--;

        let price =p3.innerText;
        let ticketPrice =parseInt(price);
        
        totalPrice+= ticketPrice;
        document.getElementById("total-price").innerText = totalPrice;
        document.getElementById("grand-total-price").innerText = totalPrice;
    })
}

// apply coupon button
let coupon = document.getElementById("coupon");
function couponUse(){
    let couponValue = coupon.value;
    
    if (couponValue=="NEW15") {
        let couponDiv = document.getElementById("coupon-div");
        let discountDiv = couponDiv.previousElementSibling;
        couponDiv.classList.add("hidden");
        discountDiv.classList.remove("hidden");

        let dividerDiv = couponDiv.nextElementSibling;
        dividerDiv.classList.remove("hidden");

        discountDiv.childNodes[3].childNodes[1].innerText = totalPrice*.15;

        let grandTotalDiv = dividerDiv.nextElementSibling;
        grandTotalDiv.childNodes[3].childNodes[1].innerText = totalPrice - totalPrice*.15;

    } else if(couponValue == "Couple 20") {
        let couponDiv = document.getElementById("coupon-div");
        let discountDiv = couponDiv.previousElementSibling;
        couponDiv.classList.add("hidden");
        discountDiv.classList.remove("hidden");

        let dividerDiv = couponDiv.nextElementSibling;
        dividerDiv.classList.remove("hidden");

        discountDiv.childNodes[3].childNodes[1].innerText = totalPrice*.2;
        
        let grandTotalDiv = dividerDiv.nextElementSibling;
        grandTotalDiv.childNodes[3].childNodes[1].innerText = totalPrice - totalPrice*.2;

    } else if(couponValue == "") {
        alert("Please using coupon code, Unless could not write code, need to buy four tickets to avail the offer. Thank you.")
    } else {
        alert("Invalid Coupon ! Please give a right coupon code as like code has been shown in offer.")
    }
}


// form input number condition
let phoneNumber = document.getElementById("phone-number");
phoneNumber.addEventListener("keyup", function(){
  if (count>1) {
    if (phoneNumber.value !== "") {
        let nextBtn = document.getElementById("next-btn");
        nextBtn.removeAttribute("disabled", true);
  }
    } else{
        alert("Please First Select a sit")
    }
})


// to close model popup
document.getElementById("continue").addEventListener("click",()=>{
    setTimeout(() => {
    location.reload();
    },1000);
    });


