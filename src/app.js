const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const chunks = [];

    req.on("data", (chunk) => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks);
      const value = obj.num1;
      if (value % 2 === 0) {
        // res.statusCode = 200;
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(
          JSON.stringify({
            body: `The number ${value} is even`,
          })
        );
      }

      // Write the code here to check if the number is odd or even
    });
  }
});

module.exports = server;
