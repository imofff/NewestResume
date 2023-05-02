// let contact = $("#contact");

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    });
  });

//   function validateForm() {
//     let name = document.forms['contact-form']['name'].value;
//     let email = document.forms['contact-form']['email'].value;
//     console.log("name",name);
//     if (name == '') {
//       alert('Please enter your name');
//       return false;
//     }
  
//     if (email == '') {
//       alert('Please enter your email');
//       return false;
//     }
  
//     return true;
//   }