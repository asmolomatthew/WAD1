const loadBtn = document.getElementById("loadBtn");
const retryBtn = document.getElementById("retryBtn");
const statusMsg = document.getElementById("status");
const postsContainer = document.getElementById("postsContainer");
const container = document.querySelector(".container");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// how long the box takes to move up (same as the transition in style.css)
const MOVE_TIME = 600;

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

// 04: render title and body using textContent (no raw HTML)
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

// 02: async/await
async function loadPosts() {
  // initial state: disable button, show loading, clear old posts
  loadBtn.disabled = true;
  retryBtn.style.display = "none";
  statusMsg.className = "";
  statusMsg.textContent = "Loading posts..."; // 05: loading indicator
  postsContainer.textContent = "";

  // move the box up, and start a timer so the posts
  // only show after the box finished moving
  container.classList.add("moved");
  const boxMoved = wait(MOVE_TIME);

  try {
    const res = await fetch(API_URL);

    // 06: fetch does not reject on 404/500, so check res.ok manually
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    // 03: first 5 posts only
    const firstFive = data.slice(0, 5);

    // wait for the box to finish moving up
    await boxMoved;

    // empty state
    if (firstFive.length === 0) {
      statusMsg.textContent = "No posts found.";
      return;
    }

    renderPosts(firstFive);
    statusMsg.textContent = "";
  } catch (err) {
    // 06: network errors and HTTP errors both end up here
    statusMsg.className = "error";
    statusMsg.textContent = "Failed to load posts: " + err.message;
    retryBtn.style.display = "inline-block"; // 07: retry
  } finally {
    // button is re-enabled whether it worked or not
    loadBtn.disabled = false;
  }
}

// 01: load on button click
loadBtn.addEventListener("click", loadPosts);

// 07: retry runs the same function again
retryBtn.addEventListener("click", loadPosts);

// 08: no page refresh, the page only updates through the DOM