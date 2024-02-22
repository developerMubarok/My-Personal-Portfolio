/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== ABOUT TABS ====================*/
const tabs =document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]');

tabs.forEach((tab) =>{
    tab.addEventListener('click',() =>{
        const target =document.querySelector(tab.dataset.target);
    
     tabContents.forEach((tabContent) =>{
        tabContent.classList.remove('tab__active');
     });  
    target.classList.add('tab__active');
     
     tabs.forEach((tab) =>{
         tab.classList.remove('tab__active');
     });
     tab.classList.add('tab__Active')
   })
});

/*=============== CONTACT FORM =============== */
const contactForm= document.getElementById('contact__form');
  contactName=document.getElementById('connect-name');
  contactEmail=document.getElementById('connect-email');
  contactSubject=document.getElementById('connect-subject');
  contactMessage=document.getElementById('contact-message');
  errorMessage=document.getElementById('error__message');
  const sendEmail= (e) =>{
    e.preventDefault();
    //   Check If the field has a value
    if (contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === '' 
    ) {
     // Show messaage
     errorMessage.textContent ='Write all the input fields'       
    }
    else{
        // serviceID -template -#form -publickey
        emailjs.sendform('service_pul7wpi','template_ojc5y78','#contact-form','l5HKsD4oanb4pBIOS').then(() =>{
            // Show message add color, window +dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent='Message sent';
            // remove message after 5 seconds
            setTimeout(() =>{
                errorMessage.textContent ='';
            }, 5000);
        },
        (error)=>{
            alert('))OOps! SOMETHING WENT WRONG...', error);
        } 
        );
        // clear input fields
        contactName.value ='';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = ''; 

    }
};
contactForm.addEventListener('Submit', sendEmail);
    



