
var input = document.querySelector('.selector')
var yearly = document.querySelectorAll('.yearly-info')
var monthly = document.querySelectorAll('.amt')
var card = document.querySelectorAll('.card')
var step1 = document.querySelector('.step-1')
var step2 = document.querySelector('.step-2')
var step3 = document.querySelector('.step-3')
var step4 = document.querySelector('.step-4')
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
        for (let index = 0; index < card.length; index++) { 
            card[index].style.height = "27vh"          
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
        for (let index = 0; index < card.length; index++) { 
            card[index].style.height = "25vh"          
        } 
        year.style.color = 'hsl(231, 11%, 63%)'
        month.style.color = 'hsl(213, 96%, 18%)'   
    }
}


for (var i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active2");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active2", "");
      }
      // Add the active class to the current/clicked button
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

// step 1 formvalidation
function formvalidate() {
    // display error msg
        let form = document.querySelectorAll('.userdata')
        for (let i = 0; i < form.length; i++) {
            if(form[0].value == ""){
                let error1 = document.getElementById("error1")
                error1.style.display = 'block'
            }else {
                error1.style.display = 'none'
            }      
            if(form[2].value == ""){
                let error3 = document.getElementById("error3")
                error3.style.display = 'block'
            }else {
                error3.style.display = 'none'
            }
        }
        // email verification
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form[1].value)) {
            let error2 = document.getElementById("error2")
            error2.style.display = 'block'
          }else{
            error2.style.display = 'none'
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
            step1.style.display = 'none'
            step2.style.display = 'block'
        }
}

// function nextpage() {
//     let form = document.querySelector('form')
//     if(form.checkValidity == true){
//         step1.style.display = 'none'
//     }else {
//         alert("dd")
//     }
// }




