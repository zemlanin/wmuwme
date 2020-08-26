module.exports = (req, res) => {
  const now = new Date();
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getUTCDay()];
  const day = Math.floor((now - new Date(2020, 2, 1, 0, 0, 0)) / (24 * 60 * 60 * 1000));
  res.write(`<title>Wake Me Up When March Ends</title><h1>Today is ${dayOfWeek}, March ${day}, 2020</h1>`);

  res.writeHead(200, {
    "Content-Type": "text/html",
    "Cache-Control": `s-maxage=${60 * 60}, max-age=0`
  });
  res.end();
};
