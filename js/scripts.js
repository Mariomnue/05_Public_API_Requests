/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 * scripts.js */
//preventDefault();



/*############
*   Fetch functions
*#############*/
fetch('https://randomuser.me/api/?results=12&exc=login,registered,id')
     .then(response => response.json())//parse the data to json
     .then(data => console.log(data))
     //.then(data => generateCard())
     //.then(data)




/*############
*   Array functions
*#############*/



let text = '{ "employees" : ['+
     '{"name.first":name.first,'+
     '"name.last":name.last,'+
     '"picture":picture.thumbnail,'+
     '"email":email,'+
     '"location.country":location.country,'+
     '"location.city":location.city,'+
     '"location.state":location.state,'+
     '"postcode":location.postcode,'+
     '"street.number":street.number,'+
     '"street.name":street.name,'+
     '"dob":dob.date,'+
     '"age":dob.age,}'+
     ']};'

const obj = JSON.parse(text);





/*############
   build Card
#############*/

const card = document.getElementById('gallery')
//const employees = data
function generateCard(){
     //console.log(data);

//     const card = document.getElementById('gallery')
     const cardhtml = `
          <div class="card">
          <div class="card-info-container">
               <h3 id="name" class="card-name cap">${obj.employees[0].name.first}</h3>
               <p class="card-text">email</p>
               <p class="card-text cap">city, state</p>
          </div>


          </div>`
}







/*############
   build Modal Window
#############*/

/*

<div class="card-img-container">
     <img class="card-img" src="${data[0].picture}"  alt="profile picture">
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
