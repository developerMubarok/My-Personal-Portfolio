/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scrool is greater than 80 viewport height, add the scroll-header class to header tag
    if(this.scrolly >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scrool is greater than 80 viewport height, add the scroll-up class to header tag
    if(this.scrolly >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp );

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
        emailjs
        .sendform(
            'service_pul7wpi',
            'template_juoo1wp',
            '#contact-form',
            'l5HKsD4oanb4pBIOS'
            )
            .then(() =>{
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
    



