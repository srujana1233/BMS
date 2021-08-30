const screenContainer = document.querySelector('.screen-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');// It takes all the seats which are not with class occupied. 
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;// + because to change ticket price from string to int.
//populate UI
populateUI();


//Functions

const updateSelectedCount = function(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  

  //copy all selected seats into an array
  //map through the array
  //return a new array

  const seatsIndex = [...selectedSeats].map((seat)  => {
    return[...seats].indexOf(seat);

  });
  
  
  //set the new array in local storage

  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));


  

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

}

const setMovieData = function(movieIndex,moviePrice){
  localStorage.setItem('selectedMovieIndex',movieIndex);
  localStorage.setItem('selectedMoviePrice',moviePrice);
}

//populate ui
function populateUI(){
  const selectedSeats =JSON.parse(localStorage.getItem('selectedSeats'));


  if(selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat,index) => {
      if(selectedSeats.indexOf(index) > -1){
        seat.classList.add('selected');
      }

    })
  }
  const selectedMovieIndex = localStorage.getItem('selectMovieIndex')
  if(selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex;
    
  }
}
//Event listeners

//1. seat selection event listener
screenContainer.addEventListener('click', (e) =>{
  if(e.target.classList.contains('seat') && (!e.target.classList.contains('occupied')) ){
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
})

//2. movie select event listener
movieSelect.addEventListener('change',(e) =>{
  ticketPrice = +e.target.value;
  console.log(ticketPrice);
  setMovieData(e.target.selectedIndex,e.target.value);
  updateSelectedCount();
})

//on refresh initial count and total set
updateSelectedCount();

