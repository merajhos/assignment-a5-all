
// like button
let likeCount = 0;
const mainLikeCount = document.getElementById("mainLikeCount");
const likeCounterButtons = document.querySelectorAll(".likeCounterButton");
for (const btn of likeCounterButtons) {
  btn.addEventListener("click", function () {
    likeCount++;
    mainLikeCount.innerText = likeCount;
    btn.style.color = "red";
  });
}
//coin count
let coin = 100;
const mainCoin = document.getElementById("mainCoin");
const callButtons = document.querySelectorAll(".callButton");
for (const btn of callButtons) {
     const number = btn.parentNode.parentNode.children[3].innerText;
const name = btn.parentNode.parentNode.children[1].innerText;
  btn.addEventListener("click", function () {
    if (coin >= 20) {
      coin = coin - 20;
      mainCoin.innerText = coin;
      showCustomAlert(` Caling ${name}  ${number} `)
       return btn;
    } else {

Customed('Add to Coin and Call Again')
    }
  });
}
//copy button
let copyCount = 0;
const copyCountNumber = document.getElementById("copyCountNumber");
const copyButtons = document.querySelectorAll(".copyButton");

for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const number = btn.parentNode.parentNode.children[3].innerText;
const name = btn.parentNode.parentNode.children[1].innerText;
    navigator.clipboard.writeText(number).then(function () {
      copyCount++;

      copyCountNumber.innerText = copyCount;

showCustomAlert(` Copied ${name}  ${number} `)
      
    });

  });
}
callButtons.forEach((callbtn) => {
  callbtn.addEventListener("click", function () {
    const name = callbtn.parentNode.parentNode.children[1].innerText;

    const number = callbtn.parentNode.parentNode.children[3].innerText;

    const history = document.getElementById("history");

    if (history.children.length >= 5) {
      return;
    };

    const newCard = document.createElement("div");

let now = new Date();
let localTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second: '2-digit' });


    newCard.className = "bg-gray-200 py-1 my-3 px-5 rounded-lg";
    newCard.innerHTML = `
    <div class="flex justify-between">
    <h1>${name}</h1>
    <div><h1>${localTime}</h1></div>
    </div>
    <p>${number}</p>
    `;

    history.appendChild(newCard);
  });
}
);

document.getElementById("clearbtn").addEventListener("click", function () {
  const history = document.getElementById("history");
  history.innerHTML = "";
});

const customAlert = document.getElementById("customAlert");
const alertMessage = document.getElementById("alertMessage");
const customs = document.getElementById("customs");
const alerts = document.getElementById("alerts");
function Customed(message) {
  alerts.innerText = message;
  customs.classList.remove("hidden");
  setTimeout(() => {
    customs.classList.add("hidden");
  }, 1000);
// }

// function showCustomAlert(message) {
//   alertMessage.innerText = message;
//   customAlert.classList.remove("hidden");
//   setTimeout(() => {
//     customAlert.classList.add("hidden");
//   }, 1000);
// }
