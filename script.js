const loadBtn = document.getElementById("loadBtn");
const retryBtn = document.getElementById("retryBtn");
const statusMsg = document.getElementById("status");
const postsContainer = document.getElementById("postsContainer");
const container = document.querySelector(".container");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const MOVE_TIME = 600;

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
function renderPosts(posts) {
  for (const post of posts) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const body = document.createElement("p");

    card.className = "post";
    title.textContent = post.title;
    body.textContent = post.body;

    card.appendChild(title);
    card.appendChild(body);
    postsContainer.appendChild(card);
  }
}

async function loadPosts() {
  loadBtn.disabled = true;
  retryBtn.style.display = "none";
  statusMsg.className = "";
  statusMsg.textContent = "Loading posts..."; 
  postsContainer.textContent = "";

  container.classList.add("moved");
  const boxMoved = wait(MOVE_TIME);

  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    const firstFive = data.slice(0, 5);
    await boxMoved;
    if (firstFive.length === 0) {
      statusMsg.textContent = "No posts found.";
      return;
    }

    renderPosts(firstFive);
    statusMsg.textContent = "";
  } catch (err) {
    statusMsg.className = "error";
    statusMsg.textContent = "Failed to load posts: " + err.message;
    retryBtn.style.display = "inline-block"; 
  } finally {
    loadBtn.disabled = false;
  }
}
loadBtn.addEventListener("click", loadPosts);
retryBtn.addEventListener("click", loadPosts);