const screenContainer = document.querySelector('.screen-container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');// It takes all the seats which are not with class occupied. 
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;// + because to change ticket price from string to int.

//Functions

const updateSelectedCount = function(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  // console.log(selectedSeats);
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

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
  updateSelectedCount();
})

//on refresh
updateSelectedCount();