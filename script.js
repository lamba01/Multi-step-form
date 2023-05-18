
var input = document.querySelector('.selector')
var yearly = document.querySelectorAll('.yearly-info')
var monthly = document.querySelectorAll('.amt')
var card = document.querySelectorAll('.card')
var step1 = document.querySelector('.step-1')
var step2 = document.querySelector('.step-2')
var step3 = document.querySelector('.step-3')
var step4 = document.querySelector('.step-4')
var step5 = document.querySelector('.step-5')
var backbtn = document.querySelector('.go-back')
let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3")
let mail = document.getElementById("mail")
let btn = document.querySelector('.confirm-btn') 
let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let num3 = document.getElementById("number3")
let num4 = document.getElementById("number4")

// toggle between yearly and monthly
function toggledisplay() {
    let year = document.querySelector('.yearly')
    let month = document.querySelector('.monthly')
    if(input.checked) {
        for (let index = 0; index < yearly.length; index++) {
            yearly[index].style.display = 'block'
        }   
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = 'none'           
        }   
        year.style.color = 'hsl(213, 96%, 18%)'
        month.style.color = 'hsl(231, 11%, 63%)'
    }else {
        for (let index = 0; index < yearly.length; index++) {
            yearly[index].style.display = 'none'
        }
        for (let i = 0; i < monthly.length; i++) {
            monthly[i].style.display = 'block'            
        }   
        year.style.color = 'hsl(231, 11%, 63%)'
        month.style.color = 'hsl(213, 96%, 18%)'   
    }
}

// adding active cass to 'select your plan' cards in step2 
for (var i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active2");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active2", "");
      }
      // Add the active class to the current/clicked card
      this.className += " active2";
    });
  }



// step3 functions 
var box1 = document.getElementById("step3div1")
var firstinput = document.getElementById("checkbox1")
box1.addEventListener("click", function() {
    if(!firstinput.checked){
        firstinput.checked = true;
        box1.classList.add("selected")
    }else {
        firstinput.checked = false
        box1.classList.remove("selected")
    }
})


var box2 = document.getElementById("step3div2")
var secondinput = document.getElementById("checkbox2")
box2.addEventListener("click", function() {
    if(!secondinput.checked){
        secondinput.checked = true;
        box2.classList.add("selected")
    }else {
        secondinput.checked = false
        box2.classList.remove("selected")
    }

})

var box3 = document.getElementById("step3div3")
var thirdinput = document.getElementById("checkbox3")
box3.addEventListener("click", function() {
    if(!thirdinput.checked){
        thirdinput.checked = true;
        box3.classList.add("selected")
    }else {
        thirdinput.checked = false
        box3.classList.remove("selected")
    }

})

// set step 1 as default active step
function active() {
        num1.classList.add("active")
        step1.classList.add("activestep")
        step2.classList.add("step")
        step3.classList.add("step")
        step4.classList.add("step")
}

// step 1 formvalidation

// Error messages
function errormsg1() { 
    error1.style.display = 'none'
}
function errormsg2() { 
    error2.style.display = 'none'
    mail.style.display = 'none'
}
function errormsg3() { 
    error3.style.display = 'none'
    phone.style.display = 'none'
}


