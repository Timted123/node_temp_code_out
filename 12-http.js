const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    return res.end("welcome to our history page");
  }
  res.end(`
    <h1>ooops!</h1>
    <p>we can't seem to find the page yopu are looking for</p>
    <a href="/">back home</a>`);
});

server.listen(5000, () => console.log("Server is listening on port 5000"));
