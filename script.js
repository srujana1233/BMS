const container = document.querySelector('.screen-container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');
var  ticketPrice = +movieSelect.value;

//functions
const updateSelectedCount = function () {
  const selectedSeats = document.querySelectorAll('.row.seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

//event listners

//movie change event listner
movieSelect.addEventListener('change',(e)=> {
  ticketPrice = +e.target.value;
  console.log(ticketPrice);
  updateSelectedCount();

})

//seat selector event listner
container.addEventListener('click',(e) => {
  if (
    (e.target.classList.contains('seat') &&
    (!e.target.classList.contains('occupied')))
) {
    e.target.classList.toggle('selected');
    updateSelectedCount();

   
}
});
//on refresh
updateSelectedCount();