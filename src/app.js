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
      if (isNaN(value)) {
        res.statusCode = 400;
        // res.writeHead({ "Content-Type": "text/plain" });
        res.end(
          JSON.stringify({
            "Content-Type": "text/plain",
            body: `${value} is not a number`,
          })
        );
      } else if (value % 2 === 0) {
        res.statusCode = 200;
        // res.writeHead({ "Content-Type": "text/plain" });
        res.end(
          JSON.stringify({
            "Content-Type": "text/plain",
            body: `The number ${value} is even`,
          })
        );
      } else if (value % 2 !== 0) {
        res.statusCode = 404;
        // res.writeHead({ "Content-Type": "text/plain" });
        res.end(
          JSON.stringify({
            "Content-Type": "text/plain",
            body: `The number ${value} is odd`,
          })
        );
      }

      // Write the code here to check if the number is odd or even
    });
  }
});

module.exports = server;
