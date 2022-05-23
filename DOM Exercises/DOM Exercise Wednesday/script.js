const question1Text = document.getElementById("question-1");
question1Text.style.color = "blue";

const quest2Elements = document.querySelector(".question-2");
quest2Elements.style.color = "red";

const question3Elements = document.querySelectorAll(".question-3");
question3Elements.forEach((element) => {
  element.classList.add("orange");
});

const question4Parent = document.getElementById("question-4").parentNode;

question4Parent.classList.add("purpleBackground");

// const question5Button = document.getElementById('alert-button');
// question5Button.addEventListener ('click', () => {
//   window.alert('You have clicked the button")
// })
const tvShowList = document.getElementById("add-tv-show-button");
tvShowList.addEventListener("click", () => {
  const tvShowParentList = document.getElementById("tv-shows");

  const show = document.createElement("li");
  show.innerText = "The Last Ship";
  tvShowParentList.append(show);
});
const question7RemoveButton = document.getElementById(
  "question-7-remove-button"
);
question7RemoveButton.addEventListener("click", () => {
  const commentToRemove = document.getElementById("comment-7");
  commentToRemove.remove();
});
const question8Button = document.getElementById("question-8-remove-button");

question8Button.addEventListener("click", () => {
  const elementToRemove = question8Button.parentElement;
  elementToRemove.remove();
});

const textToHighLight = document.querySelectorAll(".highlight");
textToHighLight.forEach((text) => {
  text.addEventListener("mouseover", (event) => {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "yellow";
  });

  text.addEventListener("mouseleave", (event) => {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "white";
  });
});

//question 11
const quesiton11PTag = document.getElementById("quesiton-11");
