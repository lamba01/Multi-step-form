var input = document.querySelector('.selector')
var yearly = document.querySelectorAll('.yearly-info')
var monthly = document.querySelectorAll('.amt')
var card = document.querySelectorAll('.card')
function test() {
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


