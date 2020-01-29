// checkboxed.setAttribute('type', 'checkbox');
// // checkboxed.type = 'checkbox';
// // checkboxed.name = 'chkbox1';
// // checkboxed.id = 'cbid';

// let radioButton = document.querySelector('input[type=radio]');
// radioButton.setAttribute('type', 'checkbox');

// $$('div.theclassname')[1].setStyle({
//   backgroundColor: '#900',
//   fontSize: '1.2em'
// });
// // OR add class name:
// $$('div.theclassname')[1].addClassName('secondclass');

// document.querySelector('div.my-class')[1].setstyle({
//   backgroundColor: 'black'
// });






let MenuNavShow = document.querySelector(".test-me");
let NavDown = document.querySelector(".nav .nav-secondlist");  
let Navleave = document.querySelector(".leave");

let ShowNav = false;

MenuNavShow.addEventListener('click', showMyMenu);
Navleave.addEventListener('mouseleave', showMyMenu);


function showMyMenu() {
  if (!ShowNav) {
 
NavDown.classList.add("open");
Navleave.classList.add("open");
    ShowNav = true;
  } 
  else{
NavDown.classList.remove("open");
   NavDown.classList.remove("open");
Navleave.classList.remove("open");
    ShowNav = false;
  }
}

/*****************
Price Production Snippet
*******************/

var MenuNavShow = document.querySelector("#mobile_menu .menu-item-11 > a");
var NavDown = document.querySelectorAll(".et_mobile_menu .menu-item-11 ul li")

var ShowNav = false;

MenuNavShow.addEventListener('click', showMyMenu);


function showMyMenu() {
  if (!ShowNav) {
  	NavDown.forEach(items =>items.style.display = "block"); 

    ShowNav = true;
    console.log("i'm here")
 
  } 
  else{
  	NavDown.forEach(items =>items.style.display = "none"); 
    ShowNav = false;
    console.log("i'm here 2")
  }
};



/********************
	Services JS
********************/

var MenuNavShow2 = document.querySelector("#mobile_menu .menu-item-12 > a");
var NavDown2 = document.querySelectorAll(".et_mobile_menu .menu-item-12 ul li")

var ShowNav2 = false;

MenuNavShow2.addEventListener('click', showMyMenu);


function showMyMenu() {
  if (!ShowNav2) {
  	NavDown2.forEach(items =>items.style.display = "block"); 

    ShowNav2 = true;
    console.log("i'm here")
 
  } 
  else{
  	NavDown2.forEach(items =>items.style.display = "none"); 
    ShowNav2 = false;
    console.log("i'm here 2")
  }
};


var showLink = document.querySelector(".mobile_menu_bar_toggle");
var LinkShowHere = document.querySelectorAll("#mobile_menu li ");

showLink.addEventListener('click', showMyLink);

var linkShow = false;

function showMyLink() {
	if(!linkShow){
LinkShowHere.forEach(items =>items.style.transform = "translateX(0)");

linkShow = true;
console.log("I am link");

	} else{

		LinkShowHere.forEach(items =>items.style.transform = "translateX(-80vh)");
		linkShow = false;
		console.log("I am stil working");

	}
};



var MenuShowLink = document.querySelector('.mobile_menu_bar_toggle');
var LinkShowMe = document.querySelectorAll('#mobile_menu li');

var linkShow = false;

MenuShowLink.addEventListener('click', showMyLink);

function showMyLink() {
  if (!linkShow) {
    LinkShowMe.forEach(item => item.style.transform = "translateX(0)");
    linkShow = true;
     console.log("I am a link");

  } else {
   LinkShowMe.forEach(item => item.style.transform = "translateX(-80vh)");
	linkShow = false;
	console.log("I am still a link");
  }
}


let MenuNavShow = document.querySelector(".menu-item-has-children");
let NavDown = document.querySelector(".sub-menu li a");    

let ShowNav = false;

MenuNavShow.addEventListener('click', showMyMenu);


function showMyMenu() {
  if (!ShowNav) {
 
NavDown.classList.add("open");
console.log(ShowNav);
    ShowNav = true;
  } 
  else{
NavDown.classList.remove("open");
   NavDown.classList.remove("open");

    ShowNav = false;
  }
}


NavDown.classList.add("hide-me");


