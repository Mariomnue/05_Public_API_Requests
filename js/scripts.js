/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 * scripts.js */
//preventDefault();

let gallery = document.querySelector('#gallery');
let employees = [];
let index = 0;
let modalIndex = index;
//let modalText = '';
filteredList = [];

//afterbegin insert the Modal Container, and modal
//close button, next, prev, search container; input, submit.
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
     <div class="search-container">
          <form action="#" method="get" id="Search">
               <input type="search" id="search-input" class="search-input" placeholder="Click to view">
               <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit" title="click to view">
          </form>
     </div>

`)


const container = document.querySelector('.modal-container');//background modal
let containerObj//each person will make their own modal text window;
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal-close-btn");//close the modal
const prevButton = document.getElementById('modal-prev');//prev modal
const nextButton = document.getElementById('modal-next');//next modal



/*############
*   SEARCH
*#############*/
const search = document.querySelector('.search-container');//background modal
const form = document.getElementById('Search')
const input = document.getElementById('search-input');
     form.appendChild(input);
const searchButton = document.getElementById('search-submit');
     form.appendChild(searchButton);


noResults = document.createElement('h2');
noResults.textContent = "Sorry, NO results have been found.";
search.appendChild(noResults);
noResults.style.display = ('none');


function searchForEmployee(text){
cnt = 0;
     let inputVal = text;
     clearSearch();//clear the search field
//if any part of person name
     for(let i=0; i<=11; i++){
     let name = containerObj[i].firstElementChild.nextSibling.nextSibling.innerHTML.toLowerCase();
//console.log(cnt+ " < how many? the i > " +i);
          if(name.includes(inputVal.toLowerCase())){
//console.log(" we have a match:  " + name + "  " +inputVal);
               filteredList.push(i);
               cnt++;
//console.log("You have " +cnt+ " match(es), do you want to see them?");
//console.log(filteredList);
          }
     }
console.log("You have " +cnt+ " match(es), do you want to see them?");
     function clearSearch(){//only runs when told or on click of search button
          filteredList = [];
          cnt = 0;
//console.log(name + "   clear it");
     }


}



//search when clicked
form.addEventListener('submit', (e) => {
//console.log(e);
     noResults.style.display = 'none';
     e.preventDefault();
     const text = input.value;
     input.value = '';//clear it out after its been used.
console.log(text);
     searchForEmployee(text);
});

//Catch the keys
form.addEventListener('keyup', (e) =>{
     e.preventDefault();
     const text = input.value;
     searchForEmployee(text);
});


/*############
*   Fetch functions
*#############*/

fetch('https://randomuser.me/api/?results=12&exc=login,registered,id')
     .then(res => res.json())//parse the data to json
     .then(res => res.results)
     .then(generateGallery)
     .catch(err => console.log(err))
//net::ERR_CONNECTION_RESET




/*############
generateGallery()
Build Cards gallery and Modal windows gallery
//this is where:
/* for each person:
     /* all the data is stored,
     /* the gallery card is built,
     /* the modal window (containerObj) is built
/* then it is rewritten to the DOM using innerHTML
#############*/
function generateGallery(employeeData){
console.log(employeeData);//I got data.
     let employees = employeeData;
     let cardHTML = '';
//     let modalText = '';
     employees.forEach((employee, index) => {

          let cardIndex = index;
          let modalIndex = cardIndex;
          let name = employee.name;
          let email = employee.email;
          let picture = employee.picture;
          let location = employee.location;
          let dob = employee.dob;
          let birthday = formatInput(dob.date.substring(0,10));
          let phone = employee.phone;
          let address = location.street.number + " " +
               location.street.name + ", " +
               location.city + ", " + location.state + ", " + location.postcode;
          let nat = employee.nat;

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
                    <div id=${index} class="modal-info-container">
                         <img class="modal-img" src="${picture.large}"  alt="larger profile picture">
                         <h3 id="name" class="modal-name">${name.first} ${name.last}</h3>
                         <p class="modal-text">${email}</p>
                         <p class="modal-text">${phone}</p>
                         <p class="modal-text">${location.street.number} ${location.street.name}</p>
                         <p class="modal-text">${location.city}, ${location.state}, ${location.postcode}</p>
                         <p class="modal-text">Birthday: ${birthday}</p>
                    </div>
               </div>
          </div>
               `
     })

     gallery.innerHTML = cardHTML;

     containerObj = document.getElementsByClassName("modal-info-container");

}




