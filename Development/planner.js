// Get the current date
const currentDate = new Date();
 
// Format the date
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
const formattedDate = currentDate.toLocaleDateString('en-US', options);
function getCurrentDate() {
    let dateElement = document.getElementById(".currentDate");
    dateElement.innerHTML = getCurrentDate();
};
window.onload = function () {
    const currentDate = document.querySelector(".container");
    currentDate.textContent = formattedDate;
};
function getFromStorage(namein){
    let valuereturn=""

    return valuereturn;
}
function setToStorage(namein,valuein){
alert(valuein);
}

// Get elements
let timeBlocks = document.getElementById('timeBlockHolder');

let colorvar="color: red";
 const d = new Date();
currentHour=d.getHours()

for (let i = 9; i <= 17; i++) {
    if (i==currentHour){
        colorvar="color: yellow"
    }
    if (i>currentHour){

        colorvar="color: green"
    }
    let storedData= getFromStorage('txt_'.concat(i.toString()));
    if (storedData.length==null){storedData=""};
   let div=document.createElement('div');
div.setAttribute("class","time-block");
let divTime=document.createElement('div');
divTime.setAttribute("class","time");
divTime.innerHTML=i.toString().concat(' AM');
let inputText=document.createElement('input');
inputText.setAttribute("type","text");
inputText.id='txt_'.concat(i.toString());
inputText.setAttribute("placeholder","Enter event...");
inputText.value=storedData;
let button=document.createElement('input');
button.setAttribute("type","button");

let onclickatt="setToStorage(".concat("'",'storage_',i.toString(),"'");
onclickatt+=','; 
onclickatt+='getElementById(';

onclickatt+="'";
onclickatt+='txt_'.concat(i.toString());
onclickatt+="').value)";
button.value='Save';
button.setAttribute("style",colorvar);
button.setAttribute("onclick",onclickatt);
div.appendChild(divTime);
div.appendChild(inputText);
div.appendChild(button);
timeBlocks.appendChild(div);
}

 
  


// $(".event-form").submit(function (e) {
//     e.preventDefault();
//     var event = $(this).find("input").val();
//      localStorage.setItem("event", event);
//  }); 