function formvalidate() {
    // display error msg
        let form = document.querySelectorAll('.userdata')
        for (let i = 0; i < form.length; i++) {
            if(form[0].value == ""){
                error1.style.display = 'block'
            }else {
                error1.style.display = 'none'
            }      
            if(form[1].value == ""){
                error2.style.display = 'block'
            }else {
                error2.style.display = 'none'
            }
            if(form[2].value == ""){
                error3.style.display = 'block'
            }else {
                error3.style.display = 'none'
            }
        }
        // email verification
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form[1].value) && form[2].value !== "") {
            mail.style.display = 'block'
          }else{
            mail.style.display = 'none'
          }
        //   phone number verification
          const alphabetRegex = /^[a-zA-Z]+$/;
        if (alphabetRegex.test(form[2].value)) {
           let phone = document.getElementById("phone")
           phone.style.display = 'block'
        } else {
            phone.style.display = 'none'
        }

        if(!alphabetRegex.test(form[2].value) && emailRegex.test(form[1].value) 
        && !form[0].value == "" && !form[2].value == ""){
            step1.classList.remove("activestep")
            step2.classList.replace("step", "activestep")
            num1.classList.remove("active")
            num2.classList.add("active")
        }
}
function nextpage() {

    // step2 verification
        for (let index = 0; index < card.length; index++) {
            if (card[index].classList.contains("active2")){
                step2.classList.replace("activestep", "step")
                step3.classList.replace("step", "activestep")
                num2.classList.remove("active")
                num3.classList.add("active")
            }
        }
    let addonsyearly = document.querySelectorAll('.yearr')
    let addonsmonthly = document.querySelectorAll('.monthh')
    if(input.checked){
        for (let i = 0; i < addonsyearly.length; i++) {
            addonsyearly[i].style.display = 'block'   
        }
        for (let i = 0; i < addonsmonthly.length; i++) {
            addonsmonthly[i].style.display = 'none'   
        }
    } else {
        for (let i = 0; i < addonsyearly.length; i++) {
            addonsyearly[i].style.display = 'none'   
        }
        for (let i = 0; i < addonsmonthly.length; i++) {
            addonsmonthly[i].style.display = 'block'   
        }
    }
    }

  
    function step3verification() {
         // step3 verification
    let step3check = document.querySelectorAll('.step3-divs')
    for (let i = 0; i < step3check.length; i++) {
        if(step3check[i].classList.contains("selected")){
            step3.classList.replace("activestep", "step")
            step4.classList.replace("step", "activestep")
            num3.classList.remove("active")
            num4.classList.add("active")
        }
    }
        // To display Add-ons selected
        let check1 = document.getElementById("add-ons") 
        let check2 = document.getElementById("add-ons2") 
        let check3 = document.getElementById("add-ons3")     
        let addons1 = document.getElementById("value1")  
        let addons2 = document.getElementById("value2") 
        let addons3 = document.getElementById("value3") 
        var totalyear1;
        var totalyear2;
        var totalyear3;
        var totalmonth1;
        var totalmonth2;
        var totalmonth3;
        if(box1.classList.contains("selected")) {                    
            check1.style.display = 'flex'
            totalmonth1 = "1"  
            if(input.checked){
                addons1.value = "+$10/yr"
                totalyear1 = "10"         
            }else {
                addons1.value = "$1/mo"
            }
        }else {
            check1.style.display = 'none'
            totalyear1 = "0"
            totalmonth1 = "0"
        }
        if(box2.classList.contains("selected")){               
            check2.style.display = 'flex'
            totalmonth2 = "2"
            if(input.checked){
                addons2.value = '+$20/yr'
                totalyear2 = "20"              
            }else {
                addons2.value = "+$2/mo"
            }
        }else {
            check2.style.display = 'none'   
            totalyear2 = "0"  
            totalmonth2 = "0"       
        }
        if(box3.classList.contains("selected")){                      
            check3.style.display = 'flex'
            totalmonth3 = "2"
            if(input.checked){
                addons3.value = '+$20/yr'
                totalyear3 = "20"            
            }else {
                addons3.value = "+$2/mo"
            }
        }else {
            check3.style.display = 'none'
            totalyear3 = "0" 
            totalmonth3 = "0"         
        }
        // To display plan selected
        var plan = document.querySelector('.chosenplan')
        var price = document.querySelector('.price')
        var mathtt;
        if(card[0].classList.contains("active2")){
            
            if(input.checked){
                plan.innerHTML = "Arcade(Yearly)"
                price.value = "$90/yr"
                mathtt = "90"
            }else{
                price.value ="$9/mo"
                plan.innerHTML = "Arcade(Monthly)"
                mathtt = "9"
            }
        }else if(card[1].classList.contains("active2")){          
            if(input.checked){
                plan.innerHTML = "Advanced(Yearly)"
                price.value = "$120/yr"
                mathtt = "120"
            }else{
                price.value = "$12/mo"
                plan.innerHTML = "Advanced(Monthly)"
                mathtt = "12"
            }          
        }else{           
            if(input.checked){
                plan.innerHTML = "Pro(Yearly)"
                price.value = "$150/yr"
                mathtt = "150"
            }else{
                price.value = "$15/mo"
                plan.innerHTML = "Pro(Monthly)"
                mathtt = "15"
            }           
        }
        // To get total amount
        var total = document.getElementById("total")
        var totaltext = document.querySelector('.totaltext')
        if(input.checked){     
            totaltext.textContent =  "Total(per year)"     
            total.innerHTML = Number(mathtt) + Number(totalyear1) + Number(totalyear2)
             + Number(totalyear3) + "/yr"
        }else{
            totaltext.textContent = "Total(per month)"
            total.innerHTML = Number(mathtt) + Number(totalmonth1) + Number(totalmonth2)
             + Number(totalmonth3) + "/mo"
        }  
    }

    function submit() {
        step4.style.display = 'none'
        step5.style.display = 'flex'
    }

    function goback1() {
        if(step2.classList.contains("activestep")){
            step2.classList.replace("activestep", "step")
            step1.classList.add("activestep")
            num2.classList.remove("active")
            num1.classList.add("active")
        }
    }

    function goback2() {
        if(step3.classList.contains("activestep")){
            step3.classList.replace("activestep", "step")
            step2.classList.replace("step", "activestep")
            num3.classList.remove("active")
            num2.classList.add("active")
        }
    }

    function goback3() {
        if(step4.classList.contains("activestep")){
            step4.classList.replace("activestep", "step")
            step3.classList.replace("step", "activestep")
            num4.classList.remove("active")
            num3.classList.add("active")
        }
    }

    

 
    



