//heart related feaature functionality
let listOfheartData = [];
document.getElementById("heart-icn-1").addEventListener("click", function () {
  setHeartIconData("heart-icn-1");
});
document.getElementById("heart-icn-2").addEventListener("click", function () {
  setHeartIconData("heart-icn-2");
});
document.getElementById("heart-icn-3").addEventListener("click", function () {
  setHeartIconData("heart-icn-3");
});
document.getElementById("heart-icn-4").addEventListener("click", function () {
  setHeartIconData("heart-icn-4");
});
document.getElementById("heart-icn-5").addEventListener("click", function () {
  setHeartIconData("heart-icn-5");
});
document.getElementById("heart-icn-6").addEventListener("click", function () {
  setHeartIconData("heart-icn-6");
});
document.getElementById("heart-icn-7").addEventListener("click", function () {
  setHeartIconData("heart-icn-7");
});
document.getElementById("heart-icn-8").addEventListener("click", function () {
  setHeartIconData("heart-icn-8");
});
document.getElementById("heart-icn-9").addEventListener("click", function () {
  setHeartIconData("heart-icn-9");
});

function setHeartIconData(heartId) {
  let index = listOfheartData.findIndex((h) => h.id === heartId);

  if (index !== -1) {
    listOfheartData.splice(index, 1);
    const heartIcon = document.getElementById(heartId);
    heartIcon.innerHTML = `
    <i id="heart-icn-1" class="fa-regular fa-heart h-[24px] w-[24px]"></i>
    `;

    document.getElementById("heart-number").innerText = listOfheartData.length;
  } else {
    listOfheartData.push({ id: heartId });
    const heartIcon = document.getElementById(heartId);
    heartIcon.innerHTML = `
    <i class="fa-solid fa-heart" style="color: red;"></i>
    `;
    document.getElementById("heart-number").innerText = listOfheartData.length;
  }
}

//call related features and functionality
function callToNumber(callId) {}
