const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const faqs = [];
let accordion = document.querySelector(".accordian_body");

//To create FAQ
function createFaq() {

  for (let i=0; i < faqData.length; i++){
    //create elements
    let mainDiv = document.createElement("div")
    let header = document.createElement("div") 
    let question = document.createElement("h3")
    let answer = document.createElement("p")
    let btn = document.createElement("button")

    //add class names to elements
    mainDiv.setAttribute("class","faq")
    header.setAttribute("class","faq_header")
    answer.setAttribute("class","hidden")
    btn.setAttribute("class","show_btn")

    //append elements to their respective parent elements
    accordion.appendChild(mainDiv)
    mainDiv.appendChild(header)
    header.appendChild(question)
    mainDiv.appendChild(answer)
    header.appendChild(btn)
    
    //add text to elements
    btn.textContent = "+";
    question.textContent = faqData[i].question;
    answer.textContent = faqData[i].answer;

    //add event listner to button
    btn.addEventListener("click",btnStatusUpdate);

  }
}

//to show FAQ
function showFaq() {
  createFaq();
}

// to change the state of button
function btnStatusUpdate(e) {
  let answerState = e.currentTarget.parentElement.nextSibling.style.display;
  if(answerState == 'none'){
    e.currentTarget.parentElement.nextSibling.style.display = "block"
    btn.textContent = "-";
  }
  else{
    e.currentTarget.parentElement.nextSibling.style.display = "none"
    btn.textContent = "+";
  }
}

//main function call
showFaq()