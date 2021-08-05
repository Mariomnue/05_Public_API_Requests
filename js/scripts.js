/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 * scripts.js */




/*############
*   Fetch functions
*#############*/
fetch('https://randomuser.me/api/?results=12&exc=login,registered,id')
     .then(response => response.json())
     .then(data => console.log(data))



/*############
   build Card
#############*/

/*
const card = `
          <div class="card">
               <div class="card-img-container">
               <img class="card-img" src=" ${profileImage} " alt="profile picture">
          </div>
          <div class="card-info-container">
               <h3 id="name" class="card-name cap"> ${name}</h3>
               <p class="card-text"> ${email}</p>
               <p class="card-text cap"> ${city} ", " ${state}</p>
          </div>`
*/






/*############
   build Modal Window
#############*/

/*
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
