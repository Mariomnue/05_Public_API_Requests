/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 * scripts.js */
//preventDefault();

let gallery = document.querySelector('#gallery');
//use querySelector, getElementbyID is bad
let employees = []


/*############
*   Fetch functions
*#############*/
//simple fetch method
fetch('https://randomuser.me/api/?results=12&exc=login,registered,id')
     .then(res => res.json())//parse the data to json
     .then(res => res.results)
     .then(generateGallery)
     .catch(err => console.log(err))



/*############
   build Card
#############*/


//json returned us a nice little array of objects. now we need to turn it into something we can use.
function generateGallery(employeeData){
console.log(employeeData);//I got data.
     let employees = employeeData;
     let cardHTML = '';
     employees.forEach((employee, index) => {
          let name = employee.name;
          let email = employee.email;
          let picture = employee.picture;
          let location = employee.location;
          let dob = employee.dob;

          cardHTML += `
          <div class="card" data-index="1">
               <div class="card" data-index="${index}">
                    <img class="card-img" src="${picture.thumbnail}"  alt="profile picture">
               </div>
               <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${location.city}, ${location.state}</p>
               </div>
          </div>`
     });
     //console.log(${employee.name});
     gallery.innerHTML = cardHTML;
}



/*############
   build Modal Window
#############*/

/*

<div class="card-img-container">
     <img class="card-img" src="${picture}"  alt="profile picture">
</div>
const modalText = `
     <div class="modal-container">
          <div class="modal">
               <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
               <div class="modal-info-container">
                    <img class="modal-img" src=" ${profileImage} " alt="profile picture">
                    <h3 id="name" class="modal-name cap"> ${name}</h3>
                    <p class="modal-text"> ${email}</p>
                    <p class="modal-text cap"> ${city}</p>
                    <hr>
                    <p class="modal-text"> ${phone}</p>
                    <p class="modal-text"> ${address}</p>
                    <p class="modal-text">Birthday:  ${birthday}</p>
               </div>
          </div>


          <div class="modal-btn-container">
               <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
               <button type="button" id="modal-next" class="modal-next btn">Next</button>
          </div>
     </div>`
*/
