const sampleComments = [
  "Gojo still clears for me.",
  "Luffy has the best energy.",
  "Ayanokoji is too calm to be real.",
  "Light Yagami was scary smart.",
  "Levi is forever elite.",
  "Itachi made the whole story hurt.",
  "Denji is chaotic in the best way."
];

let adminUnlocked = false;

function voteAlert() {
  alert("Vote registered for the debate!");
}

function postThought(event) {
  event.preventDefault();

  const anime = document.getElementById("anime").value.trim();
  const thought = document.getElementById("thought").value.trim();
  const side = document.querySelector('input[name="side"]:checked').value;
  const agree = document.getElementById("agree").checked;

  if (!agree) {
    alert("Please agree to keep the debate respectful.");
    return;
  }

  const card = document.createElement("article");
  card.className = "thought-card";
  card.innerHTML = `
    <h3>${anime}</h3>
    <p>${thought}</p>
    <span>Side: ${side}</span>
  `;

  document.getElementById("thoughtList").prepend(card);

  document.getElementById("anime").value = "";
  document.getElementById("thought").value = "";
  document.getElementById("agree").checked = false;

  alert("Thought posted!");
}

function createPoll(event) {
  event.preventDefault();

  const title = document.getElementById("polltitle").value.trim();
  const options = document.getElementById("polloptions").value.trim().split("
").filter(Boolean);

  alert(`Poll created: ${title}
Options:
${options.join("
")}`);
  event.target.reset();
}

function renderComments() {
  const list = document.getElementById("commentList");
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const comment = sampleComments[Math.floor(Math.random() * sampleComments.length)];

  const card = document.createElement("article");
  card.className = "thought-card";
  card.innerHTML = `
    <h3>Fan comment</h3>
    <p>${comment}</p>
    <span>${time}</span>
  `;

  list.prepend(card);

  while (list.children.length > 6) {
    list.removeChild(list.lastElementChild);
  }

  document.getElementById("clockText").textContent = `Updated ${time}`;
}

setInterval(renderComments, 60000);
renderComments();

function unlockAdmin() {
  const pass = prompt("Enter admin password:");
  if (pass === "venom") {
    adminUnlocked = true;
    document.getElementById("adminPanel").classList.remove("hidden");
    alert("Admin unlocked!");
  } else {
    document.getElementById("app").classList.add("hidden");
    document.getElementById("lockedScreen").classList.remove("hidden");
  }
}
