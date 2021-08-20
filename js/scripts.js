/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 * scripts.js */
//preventDefault();

let gallery = document.querySelector('#gallery');
let employees = [];
let index = 0;
containerObjModal = [];
//  Beforebegin

document.body.insertAdjacentHTML('afterbegin',`
     <div class="modal-container">
          <div class="modal">
               <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          </div>
          <div class="modal-btn-container">
               <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
               <button type="button" id="modal-next" class="modal-next btn">Next</button>
          </div>
     </div>
`)
console.log(employees);//empty good
const container = document.querySelector('.modal-container');
let containerObj
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

//const {0: name, 1: price, 2: prgrm} = data;
          let cardIndex = index;
          let modalIndex = cardIndex + 100;
          let name = employee.name;
          let email = employee.email;
          let picture = employee.picture;
          let location = employee.location;
          let dob = employee.dob;//Must format it please
          let phone = employee.phone;
          let address = location.street.number + " " +
               location.street.name + ", " +
               location.city + ", " + location.state + ", " + location.postcode
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
          </div>

          <div data-index="${modalIndex}" class="modal-container">

               <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div id=${index} class="modal-info-container">
                         <img class="modal-img" src="${picture.large}"  alt="larger profile picture">
                         <h3 id="name" class="modal-name">${name.first} ${name.last}</h3>
                         <p class="modal-text">${email}</p>
                         <p class="modal-text">${phone}</p>
                         <p class="modal-text">${location.street.number} ${location.street.name}</p>
                         <p class="modal-text">${location.city}, ${location.state}, ${location.postcode}</p>
                         <p class="modal-text">Birthday: ${dob.date}  ${dob.age}</p>
                         <hr>

                    </div>
               </div>
               <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
               </div>
          </div>
               `
          //console.log(document.getElementsByClassName("modal-info-container"));

     })

     gallery.innerHTML = cardHTML;

     containerObj = document.getElementsByClassName("modal-info-container");

     console.log(containerObj[0]);//YEAH
}


function displayModal(index){
//let modalIndex = index;

     console.log(index + "is it still here");//itis
}




/*############
   Event Listeners
#############*/


//a card has been clicked, show the matching modal
gallery.addEventListener('click', e => {
console.log("give me "  +e);

     if(e.target !== gallery){
          const card = e.target.closest('.card');
          index = card.getAttribute('data-index');
          modalIndex = index;
          const modalContainer = card.closest('modal-info-container');

console.log('card # ' + index  + " was clicked");

console.log(containerObj[index]);//the correct mogal containerObjModal[index]

console.log(containerObj[index].id);

     if(index == containerObj[index].id){
          console.log('make it visible');
          if(index === "1"){
               console.log("index is equal to 1");
               container.classList.toggle("show-modal");
               containerObj[1].classList.toggle("show-modal")

          }
     }

     }})


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
        containerObj.classList.toggle("show-modal")
        console.log('close the window');//this works
    }

/*
    function windowOnClick(event) {//close the background click
        if (event.target === container) {
            toggleModal();
        }
    }
*/
    //trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
