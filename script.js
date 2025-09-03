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
let callCredit = parseInt(document.getElementById("call-credit").innerText);
document.getElementById("call-btn-1").addEventListener("click", function () {
  callToNumber("call-btn-1");
});
document.getElementById("call-btn-2").addEventListener("click", function () {
  callToNumber("call-btn-2");
});
document.getElementById("call-btn-3").addEventListener("click", function () {
  callToNumber("call-btn-3");
});
document.getElementById("call-btn-4").addEventListener("click", function () {
  callToNumber("call-btn-4");
});
document.getElementById("call-btn-5").addEventListener("click", function () {
  callToNumber("call-btn-5");
});
document.getElementById("call-btn-6").addEventListener("click", function () {
  callToNumber("call-btn-6");
});
document.getElementById("call-btn-7").addEventListener("click", function () {
  callToNumber("call-btn-7");
});
document.getElementById("call-btn-8").addEventListener("click", function () {
  callToNumber("call-btn-8");
});
document.getElementById("call-btn-9").addEventListener("click", function () {
  callToNumber("call-btn-9");
});
function callToNumber(callId) {
  let callEl = document.getElementById(callId);
  let serviceTitle =
    callEl.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
  let phoneNumber =
    callEl.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

  if (callCredit < 20) {
    alert(`Insufficient Credit Please Add Credit`);
    return;
  } else {
    callCredit -= 20;
    document.getElementById("call-credit").innerText = callCredit;
    const now = new Date();

    let parentDiv = document.getElementById("history-parent");
    let callH = document.createElement("div");
    callH.innerHTML = `
        <div class="flex items-center justify-between rounded-[8px] gap-4 bg-[#FAFAFA] p-4">
                    <div>
                        <h1 class="font-semibold text-[18px]">${serviceTitle}</h1>
                        <p class="text-[gray] hind-madurai-regular text-[18px]">${phoneNumber}</p>
                    </div>
                    <div>
                        <p class="hind-madurai-regular">${now.toLocaleTimeString()}</p>
                    </div>
        `;
    parentDiv.appendChild(callH);
  }
  alert(`Calling to ${serviceTitle} at ${phoneNumber}...`);
}

//history clear functionalities

document.getElementById("clear-btn").addEventListener("click", function () {
  console.log(
    document
      .getElementById("history-parent")
      .childNodes.forEach((div) => (div.innerHTML = ""))
  );
});

//copy to clipboard functionalities

let copyClickCount = 0;

document.addEventListener("click", async (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;

  copyClickCount++;
  console.log("Total copy button clicks:", copyClickCount);

  const counterEl = document.getElementById("copy-counter");
  if (counterEl) {
    counterEl.innerText = copyClickCount;
  }

  const card = btn.closest(".card");
  const sourceEl = card?.querySelector(".copy-text");
  const toCopy = (btn.dataset.copy ?? sourceEl?.textContent ?? "").trim();

  if (!toCopy) {
    alert("Nothing to copy in this card.");
    return;
  }

  try {
    await navigator.clipboard.writeText(toCopy);
    flashButton(btn, "Copied!");
  } catch {
    fallbackCopy(toCopy);
    flashButton(btn, "Copied!");
  }
});

function flashButton(btn, msg) {
  const original = btn.textContent;
  btn.textContent = msg;
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 1200);
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "absolute";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(ta);
  }
}
