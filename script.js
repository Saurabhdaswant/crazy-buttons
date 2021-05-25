//grab everthing
const crazyButtons = document.querySelectorAll(".btn-crazy");

//define our functions
function dhingana() {
  //get two random numbers
  const offsetleft = Math.random() * (window.innerWidth - this.clientWidth);
  const offsettop = Math.random() * (window.innerHeight - this.clientWidth);

  this.style.top = offsettop + "px";
  this.style.left = offsetleft + "px";
}

//add event listeners
crazyButtons.forEach((button) =>
  button.addEventListener("mouseover", dhingana)
);
