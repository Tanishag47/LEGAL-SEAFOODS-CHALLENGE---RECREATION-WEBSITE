"use strict"; // uses strict globally

// LIGHT MODE/DARK MODE JS //




//________________________________________________________________________________

// PRODUCT SWITCHER JS //

// new variable buttons for <buttons> /.btn classes inside #switcherbuttons container & connect to js
let buttons = document.querySelectorAll('#switcherButtons button');

// a list for buttons to connect to dishes/products
let dishIds = ['product1', 'product2', 'product3', 'product4'];



// loops through each of the buttons in dishIds and adds eventListener for when a user clicks button
buttons.forEach(function(button){
    button.addEventListener('click', onClickButton);
});


// a function that is called when any of the buttons/Ids are clicked
function onClickButton(){
    let productId = this.id.replace('btn', 'product');
    hiddenDish(dishIds); 
    visibleDish(productId); 
};



// a function that loops through the dishId list and hides all products
function hiddenDish(dishIds){
    dishIds.forEach(function(id){
        let dish = document.getElementById(id);
        if(dish){
            dish.classList.remove('currentItem');
            dish.classList.add('hiddenItem');
        }
    });
}


// a function that shows only the clicked buttons corresponding dish
    function visibleDish(id){
        let dish = document.getElementById(id);
        if(dish){
            dish.classList.remove('hiddenItem');
            dish.classList.add('currentItem');
        }
    };




//________________________________________________________________________________

// GUESSING GAME JS

// variables to pull html elements into JS
let guessNum = document.getElementById('guessNum');
let submitButton = document.getElementById('submitButton');

// variables for result messages
let invalidNum = document.getElementById('invalidNum');
let resultWinner = document.getElementById('winner');
let resultLoser = document.getElementById('loser');
let randomNumGenerated = document.getElementById('randomNumGenerated');

// an event listener for when the user clicks the guess button
submitButton.addEventListener('click', function(){

    // user inputs a random number 
    let userGuess = parseInt(guessNum.value);

    // varibale for random number to be generated
    let randomNum = Math.floor(Math.random() * 10) + 1;

    // hide messages for both winning, losing and invalid numbers or letters
    invalidNum.style.display = 'none';
    resultWinner.style.display = 'none';
    resultLoser.style.display = 'none';

    // emtpy string for number generated to be displayed on screen
    randomNumGenerated.textContent = '';
    randomNumGenerated.style.display = 'none';

    
        
    // if the user doesnt put in a valid input
    if(isNaN(userGuess)|| userGuess > 10 || userGuess < 1){
        invalidNum.style.display = 'inline-block';
        return;
    };

    // checking to see if the number generated matches
    if(userGuess === randomNum){
        resultWinner.style.display = 'inline-block';
        return;
    }

    else{
        resultLoser.style.display = 'inline-block';
    };

    // Display the number that was generated
    randomNumGenerated.textContent = `Lucky Number is: ${randomNum}`;
    randomNumGenerated.style.display = ' block';

    // clear out the guess box
    guessNum.value = '';
});



//________________________________________________________________________________

// FORM VALIDATION JS

// variables to connect from forms feildset elements in html
let form = document.getElementById('form');
let firstName = document.getElementById('firstName'); 
let lastName = document.getElementById('lastName'); 

let phoneNumber = document.getElementById('phone');
let email = document.getElementById('email');
let message = document.getElementById('message');
let validInfo = document.getElementById('validInfo');

// variable that selects both radio buttons and stores in an list using query selector all vs id
let ContactMethodRadios = document.querySelectorAll('input[name="method"]'); 


// variables to connect error ids in span elements in the feildset 
let firstNameError = document.getElementById('firstNameError');
let lastNameError = document.getElementById('lastNameError');
let phoneError = document.getElementById('phoneError');
let emailError = document.getElementById('emailError');
let radioError = document.getElementById('radiosError');
let messageError = document.getElementById('messageError');



// an addEventListener to listen for a user trying to submit the form
form.addEventListener('submit', function(e){
    let valid = true;

    // hides the error messages originally in html 
    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    phoneError.style.display = 'none';
    emailError.style.display = 'none';
    radioError.style.display = 'none';
    messageError.style.display = 'none';


    // checks to see if first/last name, phone, email radios and message is valid
    // shows error message if user keeps first/last name blank
    if(firstName.value == ''){
        firstNameError.style.display = 'inline';
        valid = false;
    };

    if(lastName.value == ''){
        lastNameError.style.display = 'inline';
        valid = false;
    };

     //phone number input check - shows error if empty
    if(phoneNumber.value == ''){
        phoneError.style.display = 'inline';
        valid = false;
    };


    //email input check - shows error if empty
    if(email.value == ''){
        emailError.style.display = 'inline';
        valid = false;
    };

    //RADIO BUTTONS 
    // checks to see if atleast one of the radios are selected using for of loop
    let selectedRadio = '';
    for (let Radio of ContactMethodRadios){
        if(Radio.checked){
            selectedRadio = radioError.value;
            break;
        };
    };

   
    // if a user tries to submit without choosing radio, error is visible
    if(selectedRadio == ''){
        radioError.style.display = 'inline';
        valid = false;
    };

    // if the user selects phone contact method
    if(selectedRadio == 'phone' && phoneNumber.value == ''){
        phoneError.style.display = 'inline';
        valid = false;
    };

    // if the user selects email contact method
    if(selectedRadio == 'email' && email.value == ''){
        emailError.style.display = 'inline';
        valid = false;
    };

    // checks to see if message box is empty - shows error message if true
    if(message.value == ''){
        messageError.style.display = 'inline';
        valid = false;
    };
    
    
    // Prevents form submit if anything is invalid
    if (!(valid)){
        e.preventDefault();
    }
    // if the form is valid, a thank you message is displayed to the user
    else{
        validInfo.style.display = 'inline';
        form.reset();
        e.preventDefault(); 
    };

});