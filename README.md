
# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
# Multi-step-form
A multi step form to test JavaScript capabilities. A frontend mentor challenge.
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made



### Links
- Live Site URL: ([https://your-live-site-url.com](https://multisform.netlify.app/))

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

```css
.proud-of-this-css .slider::before{
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
input:focus + .slider{
    box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider::before{
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
}
.slider.round{
    border-radius: 30px;
}
.slider.round::before{
    border-radius: 60%;
}
```
```js
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
            step1.style.display = 'none'
            step2.style.display = 'block'
            num1.classList.remove("active")
            num2.classList.add("active")
        }
}
```

### Continued development

I still need to work on my DOM manipulation in JavaScript and also APIs


## Author
- Website - [John](https://multisform.netlify.app/))
- Frontend Mentor - [Lamba01](https://www.frontendmentor.io/profile/lamba01)
- Twitter - [lambacodes](https://www.twitter.com/lambacodes)




