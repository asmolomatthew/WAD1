# Dynamic Post Explorer

Week 7 - Fetch API & Asynchronous Data (WAD 1)

A simple webpage that loads blog posts from the JSONPlaceholder API when the user clicks a button. The page does not refresh while the posts load.

## API Used

- Endpoint: `GET /posts`
- Full URL: https://jsonplaceholder.typicode.com/posts

## Project Structure

```
post-explorer/
├── index.html
├── script.js
├── style.css
├── README.md
└── screenshots/
    ├── success.png
    └── error.png
```

- `index.html` - page structure (Load button, status message, Retry button, posts container)
- `script.js` - fetches the posts and displays them on the page
- `style.css` - styling for the card, the posts, and the error message

## Features (Required Behaviors)

1. **Load Button Integration** - posts are only fetched when the user clicks "Load Posts".
2. **Async / Await** - the request is written with `async/await`.
3. **First 5 Posts Limit** - `data.slice(0, 5)` keeps only the first 5 posts.
4. **Safe DOM Rendering** - the title and body are inserted with `textContent`, not `innerHTML`, to prevent XSS.
5. **Loading Indicator** - "Loading posts..." is shown while waiting, and the Load button is disabled to block repeated clicks.
6. **Error Handling** - `response.ok` is checked manually (fetch does not reject on 404/500) and `try/catch` handles network failures.
7. **Retry Capability** - a Retry button appears when the request fails.
8. **No Page Refresh** - the page is updated through the DOM only.

It also shows a "No posts found." message when the API returns an empty array.

## How to Run

1. Download or clone this repository.
2. Open the folder in VS Code and run it with the **Live Server** extension (a local server is recommended to avoid CORS problems), or open `index.html` directly in a browser.
3. Click **Load Posts**.

An internet connection is needed because the posts come from the API.

## Testing

| Test | How | Expected Result |
|------|-----|-----------------|
| Normal click | Click Load Posts | 5 posts are displayed |
| Repeated clicks | Click Load Posts many times quickly | Button is disabled during the request, so no duplicate requests |
| Throttling | DevTools > Network > set to Slow 3G | "Loading posts..." stays visible during the delay |
| Offline mode | DevTools > Network > set to Offline, then click Load Posts | Error message and Retry button appear |
| Retry | Set back to No throttling, then click Retry | Posts load successfully |
| Empty array | Temporarily change `API_URL` to `https://jsonplaceholder.typicode.com/posts?userId=999` | "No posts found." is displayed |
| HTTP error | Temporarily change `API_URL` to `https://jsonplaceholder.typicode.com/postss` | "HTTP error! status: 404" and Retry button appear |

## Screenshots

### Success State
![Success state](screenshots/success.png)

### Error State
![Error state](screenshots/error.png)

## Author

Matthew Asmolo