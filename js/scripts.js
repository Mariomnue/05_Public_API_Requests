/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 * scripts.js */
//preventDefault();

let gallery = document.querySelector('#gallery');
let employees = [];
let index = 0;
//  Beforebegin

document.body.insertAdjacentHTML('afterbegin',`
     <div class="modal-container">
          <div class="modal">
               <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          </div>
          <div class="modal-info-container">
          </div>
          <div class="modal-btn-container">
               <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
               <button type="button" id="modal-next" class="modal-next btn">Next</button>
          </div>
     </div>
`)
console.log(employees);
const container = document.querySelector('.modal-container');
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal-close-btn");//Search Feature


/*############
*   Fetch functions
*#############*/

fetch('https://randomuser.me/api/?results=12&exc=login,registered,id')
     .then(res => res.json())//parse the data to json
     .then(res => res.results)
     .then(generateGallery)
     .catch(err => console.log(err))



/*############
   build Card Gallery
#############*/


function generateGallery(employeeData){
console.log(employeeData);//I got data.
     let employees = employeeData;
     let cardHTML = '';
     let modalText = '';
     employees.forEach((employee, index) => {
          let cardIndex = index;
          let name = employee.name;
          let email = employee.email;
          let picture = employee.picture;
          let location = employee.location;
          let dob = employee.dob;
          let phone = employee.phone;
          let address =
               location.street.number + " " +
               location.street.name + "\br " +
               location.city + " " + location.state + " " + location.postcode
          cardHTML += `
               <div class="card" data-index="${cardIndex}">
                    <div class="card" data-index="${cardIndex}">
                         <img class="card-img" src="${picture.thumbnail}"  alt="profile picture">
                    </div>
                    <div class="card-info-container">
                         <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
                         <p class="card-text">${email}</p>
                         <p class="card-text cap">${location.city}, ${location.state}</p>
                    </div>
               </div>`
               let cardTarget = cardIndex;
          modalText = `
               <h3 id="name" class="modal-name cap"> ${name.first} ${name.last}</h3>
               <p class="modal-text cap"> ${location.city}</p>
               <hr>`
          containerObj = document.getElementsByClassName("modal-info-container");
          document.body.containerObj.insertAdjacentHTML('afterbegin', modalText);
console.log(index + " last " + modalText);
     })
     //generateModal()
     gallery.innerHTML = cardHTML;

}







/*############
   build Modal Window
#############*/

function generateModal(index, modalText){
     let cardIndex = index;
     let text = modalText;
     console.log(cardIndex + " ; " + text);
containerObj = document.getElementsByClassName("modal-info-container")
document.body.containerObj.insertAdjacentHTML('afterbegin', text)

}


/*############
   Event Listeners
#############*/



gallery.addEventListener('click', e => {
console.log("give me "  +employees);

     if(e.target !== gallery){
          const card = e.target.closest('.card');
          index = card.getAttribute('data-index');
          container.classList.toggle("show-modal");
console.log('card # ' + index  + " was clicked");
          containerObj = document.getElementsByClassName("modal-info-container")
console.log(containerObj);//container is good.
console.log(employees);
          document.body.containerObj.insertAdjacentHTML('afterbegin',
               employees[index].modalText)
     }})

//employees[person].modalText




function toggleModal(){
     container.classList.toggle("show-modal");
}

function windowOnClick(event){
     if(event.target === modal){
          toggleModal();
     }
}


//closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);






//const modal = document.querySelector(".modal");
    //const trigger = document.querySelector(".trigger");
//    const closeButton = document.querySelector(".close-button");

    function toggleModal() {
        container.classList.toggle("show-modal");//close the modal
        console.log('close the window');//this works
    }

    function windowOnClick(event) {//close the background click
        if (event.target === container) {
            toggleModal();
        }
    }

    //trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
