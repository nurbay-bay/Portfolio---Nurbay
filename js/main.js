//sound

document.querySelectorAll('.sound').forEach(block => {
  block.addEventListener('mouseover', () => {
      const yourSound = new Audio('../audio/hover.mp3');
      yourSound.play();
  });
});

document.querySelector('.back-button').onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


const first_item = document.querySelector('.first_col');
const second_item = document.querySelector('.second_col');
const thirs_item = document.querySelector('.third_col');
const fourth_item = document.querySelector('.fourth_col');

first_item.addEventListener('scroll', () => {
  second_item.scrollTop = first_item.scrollTop;
});

second_item.addEventListener('scroll', () => { 
  thirs_item.scrollTop = second_item.scrollTop;
  first_item.scrollTop = second_item.scrollTop;
});

thirs_item.addEventListener('scroll', () => { 
  fourth_item.scrollTop = thirs_item.scrollTop;
  first_item.scrollTop = thirs_item.scrollTop;
});

fourth_item.addEventListener('scroll', () => { 
  first_item.scrollTop = fourth_item.scrollTop;
  thirs_item.scrollTop = fourth_item.scrollTop;
});


function viewProject() {
  const myProjects = document.getElementById("myProjects");
  const myButton = document.getElementById("myButton");
  const myBody = document.getElementsByTagName("body")[0];

  if (myButton.value === "projects") {
    myProjects.style.opacity = "1";
    myProjects.style.height = "100vh";
    myButton.value = "about me";
    myBody.style.overflow = "hidden";
  } else {
    myProjects.style.opacity = "0";
    myButton.value = "projects";
    myProjects.style.height = "0";
    myBody.style.overflow = "visible";
  }
}