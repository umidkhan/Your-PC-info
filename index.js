const http = require("http");
const os = require("os");
const user = os.userInfo();
const CPUs = os.cpus();
const release = os.release();
const osType = os.type();

http
  .createServer((req, res) => {
    res.write(`<h1>Hello ${user.username}</h1>`);
    res.write(`<p>OS Platform: ${os.platform}</p>`);
    res.write(`<p>OS Release: ${release}</p>`);
    res.write(`OS type: ${osType}`)
    res.write(`<p>CPU architecture: ${os.arch}</p>`);
    res.write(
      `<p>CPU info: </p><blockquote>Model: ${CPUs.map(
        (e) => e.model
      )} </blockquote><blockquote>Speed: ${CPUs.map(
        (e) => e.speed
      )}</blockquote>`
    );
  })
  .listen(1000);
