let coffee1 = document.querySelector('#coffee1');
let coffee2 = document.querySelector('#coffee2');

coffee1.onclick = () => {
  if (coffee1.getAttribute("src") === 'images/coffee1.jpg') {
    coffee1.setAttribute("src",'images/falldrink1.jpg');
  } else {
      coffee1.setAttribute("src",'images/coffee1.jpg');
    }
};

coffee2.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', 'images/falldrink2.jpg');
};

coffee2.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', 'images/coffee2.jpg');
};
mages/coffee2.jpg