/*############
   Helper functions
#############*/

//turn the date of birth into nicely formatted birthday.
function formatInput(dob){
     let bday = dob;
     let month = parseMonth(bday.substring(5,7));
     let day = bday.substring(8,10);
     let year = bday.substring(0,4);
     let birthday = month + "-" + day + "-" + year;
     return birthday;
}

//Switch the month names
function parseMonth(month){
     switch (month) {
          case "01":
               month = "January"
               break;
          case "02":
               month = "February"
               break;
          case "03":
               month = "March"
               break;
          case "04":
               month = "April"
               break;
          case "05":
               month = "May"
               break;
          case "06":
               month = "June"
               break;
          case "07":
               month = "July"
               break;
          case "08":
               month = "August"
               break;
          case "09":
               month = "September"
               break;
          case "10":
               month = "October"
               break;
          case "11":
               month = "November"
               break;
          case "12":
               month = "December"
               break;
     }
     return month;
};



/*############
   Event Listeners
#############*/

/*Each card can be clicked on,
/* modal appears to pop on,

*/
//Don't touch me
gallery.addEventListener('click', e => {
     if(e.target !== gallery){
          const card = e.target.closest('.card');
          index = card.getAttribute('data-index');
          modalIndex = index;
          const modalContainer = card.closest('modal-info-container');

          if(index == containerObj[index].id){
               container.classList.toggle("show-modal");
               makeSwitch();
          }
     }})
//Don't touch me



//makeSwitch uses index to compare the case
//toggle the containerObj turning both on an off,
function makeSwitch(){
     switch (index) {
          case "0":
          containerObj[0].classList.toggle("show-modal")
               break;
          case "1":
          containerObj[1].classList.toggle("show-modal")
               break;
          case "2":
          containerObj[2].classList.toggle("show-modal")
               break;
          case "3":
          containerObj[3].classList.toggle("show-modal")
               break;
          case "4":
          containerObj[4].classList.toggle("show-modal")
               break;
          case "5":
          containerObj[5].classList.toggle("show-modal")
               break;
          case "6":
          containerObj[6].classList.toggle("show-modal")
               break;
          case "7":
          containerObj[7].classList.toggle("show-modal")
               break;
          case "8":
          containerObj[8].classList.toggle("show-modal")
               break;
          case "9":
          containerObj[9].classList.toggle("show-modal")
               break;
          case "19":
          containerObj[10].classList.toggle("show-modal")
               break;
          case "11":
          containerObj[11].classList.toggle("show-modal")
               break;
     }
}


/*
//unsure if windowOnClick() will be used
function windowOnClick(event){
     if(event.target === modal){
          toggleModal();
      }
}*/



//Used by the close button
function toggleModal() {
   container.classList.toggle("show-modal");//toggle the blue/white background.
   makeSwitch();//toggle the containerObj[]'s (modal-info-container objects)
   containerObj[index].style.visibility = 'hidden';
}

//move next in the gallery of modals
function nextOnClick(event){
containerObj[index].style.visibility = 'hidden';
     if(index === "11"){
          index = "0";
          containerObj[index].style.visibility = 'visible';//turn new one on
     }
     else{
          index = parseInt(index) + 1;//advance the index #
          containerObj[index].style.visibility = 'visible';//turn new one on
          index = index.toString();//return # to string;
     }
     modalIndex = index;
}

//move back in the gallery of modals
function prevOnClick(event){
containerObj[index].style.visibility = 'hidden';
     if(index === "0"){
          index = "11";
          containerObj[index].style.visibility = 'visible';//turn new one on
     }
     else{
          index = parseInt(index) - 1;//advance the index #
          containerObj[index].style.visibility = 'visible';//turn new one on
          index = index.toString();//return # to string;
     }
     modalIndex = index;
}

closeButton.addEventListener("click", toggleModal);
//container.addEventListener("click", windowOnClick);
nextButton.addEventListener("click", nextOnClick);
prevButton.addEventListener("click", prevOnClick);
