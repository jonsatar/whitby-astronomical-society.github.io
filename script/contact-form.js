
//declare variables for the error information in the form
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
   // this variable will store the content written in the name
   var name = document.getElementById('contact-name').value;
   // check if field is empty
   if (name.length ==0){
      nameError.innerHTML ='name is required';
      return false;
   }
   // also check if there is a single space between only alphabetical strings of any length represented by the regular expression below
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
     nameError.innerHTML ='Write full name';
     return false;
   }

   // nameError.innerHTML = 'valid';
   //if the regular expression is satidfied display a green circle
   nameError.innerHTML = '<i class = "fas fa-check-circle"></i>';
   return true;
}

function validatePhone(){
   //store information as entered into the phone number field
   var phone = document.getElementById('contact-phone').value;
   // check if field is empty
   if(phone.length ==0){
      phoneError.innerHTML = 'Phone no. is required';
      return false;
   }
// ensure phone number with area code is entereed by checking for 10 digits
   if(phone.length !==10){
      phoneError.innerHTML = 'Phone no. should be 10 digits'
      return false;
   }
// by the regular expression determine if the phone number entered is of all digits
   if(!phone.match(/^[0-9]{10}$/)){
      phoneError.innerHTML ='Only digits in phone no.'
      return false;
   }
// display agreen circle if all fails 
   phoneError.innerHTML = '<i class = "fas fa-check-circle"></i>';
   return true;
}

function validateEmail(){
   // store email as entered
   var email = document.getElementById('contact-email').value;
// ensure it is nonempty
   if(email.length ==0){
      emailError.innerHTML = 'Email is required' 
      return false;
   }
   // by the regular expression determine if email entered matches the form of only alphabeticals, digits, periods, or undersacores of any length followed by an @ symbol with any length of similar chracters dfurther followed by between 2 an 4 letters; exam_ple.email@email.com
   if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML = 'Email Invalid';
      return false;
   }
   // when proper form email is entered
   emailError.innerHTML = '<i class = "fas fa-check-circle"></i>';
   return true;
}
// determine if the message entered into the message box is of a sufficient length before displaying the green circle
function validateMessage(){
   var message = document.getElementById('contact-message').value;
   var required = 30;
   var left = required - message.length;

   if(left >0){
      // display the remiaing letters required to be entered for acceptancee
      messageError.innerHTML=left+'more characters required';
      return false;
   }

   messageError.innerHTML= '<i class = "fas fa-check-circle"></i>';
   return true;
}


function validateForm(){
   // Reject the form submission if any of the fail conditions have been met above. logical disjunctions
   if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
      submitError.style.display = 'block';
      submitError.innerHTML='Please fix error(s) to submit';
      setTimeout(function(){submitError.style.display = 'none';},3000);
      return false;
   }

}